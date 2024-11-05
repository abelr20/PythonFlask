import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/members': {
        target: 'http://localhost:5001', // Point to your Flask server
        changeOrigin: true,
        rewrite: path => path.replace(/^\/members/, '/members'),
        secure: false,
      },
    },
  },
});
