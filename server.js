// Tiny Express server: proxies /admin, /api, /static to the Django backend
// and serves the Vite-built React SPA for everything else. Lets the admin
// live at ascapitalrealestate.com/admin under a single domain.

import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;
const BACKEND_URL = process.env.BACKEND_URL || 'https://ascapital-api.onrender.com';

// Render's edge sets X-Forwarded-* headers; trust them so req.hostname is the
// public hostname (e.g. ascapitalrealestate.com), not the internal one.
app.set('trust proxy', true);

// /static covers Django admin's CSS/JS (Vite emits frontend assets under /assets,
// so no clash). pathFilter (not app.use mount path) so the prefix isn't stripped
// before forwarding. We set X-Forwarded-* manually so Django (with
// USE_X_FORWARDED_HOST=True) sees the public hostname and ALLOWED_HOSTS matches.
app.use(createProxyMiddleware({
  pathFilter: (pathname) =>
    pathname.startsWith('/admin') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/static'),
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

// TEMP: debug endpoint — reveals what Render's edge actually passes to us.
// Remove once /admin is verified working through the public domain.
app.get('/__debug_headers', (req, res) => {
  res.json({
    hostname: req.hostname,
    protocol: req.protocol,
    secure: req.secure,
    ip: req.ip,
    ips: req.ips,
    headers: req.headers,
  });
});

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}, proxying /admin /api /static → ${BACKEND_URL}`);
});
