import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  server: {
    port: 5174
  },
  publicDir: "./public",
  build: {
    emptyOutDir: true,
    outDir: "./dist",
    copyPublicDir: true,
    cssMinify: "lightningcss",
  },
  plugins: [react(), tailwindcss()],
})
