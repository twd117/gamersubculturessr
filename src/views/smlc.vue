<template>
  <div>
  <box><DetaillNav /></box>
  <Suspense>

    <Article
    v-if="homeLocalState !== null"
      :title="homeLocalState.title"
      :sub="homeLocalState.subtitle"
      :img="homeLocalState.img"
      :tag="homeLocalState.tag"
      :analyse="homeLocalState.analyse"
      :video="homeLocalState.video"
      :date="homeLocalState.date"
      :imgurl="homeLocalState.imgurl"
    />
  </Suspense>

    <Footer  />
    </div>
  </template>
  
<script>
  import ArticleVue from "../components/ScienceArticle.vue";
  import FooterVue from "../components/Footer.vue";
  import { doc,getDoc } from "firebase/firestore";
  import DetailNavVue from "../components/Dnav.vue"
  import db from "../dbclient/dbclient.js";
  import BoxVue from "../components/Box.vue";
  import {   ref } from 'vue'
  import { useHead } from '@vueuse/head'
  import { useContext } from 'vite-ssr/vue'
  import {  computed } from 'vue';
  import moment from "moment";
 

  
  export default {
    name: "Smlc",
    components: {
      Footer: FooterVue,
      Article: ArticleVue,
      DetaillNav:DetailNavVue,
          Box: BoxVue,
  
  
    },
    data() {
      return {
        data: [],
        error: false,
      };
    },
    props: ["id"],
    created() {
     // this.readArticles();
    },
   async setup(props) {
  
   const sdata = [];
       //  const queryR = query(q, where("__name__", "==", props.id));
       const queryR = doc(db, "smlc", props.id);
      
       const { initialState } = useContext();
         // Hydrate from initialState, if there's anything
         const homeLocalState = ref(initialState.homeLocalState || null)
        //   console.log("Home---",homeLocalState.value);
  
  
         try{
  
         //  title = homeLocalState.value.title;
  
         }catch(e){
  
         }

           


         useHead({
           title:computed(()=>  homeLocalState.value !==null ? homeLocalState.value.title : "" ),
      
           meta: [
           {
            name:`twitter:card`,
            content:`summary_large_image`
          },
             {
            name: `og:title`,
            content:computed(()=>  homeLocalState.value !==null ? homeLocalState.value.title : "" ),
             },
          {
            name: `description`,
            content:computed(()=> homeLocalState.value !==null ? homeLocalState.value.subtitle : ""),
          },
         
           {
            name: `og:image`,
            content: computed(()=> homeLocalState.value !==null ? homeLocalState.value.imgurl : ""),
          },
            {
            name: `og:type`,
            content: "article",
          },
         
           ],
         
        
           link: [{ rel: 'stylesheet' }],
           script: [ { 
    type:"application/ld+json",
    children:computed(()=>`
{
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "${computed(()=> homeLocalState.value !==null ? homeLocalState.value.title : "").value}",
              "image": [
              "${computed(()=> homeLocalState.value !==null ? homeLocalState.value.imgurl : "").value}"
                
              ],
              "datePublished": "${computed(()=> homeLocalState.value !==null ?new moment(homeLocalState.value.date.seconds*1000) : "").value}",
              "dateModified": "${computed(()=> homeLocalState.value !==null ?new moment(homeLocalState.value.date.seconds*1000) : "").value}",
              "author": [{
                  "@type": "Person",
                  "name": "rolox",
                  "url": "https://twitter.com/Rolox77"}],
                  "articleSection":"${computed(()=> homeLocalState.value !==null ?homeLocalState.value.subtitle:"").value}",


                    "publisher": {
                                    "@type": "Organization",
                                    "name": "GamerSubculture"
                                  }
}`
         )} ]
          
        
         });
         if (true) {
           // No data, get it fresh from any API
           const fbd = await getDoc(queryR);
           if(fbd.exists())
                   homeLocalState.value = fbd.data();
                  
                                
           if (import.meta.env.SSR) {
          //  console.log("Home---",homeLocalState.value);

             // Save this data in SSR initial state for hydration later
             initialState.homeLocalState = homeLocalState.value;
           }
         }
         return {
          homeLocalState
         }
      
      
      }
  
    ,
    methods: {
      readArticles() {
        
      },
    },
  };
  </script>
  
  <style>
  ul {
  margin:32px;
  text-align: start;
}
h4 {
  text-align: left;
}
  
  </style>
  /*
  
  script: [ { 
    type:"application/ld+json",
    children:computed(()=>`{
"@context": "https://www.gamersubculture.com",
"@type": "NewsArticle",
"headline": "${computed(()=> homeLocalState.value !==null ? homeLocalState.value.title : "").value}",
"image": [
"${computed(()=> homeLocalState.value !==null ? homeLocalState.value.imgurl : "").value}"
  
 ],
"datePublished": "${computed(()=> homeLocalState.value !==null ?new moment(homeLocalState.value._createdAt.seconds*1000) : "").value}",
"dateModified": "${computed(()=> homeLocalState.value !==null ?new moment(homeLocalState.value._createdAt.seconds*1000) : "").value}",
"author": [{
    "@type": "Person",
    "name": "rolox",
    "url": "https://twitter.com/Rolox77"
  }]
  
  */ 