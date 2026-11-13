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
  margin: 24px auto 48px;
  width: 100%;
  justify-content: center;
}
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 0 28px;
  height: 42px;
  line-height: 42px;
  border-radius: 24px;
  font-size: 14px;
  font-weight: 600;
  background-color: #FF7A30;
  color: #ffffff;
  border: none;
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
  transition: background-color 0.2s ease, box-shadow 0.2s ease, transform 0.15s ease;
}
.center {
  text-align: center;
}

.button.raised {
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.16);
}

.button.raised:hover {
  background-color: #465C88;
  color: #ffffff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transform: translateY(-1px);
}
</style>