<template>
<div>
<box><DetaillNav /></box>
  <Article
  v-if="homeLocalState !== null"
    :title="homeLocalState.title"
    :sub="homeLocalState.sub"
    :img="homeLocalState.img"
    :tag="homeLocalState.tag"
    :analyse="homeLocalState.analyse"
    :video="homeLocalState.video"
    :date="homeLocalState.date"
    :imgurl="homeLocalState.imgurl"
  />
  <Footer  />
  </div>
</template>

<script>
import ArticleVue from "../components/ScienceArticle.vue";
import FooterVue from "../components/Footer.vue";
import { collection, where, query, getDocs,doc,getDoc } from "firebase/firestore";
import DetailNavVue from "../components/Dnav.vue"
import db from "../dbclient/dbclient.js";
import BoxVue from "../components/Box.vue";
import {  inject, ref } from 'vue'
import { useHead } from '@vueuse/head'
import { useContext } from 'vite-ssr/vue'
import {  computed } from 'vue';

export default {
  name: "DetailPage",
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
     const queryR = doc(db, "entertainment", props.id);
    
     const { initialState } = useContext();
       // Hydrate from initialState, if there's anything
       const homeLocalState = ref(initialState.homeLocalState || null)
         console.log("Home---",homeLocalState.value);
       const title = '';


       try{

       //  title = homeLocalState.value.title;

       }catch(e){

       }
       useHead({
         title:computed(()=>  homeLocalState.value !==null ? homeLocalState.value.title : "" ),
         htmlAttrs: { lang: 'es' },
         bodyAttrs: { class: 'dummy test' },
         meta: [
           {
          name: `og:title`,
          content:computed(()=>  homeLocalState.value !==null ? homeLocalState.value.title : "" ),
           },
        {
          name: `description`,
          content:computed(()=> homeLocalState.value !==null ? homeLocalState.value.sub : ""),
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
         script: [
           {
             type: 'application/ld+json',
             children: JSON.stringify({ something: true }),
           },
         ],
       })
       if (!homeLocalState.value) {
         // No data, get it fresh from any API
         const fbd = await getDoc(queryR);

         if(fbd.exists())
                 homeLocalState.value = fbd.data();
                              
        // console.log("Home---",homeLocalState.value);
         if (import.meta.env.SSR) {
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


</style>
