<template>
   
   <div id="fc">
      
    <template v-if="store.isEntertainment">

        <ListItem
      v-for="item in d"
      :key="item.id"
      :id="item.id"
      :title="item.title"
      :sub="item.sub"
      :img="item.img"
      :tag="item.tag"
      :analyse="item.analyse"
            :isScience="isScience"
            :date="item.date"

      :video="item.video"
      :imgurl="item.imgurl"
    />
    </template>

      <template v-else>

         <ListItem
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
      :isScience="isScience"
      :imgurl="item.imgurl"
      :date="item.date"

    />
    </template>
    
    
   </div>


</template>
  
  <script>
  import { useNavStore } from "../store/useNavStore.js"

  import ListItemVue from "./ListItem.vue"
  export default {
    setup(){
    const store = useNavStore();
  //  console.log("Enter",store.isEntertainment);
  //  console.log("Game",store.isGame);
  //  console.log("Tech",store.isTech);
    return { store }
  },
    name: "VlistView",
    props: ["d",],
    components: {
    ListItem: ListItemVue,
   
}

  };
  </script>
  
  <style scoped>

 #fc {
  display:flex;
  flex-direction:column;
  width: 75%;
}
@media screen and (max-width: 900px) {
  #fc {
 
  width: 100%;
}
}
  </style>