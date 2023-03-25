import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'



// or from 'vite-ssr/vue' or 'vite-ssr/react', which slightly improves typings

import routes from './router/index.js'
import viteSSR, { ClientOnly } from 'vite-ssr'
import { createHead } from '@vueuse/head'
import { library } from '@fortawesome/fontawesome-svg-core';
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import { faLink,faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTwitter,faFacebookF,faRedditAlien } from '@fortawesome/free-brands-svg-icons';
library.add(faLink,faEnvelope,faTwitter,faFacebookF,faRedditAlien );


export default viteSSR(
    App,
    { routes },
    ({ app, router, isClient, url, initialState, initialRoute, request }) => {
      const head = createHead();
  
      
      const pinia = createPinia()
      app.use(pinia);

      app.use(head);

      app.component('font-awesome-icon', FontAwesomeIcon);

      app.component(ClientOnly.name, ClientOnly);
     
      
      // Before each route navigation we request the data needed for showing the page.
      router.beforeEach(async (to, from, next) => {

        if (!!to.meta.state && Object.keys(to.meta.state).length > 0) {
          // This route has state already (from server) so it can be reused.
          // State is always empty in SPA development, but present in SSR development.

          return next();
        }
  
        // `isClient` here is a handy way to determine if it's SSR or not.
        // However, it is a runtime variable so it won't be tree-shaked.
        // Use Vite's `import.meta.env.SSR` instead for tree-shaking.
        const baseUrl = isClient ? '' : url.origin
  
        // Explanation:
        // The first rendering happens in the server. Therefore, when this code runs,
        // the server makes a request to itself (running the code below) in order to
        // get the current page props and use that response to render the HTML.
        // The browser shows this HTML and rehydrates the application, turning it into
        // a normal SPA. After that, subsequent route navigation runs this code below
        // from the browser and get the new page props, which is this time rendered
        // directly in the browser, as opposed to the first page rendering.
  
        try {
          
          // Get our page props from our custom API:
         const res = await fetch(
            `${baseUrl}/api/getProps?path=${encodeURIComponent(to.path)}&name=${
              to.name
            }&client=${isClient}`,
            {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              },
            }
          )
  
          to.meta.state = await res.json()
        } catch (error) {
          console.error(error)
          // redirect to error route
        }
  
        next();
      })
  
      return { head };
    }
  )