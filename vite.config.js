import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  ssgOptions: {
    entry: 'src/main.jsx',
    // 'defer' (or omitting) keeps the module bundle from racing against the
    // inline <script> that sets window.__VITE_REACT_SSG_HASH__. With 'async'
    // the bundle would sometimes execute first and fetch
    // /static-loader-data-manifest-undefined.json → 400 → hydration aborts.
    script: 'defer',
    formatting: 'none',
    // 'nested' produces dist/sherbimet/index.html etc. server.js serves
    // these via express.static; the SPA fallback handles dynamic routes
    // like /prona/:slug that aren't pre-rendered.
    dirStyle: 'nested',
    // Dynamic routes (/prona/:slug) are skipped from SSG — they fall
    // through to the SPA shell at runtime.
    includedRoutes(paths) {
      return paths.filter((p) => !p.includes(':'))
    },
  },
})
