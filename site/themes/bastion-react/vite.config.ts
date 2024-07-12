import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import copy from "rollup-plugin-copy";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        index: '/index.html',
        page: '/page.html',
      },
      plugins: [
        copy({
          targets: [
            { src: 'templates/assets', dest: 'static' },
          ],
          verbose: true,
          hook: 'writeBundle',
        }),
      ]
    },
    outDir: 'templates',
  }
})
