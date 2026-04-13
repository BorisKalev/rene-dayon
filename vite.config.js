import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // Serve from rene-dayon/ — that's where all source files live
  root: 'rene-dayon',
  plugins: [react(), tailwindcss()],
  build: {
    // Output to root dist/ so Vercel's outputDirectory: "dist" keeps working
    outDir: '../dist',
    emptyOutDir: true,
  },
})
