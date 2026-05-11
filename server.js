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

// /static covers Django admin's CSS/JS (Vite emits frontend assets under /assets,
// so no clash). xfwd preserves the original host/proto for Django's CSRF check.
// pathFilter (not app.use mount path) so the prefix isn't stripped before forwarding.
app.use(createProxyMiddleware({
  pathFilter: (pathname) =>
    pathname.startsWith('/admin') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/static'),
  target: BACKEND_URL,
  changeOrigin: true,
  xfwd: true,
}));

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}, proxying /admin /api /static → ${BACKEND_URL}`);
});
