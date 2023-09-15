import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import * as path from "path";

export default defineConfig({
  base: process.env.VITE_API_BASE_URL,
  build: {
    rollupOptions: {
      output:{
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        }
      }
    }
  },
  plugins: [Vue()],
  resolve: {
    alias: {
      '@': path.resolve( 'src')
    },
    extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.tsx', '.vue'],
  }
});
