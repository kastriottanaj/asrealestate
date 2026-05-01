import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  ssgOptions: {
    script: 'async',
    formatting: 'none',
    dirStyle: 'nested',
  },
})
