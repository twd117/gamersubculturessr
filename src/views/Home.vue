<template>
  <box>
    <Header :isScience="isScience" :isScienceMethode="isScienceMethode" :sciences="readSciencesArticles" :games="readArticles" />
    <Banner
      v-if="data.length > 0"
      :id="data[0].id"
      :title="data[0].title"
      :tag="data[0].tag"
      :sub="data[0].sub"
      :rating="data[0].rating"
      :img="data[0].img[0].downloadURL"
      :isScience="isScience"
      :imgurl="data[0].imgurl"
    />
    <Title />
               <div class="line"></div>

  </box>
 

  <ListView :isScience="isScience" :d="data" />

  
  <Pagination :isScience="isScience" :next="readArticlesNext" :nextScience="readSciencesArticlesNext"  />
  <Footer />
</template>

<script>
import BoxVue from "../components/Box.vue";
import BannerVue from "../components/Banner.vue";
import HeaderVue from "../components/Header.vue";
import ListViewVue from "../components/ListView.vue";
import FooterVue from "../components/Footer.vue";
import TitleVue from "../components/TitleSection.vue";
import PaginationVue from "../components/Pagination.vue"
import SideBarVue from "../components/SideBar.vue";
import {
  collection,
  query,
  getDocs,
  orderBy,
  limit,
  startAfter,
} from "firebase/firestore";

import db from "../dbclient/dbclient.js";

export default {
  name: "Home",
  
    
  components: {
    Box: BoxVue,
    Header: HeaderVue,
    Banner: BannerVue,
    ListView: ListViewVue,
    Footer: FooterVue,
    Title: TitleVue,
    Pagination:PaginationVue,
    SideBar:SideBarVue
  },
  data() {
    return {
      name: "",
      data: [],
      isScience: false,
      lastVisible: null,
    };
  },

  async mounted() {
    await this.readArticles();
  },
  methods: {
   
   isScienceMethode(b){
        this.isScience=b;
   },

    async readArticlesNext() {
      //  Construct a new query starting at this document,
      // get the next 25 cities.
   if(this.lastVisible !== undefined){
           const next = query(
        collection(db, "articles"),
        orderBy("_createdAt",'desc'),
        startAfter(this.lastVisible),
        limit(6)
      );
       await getDocs(next).then((querySnapshot) => {
        this.lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
        //   console.log("last", this.lastVisible);

        querySnapshot.forEach((doc) => {
          this.data.push({
            id: doc.id,
            title: doc.data().title,
            img: doc.data().img,
            sub: doc.data().subtitle,
            story: doc.data().story,
            dev: doc.data().dev,
            analyse: doc.data().analyse,
            video: doc.data().video,
            patform: doc.data().platform,
            rating: doc.data().rating,
            tag: doc.data().tag,
            date: doc.data().date,
            imgurl: doc.data().imgurl

          });
          console.log(doc.id, " => ", doc.data().imgurl);

        });
      });
   }
   
    },
   
    async readArticles() {
      this.data = [];

      const q = query(collection(db, "articles"), orderBy("_createdAt",'desc'),limit(6));
      await getDocs(q).then((querySnapshot) => {
        this.lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
      //  console.log("last", this.lastVisible);

        querySnapshot.forEach((doc) => {
          this.data.push({
            id: doc.id,
            title: doc.data().title,
            img: doc.data().img,
            sub: doc.data().subtitle,
            story: doc.data().story,
            dev: doc.data().dev,
            analyse: doc.data().analyse,
            video: doc.data().video,
            patform: doc.data().platform,
            rating: doc.data().rating,
            tag: doc.data().tag,
            date: doc.data().date,
            imgurl: doc.data().imgurl
          });
           console.log(doc.id, " => ", doc.data().imgurl);
        });
      });

  
    },

    async readSciencesArticles() {
      this.data = [];

      const q = query(collection(db, "entertainment"), orderBy("date",'desc'));
      await getDocs(q).then((querySnapshot) => {
        this.lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];

        querySnapshot.forEach((doc) => {
          this.data.push({
            id: doc.id,
            title: doc.data().title,
            img: doc.data().img,
            sub: doc.data().subtitle,
            
            analyse: doc.data().analyse,
            video: doc.data().video,
           
            tag: doc.data().tag,
            date: doc.data().date,
            imgurl: doc.data().imgurl

          });
          console.log(doc.id, " => ", doc.data().imgurl);

        });

      });


    },

     async readSciencesArticlesNext() {
      //  Construct a new query starting at this document,
      // get the next 25 cities.
   if(this.lastVisible !== undefined){
           const next = query(
        collection(db, "entertainment"),
        orderBy("date",'desc'),
        startAfter(this.lastVisible),
        limit(6)
      );
       await getDocs(next).then((querySnapshot) => {
        this.lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];

        querySnapshot.forEach((doc) => {
          this.data.push({
            id: doc.id,
            title: doc.data().title,
            img: doc.data().img,
            sub: doc.data().subtitle,
           
            analyse: doc.data().analyse,
            video: doc.data().video,
           
            tag: doc.data().tag,
            date: doc.data().date,
            imgurl: doc.data().imgurl

          });
          console.log(doc.id, " => ", doc.data().imgurl);

        });
      });
   }
   
    },

  },
};
</script>

<style>

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
