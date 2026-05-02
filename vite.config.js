import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  ssgOptions: {
    script: 'async',
    formatting: 'none',
    // 'flat' produces dist/sherbimet.html etc. so Render's static
    // file resolution serves the right page without depending on
    // route rewrites. Render auto-resolves /sherbimet -> /sherbimet.html.
    dirStyle: 'flat',
  },
})
