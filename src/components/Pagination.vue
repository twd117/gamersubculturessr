<template>
  <div id="pgn">
    <div class="button raised" @click="this.pagination()">
      <div class="center" fit>Load More</div>
    </div>
  </div>
</template>

<script>
import { useNavStore } from "../store/useNavStore.js"
import {useDataStore} from "../store/useDataStore.js"

export default {
  setup(){
    const store = useNavStore();
    const dataStore = useDataStore()

   
    return { store,dataStore }
  },
  name: "Pagination",
  props: {
    next: Function,
    nextScience:Function
  },
  methods: {
    pagination(){
      if(this.store.isGame){
        this.dataStore.getNextGamesArticles();
        console.log("next------")
      }else if(this.store.isNews){
        this.dataStore.getNextNewsArticles();
      }
      else if(this.store.setIsScifi){
        this.dataStore.getNextSMLCArticles();
      }
      else {
        this.dataStore.getNextEntertainmentArticles();
                console.log("sciences------")

      }
    }
  }
};
</script>

<style>
#pgn {
  display: flex;
  margin: 35px;
  width: 90%;
  justify-content: space-around;
}
.button {
  display: inline-block;
  position: relative;
  width: 120px;
  height: 32px;
  line-height: 32px;
  border-radius: 2px;
  font-size: 0.9em;
  background-color: #fff;
  color: #646464;
}
.center {
  text-align: center;
}

.button.raised {
  transition: box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: 0.2s;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
}

.button.raised:active {
  box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2);
  transition-delay: 0s;
}
</style>