import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
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
    // alias: {
    //   '@': path.resolve(__dirname, 'src')
    // },
    // extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.tsx', '.vue'],
  }
})
