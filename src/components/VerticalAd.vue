<template>
  <div class="vertical-ad">
   
    <a  class="vads" v-if='datav && datav.length > 0' :href='datav[0].link  ' target='_parent'>
      <img width='100%' height='auto'
       :src='datav[0].image '
        />
    </a>

 

     <ShrinkCard :sslug="slug" v-for="d in data" :id="d.id" :title="d.title" :imageUrl="d.img[0].downloadURL" /> 
    

 
     </div>
</template>

<script>
import  ShrinkCard from './ShrinkCard.vue';
import { defineComponent } from 'vue';

import { useDataStore } from "../store/useDataStore.js";
import Article from './Article.vue';

export default {
  name: 'VerticalAd',
  components: {
    ShrinkCard,
  },

  async setup(props) {
    const dataStore = useDataStore();
    let datav = [];

    let slug = "Article";
    await dataStore.getDealsVerticalBanner();
    datav = dataStore.data ; 
      console.log("ver----",datav);
     return { datav,slug };

  },
  props: {
    data: {
      type: Array,
     },


      
  },  
};
</script>

<style scoped>

.vads {

margin-top:4px;
}
.vertical-ad {
   height: 1450px; /* 1043px * 1.39 */
   display: flex;
  flex-direction:column;
   align-items: center;
}
</style>