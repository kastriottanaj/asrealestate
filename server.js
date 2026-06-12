// Tiny Express server: proxies /admin, /api, /static to the Django backend
// and serves the Vite-built React SPA for everything else. Lets the admin
// live at asrealestate-rks.com/admin under a single domain.

import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;
const BACKEND_URL = process.env.BACKEND_URL || 'https://ascapital-api.onrender.com';
const DIST = path.join(__dirname, 'dist');

// Render's edge sets X-Forwarded-* headers; trust them so req.hostname is the
// public hostname (e.g. asrealestate-rks.com), not the internal one.
app.set('trust proxy', true);
app.disable('x-powered-by');

// Baseline security headers for everything this server emits. Django sets
// its own on proxied /admin and /api responses; the proxy copies those over
// these where they overlap.
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('Strict-Transport-Security', 'max-age=2592000');
  next();
});

// /static covers Django admin's CSS/JS (Vite emits frontend assets under /assets,
// so no clash). pathFilter (not app.use mount path) so the prefix isn't stripped
// before forwarding. We set X-Forwarded-* manually so Django (with
// USE_X_FORWARDED_HOST=True) sees the public hostname and ALLOWED_HOSTS matches.
// Filters use trailing slashes so we don't grab unrelated paths that just
// share a prefix — e.g. vite-react-ssg emits /static-loader-data-manifest-
// <hash>.json at the site root, and it must be served by express.static, not
// proxied to Django. Without the slash, every navigation that fetches that
// manifest hit Django, returned 404 HTML, and the data router crashed with
// "Unexpected token '<' ... is not valid JSON" mid-navigation.
app.use(createProxyMiddleware({
  pathFilter: (pathname) =>
    pathname === '/admin' || pathname.startsWith('/admin/') ||
    pathname === '/api' || pathname.startsWith('/api/') ||
    pathname.startsWith('/static/'),
  target: BACKEND_URL,
  changeOrigin: true,
  on: {
    proxyReq: (proxyReq, req) => {
      const fwdHost = req.headers['x-forwarded-host'] || req.headers.host;
      const fwdProto = req.headers['x-forwarded-proto'] || (req.socket?.encrypted ? 'https' : 'http');
      const fwdFor = req.headers['x-forwarded-for'] || req.socket?.remoteAddress || '';
      if (fwdHost) proxyReq.setHeader('X-Forwarded-Host', fwdHost);
      proxyReq.setHeader('X-Forwarded-Proto', fwdProto);
      if (fwdFor) proxyReq.setHeader('X-Forwarded-For', fwdFor);
    },
  },
}));

// redirect: false → don't auto-redirect /sherbimet → /sherbimet/. Our
// canonical URLs are slash-less; the catch-all below serves the right
// nested HTML for either form.
app.use(express.static(DIST, { redirect: false }));

// vite-react-ssg emits dist/<route>/index.html for every static route. When
// the URL has no trailing slash (e.g. /sherbimet), express.static doesn't
// serve the directory index — handle that explicitly so the pre-rendered
// HTML (with proper <title>/<h1>/JSON-LD) is delivered to crawlers.
app.get('*', (req, res) => {
  if (!path.extname(req.path)) {
    // resolve + path.sep boundary: a crafted path can neither escape dist/
    // via ../ segments nor reach a sibling directory like dist-backup/.
    const nested = path.resolve(DIST, '.' + req.path, 'index.html');
    if (nested.startsWith(DIST + path.sep) && fs.existsSync(nested)) {
      return res.sendFile(nested);
    }
  }
  // SPA fallback: dynamic routes (e.g. /prona/:slug) and unknown paths
  // get the home shell; client-side React Router resolves the actual route.
  res.sendFile(path.join(DIST, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}, proxying /admin /api /static → ${BACKEND_URL}`);
});
