<template>
  <div class="vertical-ad">
    <div class="one">
     <h1> LATEST NEWS </h1>
   </div>
  <div class="aditem" v-for=" (d, key, index) in data" :key="key">
     
    <ShrinkCard :sslug="slug"   :id="d.id" :title="d.title" :imageUrl="d.img[0].downloadURL" /> 
    <div  class="vads" v-if="key === 0">
  <a   v-if='datav && datav.length > 0    ' :href='datav[0].link  ' target="_blank" >
      <img class="adimg"
       :src='datav[0].image '
        />
    </a></div>
   <div id="kid"  ></div>
  </div>
     

  

 
     </div>
</template>

<script>
import  ShrinkCard from './ShrinkCard.vue';
 
import { useDataStore } from "../store/useDataStore.js";
 
export default {
  name: 'VerticalAd',
  components: {
    ShrinkCard,
  },

  async mounted(props){
    let Script = document.createElement("script");
    
    Script.setAttribute("src", "https://platform.twitter.com/widgets.js");
    document.head.appendChild(Script);
   
    let Scriptads = document.createElement("script");
    
    Scriptads.setAttribute('key','bc7d042fa8366c2b8f6af5d5ccae5363');
           Scriptads.setAttribute('format' , 'iframe');
     Scriptads.setAttribute('height' , 250);
     Scriptads.setAttribute('width' , 300);

    

     document.getElementById('kidk').appendChild(Scriptads);

  },

  async setup(props) {

    
     
  
  
     
    


    const dataStore = useDataStore();
    let datav = [];

    let slug = "Article";
    await dataStore.getDealsVerticalBanner();
    datav = dataStore.data ; 
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
 .aditem {

  flex-direction: column-reverse;
display:flex;
justify-content:center;
align-items:center;

 }
.vads {
 margin-top:6px;
margin-bottom:6px;
display:flex;
justify-content:center;
align-items:center;


}
.adimg{
     width: 100%;
  max-width:310px;
   height:'auto';

}
.vertical-ad {
   height: 1450px; /* 1043px * 1.39 */
   display: flex;
  flex-direction:column;
   align-items: center;
  

}



/* === HEADING STYLE #1 === */

.one {
  width:100%;
 display:flex;
 justify-content:center;


}

.one h1 {
  font-weight: 700; color:#202020;
  text-transform: uppercase;
  word-spacing: 1px; letter-spacing:2px;
  text-align: center;
   padding-bottom: 8px;
  margin-bottom:4px;
  font-size:24px;

  

}
 
.one h1:after {
  width: 100%;
  height: 1px;
  display: block;
  content: "";
   margin-top: 25px;
   background-color: #b80000;
}

</style>