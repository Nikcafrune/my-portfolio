import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/my-portfolio/',   // <- NOME DO REPO AQUI
  plugins: [react()],
})