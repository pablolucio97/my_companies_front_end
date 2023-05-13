import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve:{
    alias:{
      '@assets': '/src/assets',
      '@components': '/src/components',
      '@pages': '/src/pages',
      '@styles': '/src/styles',
      '@theme': '/src/theme',
      '@routes': '/src/routes',
      '@utils': '/src/utils',
      '@services': '/src/services',
      '@store': '/src/store',
    }
  }
})
