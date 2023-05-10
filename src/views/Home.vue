<template>
  <box>

    <Header    />
    <Banner
      v-if="dataStore.data.length > 0"
      :id="dataStore.data[0].id"
      :title="dataStore.data[0].title"
      :tag="dataStore.data[0].tag"
      :sub="dataStore.data[0].sub"
      :rating="dataStore.data[0].rating"
      :img="dataStore.data[0].img[0].downloadURL"
      :imgurl="dataStore.data[0].imgurl"
    />
   
   

<Title text="Our latest news and events"/>
               <div class="line"></div>

  </box>
 

  <ListView  :d="dataStore.data.slice(0,6)" />

  <Box>
    <Title v-if="dataStore.data.length>6" text="Latest articles"/>

  <div id="vlst" v-if="dataStore.data.length>6" >


  <VlistView  :d="dataStore.data.slice(6,dataStore.data.length)" />
   <SideBar  :d="dataStore.sidebarData" />
  </div>
  
  </Box>
  
  <Pagination   />
  <Footer />
</template>

<script>
import BoxVue from "../components/Box.vue";
import BannerVue from "../components/Banner.vue";
import HeaderVue from "../components/Header.vue";
import ListViewVue from "../components/ListView.vue";
import FooterVue from "../components/Footer.vue";
import TitleVue from "../components/TitleSection.vue";
import PaginationVue from "../components/Pagination.vue";
import SideBarVue from "../components/SideBar.vue";
import VlistViewVue from "../components/VListView.vue";

import {useDataStore} from "../store/useDataStore.js"
import { useHead } from '@vueuse/head'
import {  computed } from 'vue';

import { useNavStore } from "../store/useNavStore.js"

export default {
  name: "Home",
  setup() {
    const dataStore = useDataStore()
    const store = useNavStore();
    useHead({
      
      title:computed(()=>   "GamerSubculture"),
   
      meta: [
    
      {
       name: `og:title`,
       content:computed(()=> "All Video Game world: news and Reviews - GamerSubculture" ),
        },
     {
       name: `description`,
       content:computed(()=>  "Gamersubculture is a home for all the gaming world, news, previews, trailer and reviews, you will find the latest video game world news about pcgames, Console game, entertainment and much more. An independent site run by real gamers just like you."),
     },
    
     
   
      ],
  
    });


    return { dataStore ,store}
  },
  components: {
    Box: BoxVue,
    Header: HeaderVue,
    Banner: BannerVue,
    ListView: ListViewVue,
    Footer: FooterVue,
    Title: TitleVue,
    Pagination: PaginationVue,
    SideBar: SideBarVue,
    VlistView: VlistViewVue,
},
computed:{
      
  

    },
  data() {
    return {
      name: "",
      data: [],
     
      
    };
  },
 
  async mounted() {
   // console.log("path----",this.category);
      switch(this.category) {
        case "tech":
         await this.dataStore.getNewsArticles();
        this.store.setIsNews(true);
    await this.dataStore.getSidebarDataEnter();
              
          break;
         case "games":
         await this.dataStore.getGameArticles();
         this.store.setIsGame(true);
    await this.dataStore.getSidebarDataEnter();
              
          break;
          case "entertainment":
            this.store.setIsEntertainment(true);
          await this.dataStore.getEntertainmentArticles();
          await this.dataStore.getSidebarDataGames();
           break ;

           case "smlc":
           this.store.setIsScifi(true);
          await this.dataStore.getSMLCArticles();
          await this.dataStore.getSidebarDataEnter();
            break;

          default:
          this.store.setIsGame(true);

          await this.dataStore.getGameArticles();
          await this.dataStore.getSidebarDataEnter();
          ;

      }
   
   // await this.getEnter();
  },
  props:[
    "category"
  ]
 
};
</script>

<style>
ul {
  margin:32px;
  text-align: start;
}
h3 {
  text-align: left;
}
h4 {
  text-align: left;
}
#vlst {
  display:flex;
  flex-direction:row;
}
.ms {
  display: flex;
  flex-direction: row;
}

.line {
    height: 0.2px;
  margin-top: 10px;

  background-color:#424242;
  width: 100%;
 
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 6px;
}


</style>
