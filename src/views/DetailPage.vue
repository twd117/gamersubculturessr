<template>
<box><DetaillNav /></box>

  <Article
    v-if="data.length > 0"
    :title="data[0].title"
    :sub="data[0].sub"
    :img="data[0].img"
    :tag="data[0].tag"
    :story="data[0].story"
    :analyse="data[0].analyse"
    :platform="data[0].platform"
    :dev="data[0].dev"
    :video="data[0].video"
    :rating="data[0].rating"
    :release="data[0].release"
    :imgurl="data[0].imgurl"
  />
  <Footer  />
</template>

<script>
import ArticleVue from "../components/Article.vue";
import FooterVue from "../components/Footer.vue";
import { collection, where, query, getDocs } from "firebase/firestore";
import DetailNavVue from "../components/Dnav.vue"
import BoxVue from "../components/Box.vue";
import db from "../dbclient/dbclient.js";

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

      const q = collection(db, "articles");
      const queryR = query(q, where("__name__", "==", this.$route.params.id));
       getDocs(queryR).then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
                  console.log('data',doc.data());

          this.data.push({
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
        });
        console.log(this.data.imgurl);
        if (this.data.length === 0) {
          this.error = true;
        }
      });
    },
  },
};
</script>

<style>


</style>
