import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // ✅ Correct for user sites (jayanthaa-1.github.io)
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
