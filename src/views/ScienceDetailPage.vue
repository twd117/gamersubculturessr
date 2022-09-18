<template>
<div>
<box><DetaillNav /></box>
  <Article
    v-if="data.length > 0"
    :title="data[0].title"
    :sub="data[0].sub"
    :img="data[0].img"
    :tag="data[0].tag"
    :analyse="data[0].analyse"
    :video="data[0].video"
    :date="data[0].date"
    :imgurl="data[0].imgurl"
  />
  <Footer  />
  </div>
</template>

<script>
import ArticleVue from "../components/ScienceArticle.vue";
import FooterVue from "../components/Footer.vue";
import { collection, where, query, getDocs } from "firebase/firestore";
import DetailNavVue from "../components/Dnav.vue"
import db from "../dbclient/dbclient.js";
import BoxVue from "../components/Box.vue";

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
  props: ["idk"],
  created() {
    this.readArticles();
  },
  methods: {
    readArticles() {
      this.data = [];
      const q = collection(db, "entertainment");
         console.log(
                    'data=>'+this.$route.params.id);
      const queryR = query(q, where("__name__", "==", this.$route.params.id));
       getDocs(queryR).then((querySnapshot) => {
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
          
        });
        console.log(this.data);
        if (this.data.length === 0) {
          this.error = true;
        }
      }).catch((error) => {
  console.log(error);
});
    },
  },
};
</script>

<style>


</style>
