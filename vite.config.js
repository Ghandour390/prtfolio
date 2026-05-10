import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
  },
  server: {
    port: 5174,
    allowedHosts: true ,
    hmr: {
      overlay: true, // Affiche les erreurs HMR dans le navigateur
    },
    watch: {
      usePolling: true, // Utile sur Windows pour détecter les changements
    },
  },
})
