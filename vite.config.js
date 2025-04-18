import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repoName = 'portfolio';

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true,  // Equivalent to 0.0.0.0
    port: 5173,
  },
  base: `/${repoName}/`,
  plugins: [react()],
})
