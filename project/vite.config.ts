import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Render用にルートパスに変更
  server: {
    port: 3000,
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
