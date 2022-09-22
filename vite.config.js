import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteSSR from 'vite-ssr/plugin.js'
import api from './node-server/api.js'

// import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteSSR({
      build: {
        keepIndexHtml: true,
      },
    }),
    {
      // Mock API during development
      configureServer({ middlewares }) {
        api.forEach(({ route, handler }) => middlewares.use(route, handler))
      },
    },
  ],
  resolve: {
    alias: {
    },
  },
  server: { 
    fs: {
    // The API logic is in outside of the project
    strict: false,
  },
    hmr: { overlay: false },
  },
})
