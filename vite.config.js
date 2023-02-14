import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteSSR from 'vite-ssr/plugin.js'
import api from './node-server/api.js'
import Sitemap from 'vite-plugin-sitemap';
import allData from "./src/store/ssrstore.js";


const ASSET_URL = process.env.ASSET_URL || '';

// https://vitejs.dev/config/
export default defineConfig( async ({ command, mode }) => {
  const games = await allData();
  const dynamicRoutes = games.map(name => `/articles/${name["title"]}/${name["id"]}`);

 // console.log(dynamicRoutes);
  return {
    plugins: [
      vue(),
      Sitemap({ outDir:"public",dynamicRoutes }),
     
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
  };
})
