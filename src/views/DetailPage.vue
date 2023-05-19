<template>
<box><DetaillNav /></box>
  <Suspense>
  <Article
  v-if="homeLocalState !== null"
    :title="homeLocalState.title"
    :sub="homeLocalState.subtitle"
    :img="homeLocalState.img"
    :tag="homeLocalState.tag"
    :story="homeLocalState.story"
    :analyse="homeLocalState.analyse"
    :platform="homeLocalState.platform"
    :dev="homeLocalState.dev"
    :video="homeLocalState.video"
    :rating="homeLocalState.rating"
    :release="homeLocalState.release"
    :imgurl="homeLocalState.imgurl"
  />
  </Suspense>
  <Footer  />
</template>
<script>
import ArticleVue from "../components/Article.vue";
import FooterVue from "../components/Footer.vue";
import { collection, getDoc,doc } from "firebase/firestore";
import DetailNavVue from "../components/Dnav.vue"
import BoxVue from "../components/Box.vue";
import db from "../dbclient/dbclient.js";
import {   ref } from 'vue'
import { useHead } from '@vueuse/head'
import { useContext } from 'vite-ssr/vue'
import {  computed } from 'vue';

import moment from "moment";


export default {
  name: "DetailPage",
  mounted(){


  },
  async setup(props) {
   // console.log("props---",props);

  //   const sdata = [];
 //   const q = collection(db, "articles");
    //  const queryR = query(q, where("__name__", "==", props.id));
      const queryR = doc(db, "articles", props.id);

     /* const firebaseData = getDocs(queryR).then((querySnapshot) => {



        querySnapshot.forEach((doc) => {

          sdata.push({
            id: doc.id,
            title: doc.data().title,
            img: doc.data().img,
            sub: doc.data().subtitle,
            story: doc.data().story,
            dev: doc.data().dev,
            analyse: doc.data().analyse,
            video: doc.data().video,
            platform: doc.data().platform,
            rating: doc.data().rating,
            tag: doc.data().tag,
            date: doc.data().date,
            release: doc.data().release,
            imgurl: doc.data().imgurl
          });
        })
        if (sdata.length === 0) {
          //this.error = true;
        }
      });*/

////////////////////////////////////////////////////////
       const { initialState } = useContext();
       // Hydrate from initialState, if there's anything
       const homeLocalState = ref(initialState.homeLocalState || null);
       console.log("computed--,", homeLocalState.value );
       useHead({
      
         title:computed(()=>  homeLocalState.value !==null ? homeLocalState.value.title : ""),
         

         meta: [
         {
          name:`twitter:card`,
          content:`summary_large_image`
        },
         {
          name: `og:title`,
          content:computed(()=>  homeLocalState.value !==null ? homeLocalState.value.title : ""),
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

         script: [ { 
    type:"application/ld+json",
    children:computed(()=>`
{
              "@context": "https://schema.org",
              "@type": "NewsArticle",
              "headline": "${computed(()=> homeLocalState.value !==null ? homeLocalState.value.title : "").value}",
              "image": [
              "${computed(()=> homeLocalState.value !==null ? homeLocalState.value.imgurl : "").value}"
                
              ],
              "datePublished": "${computed(()=> homeLocalState.value !==null && homeLocalState.value._createdAt!==undefined ?new moment(homeLocalState.value._createdAt.seconds*1000) : "").value}",
              "dateModified": "${computed(()=> homeLocalState.value !==null && homeLocalState.value._createdAt!==undefined ?new moment(homeLocalState.value._createdAt.seconds*1000) : "").value}",
             
              "author": [{
                  "@type": "Person",
                  "name": "Rolox Tot",
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
                              
        // console.log("Home---",homeLocalState.value._createdAt);
         if (import.meta.env.SSR) {
           // Save this data in SSR initial state for hydration later
           initialState.homeLocalState = homeLocalState.value;
         }
       }
       return {
        homeLocalState
       }
      
      },
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
  props: ["id",],
  created() {
    //this.readArticles();
  },
  methods: {
    readArticles() {
     
    },
  },
};
</script>

<style>
h4 {
  text-align: left;
}
ul {
  margin:32px;
  text-align: start;
}

</style>
