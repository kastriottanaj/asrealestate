import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  ssgOptions: {
    script: 'async',
    formatting: 'none',
    // 'nested' produces dist/sherbimet/index.html etc.
    // Render serves these correctly when URLs end with a trailing
    // slash (directory index). The SPA navigates with trailing
    // slashes so client-side routing always lands on a real file.
    dirStyle: 'nested',
  },
})
