import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import copy from "rollup-plugin-copy";
import del from "rollup-plugin-delete";
import { globSync } from "fast-glob";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        index: '/index.html',
        section: '/section.html',
        page: '/page.html',
      },
      plugins: [
        del({
          targets: 'static/assets',
          hook: 'buildEnd',
        }),
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
