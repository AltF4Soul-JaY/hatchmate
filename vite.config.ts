import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: '/index.html',
      },
    },
  },
  server: {
    open: true,
    historyApiFallback: true,
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
