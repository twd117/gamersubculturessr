<template>
  <div id="main">
    <template v-if="store.isEntertainment">
        <Card
      v-for="item in d"
      :key="item.id"
      :id="item.id"
      :title="item.title"
      :sub="item.sub"
      :img="item.img"
      :tag="item.tag"
      :analyse="item.analyse"
            :isScience="isScience"

      :video="item.video"
      :imgurl="item.imgurl"
    />
    </template>

      <template v-else>
         <Card
      v-for="item in d"
      :key="item.id"
      :id="item.id"
      :title="item.title"
      :sub="item.sub"
      :img="item.img"
      :tag="item.tag"
      :story="item.story"
      :analyse="item.analyse"
      :platform="item.platform"
      :dev="item.dev"
      :video="item.video"
      :rating="item.rating"
      :imgurl="item.imgurl"

    />
    </template>
    
     
  </div>
</template>

<script>
import CardVue from "./Card.vue";
import { useNavStore } from "../store/useNavStore.js";

export default {
  setup(){
    const store = useNavStore();
   
    return { store }
  },
  name: "ListView",
  components: {
    Card: CardVue,
  },
  props: ["d","isScience"],
};
</script>

<style>
#main {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
  align-items: stretch;
  width: 100%;
  padding: 0 35px;
  margin-top: 28px;
  margin-bottom: 36px;
}

@media (max-width: 650px) {
  #main {
    grid-template-columns: 1fr;
    padding: 0 16px;
  }
}
</style>