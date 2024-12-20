import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/Weather",
  plugins: [react()],
  build: {
    // Desactiva el chequeo de tipos
    target: 'esnext',
    minify: false,
  },
})
