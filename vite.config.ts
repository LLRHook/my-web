import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// Configuration for GitHub Pages deployment
export default defineConfig({
  plugins: [react()],
  base: '/my-web/',
  assetsInclude: ['**/*.pdf']
})
