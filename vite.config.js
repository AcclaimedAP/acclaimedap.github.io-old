import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "/src/assets/styles/_variables.scss" as *;',
      },
    },
  },
  plugins: [vue()],
});
