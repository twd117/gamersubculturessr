import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteSSR from 'vite-ssr/plugin.js'
import api from './node-server/api.js'
import Sitemap from 'vite-plugin-sitemap';
import allData from "./src/store/ssrstore.js";
import { rssPlugin } from "vite-plugin-rss";


const ASSET_URL = process.env.ASSET_URL || '';

// https://vitejs.dev/config/
export default defineConfig( async ({ command, mode }) => {
  const dynamicRoutes = await allData(true);
  const rss = await allData(false);

 // console.log(dynamicRoutes);
  return {
    plugins: [
      vue(),
      Sitemap({  hostname:"https://www.gmrnews.com",outDir:"public",dynamicRoutes }),

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

      rssPlugin({
        mode: "define",
        items: [
         ...rss
        ],
        channel: {
          title: "Gmrnews RSS Feed",
          link: "https://www.gmrnews.com",
          description: "Rss feed for https://www.gmrnews.com.",
        },
      }),

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
