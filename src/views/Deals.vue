<template>

</template>
<script>
 
 import { useHead } from '@vueuse/head'
import { useContext } from 'vite-ssr/vue'
import {  computed } from 'vue';
 import { useRoute } from 'vue-router';

import moment from "moment";


export default {
  name: "Deals",
  mounted(){


  },
  async setup(props) {
  
 
     const route = useRoute();
         console.log("props::::",route.query);


     if (typeof window !== 'undefined') {

       if(route.query.red)
            window.location.href = 'https://'+route.query.red;

       if(route.query.r)
            window.location.href = 'https://www.amazon.com/dp/'+route.query.r+"?&linkCode=sl1&tag=twd117259-20";

              }




   
////////////////////////////////////////////////////////
      
       
       

      },
  components: {
    
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

<style scoped>
h4 {
  text-align: left;
}
ul {
  margin:32px;
  text-align: start;
}

</style>
