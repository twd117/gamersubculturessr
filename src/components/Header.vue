<template>
  <header class="mhparent navbar-container">
    <div id="logo">
      <span id="publishername">GMR</span>
    </div>

    <ul class="mhchild--featured hparent">
      <li @click="gamelinkclick()" class="hchild nav-link" :class="{ active: store.isGame }" >
       Games
        <div class="underline" ></div>
      </li>


       <li @click="enterlinkclick()" class="hchild nav-link" :class="{ active: store.isEntertainment }">
        Entertainment
        <div class="underline "></div>
      </li>
      <li @click="newslinkclick()" class="hchild nav-link" :class="{ active: store.isNews }">
        Tech
        <div class="underline "></div>
      </li>
      <li @click="scifilinkclick()" class="hchild nav-link" :class="{ active: store.isScifi }">
        others
        <div class="underline "></div>
      </li>
      <!--  <li class="child push"><i class="material-icons">search</i></li> -->
      <router-view />
    </ul>
    <!--  <div id="search-icon">
        <i class="material-icons">search</i>

      </div> -->
  </header>
</template>

<script>
import { useNavStore } from "../store/useNavStore.js"
import {useDataStore} from "../store/useDataStore.js"

export default {
  setup(){
    const store = useNavStore();
    const dataStore = useDataStore()


    return { store ,dataStore}
  },
  data() {
    return {
      isunderline: true,
    }
  },
  methods: {
    async gamelinkclick(){
      await  this.dataStore.getGameArticles();
    //  this.isScienceMethode(false);
    await  this.dataStore.getSidebarDataEnter();
      this.store.setIsGame(true);
     },
    async enterlinkclick(){
      await   this.dataStore.getEntertainmentArticles();

     // this.isScienceMethode(true)
     this.store.setIsEntertainment(true);
     await this.dataStore.getSidebarDataGames();

     }
     ,
     async newslinkclick(){
      await   this.dataStore.getNewsArticles();

     // this.isScienceMethode(true)
     this.store.setIsNews(true);
     await this.dataStore.getSidebarDataEnter();

     }
     ,
     async scifilinkclick(){
          await   this.dataStore.getSMLCArticles();

            // this.isScienceMethode(true)
            this.store.setIsScifi(true);
            await this.dataStore.getSidebarDataEnter();
        }

  },
  name: "Header",
  props: {
    sciences:Function,
    games:Function,
    isScienceMethode:Function,
    sgetgame:Function,
    sgetenter:  Function
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mhparent {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 28px;
  border-bottom: 1px solid #00ff00;
}
.hparent {
  padding-left: 0px;
  margin: 0px;
  display: flex;
  justify-content: center;
  height: 100%;
}
.hchild {
  list-style: none;
  padding-left: 12px;
  margin-left: 9px;
}
.hchild a {
  color: #00ff00;
  padding: 0px;
}
.push {
  margin-left: auto;
}

a {
  outline: none;
}

.navbar-container {
  margin: 0px;
  width: 100%;
}

.navbar-container ul {
  padding-top: 27px;
}

.navbar-container ul li {
  color: #e0e0e0;
  font-weight: 500;
  text-transform: uppercase;
  font-family: 'Orbitron', sans-serif;
}

.navbar-container ul li a {
  text-decoration: none;
  display: inline-block;
  transition: color 0.5s;
}

.navbar-container ul li .underline {
  height: 3px;
  background-color: transparent;
  width: 0%;
  transition: width 0.2s, background-color 0.5s;
  margin: 0 auto;
}

.navbar-container ul li.active .underline {
  margin-top: 10px;
  width: 100%;
  background-color: #00ff00;
}


.blue {
 margin-top: 10px;
  background-color: #00ff00;
  width: 100%;
 }

.navbar-container ul li:hover .underline {
  margin-top: 10px;
  background-color: #00ff00;
  width: 100%;
}
.navbar-container ul li:active a {
  transition: none;
  color: rgba(0, 255, 0, 0.76);
}

.navbar-container ul li:active .underline {
  transition: none;
  background-color: rgba(0, 255, 0, 0.76);
}

#logo {
  margin-top: 27px;
}

#publishername {
  color: #00ff00;
  font-style: normal;
    font-weight: 700;
    line-height: 1.4rem;
    font-family: 'Orbitron', sans-serif;
    font-size: xx-large;
    text-shadow: 0 0 10px #00ff00;

}

.header-shadow {
  box-shadow: 0 0.125rem 0.3125rem rgba(0, 255, 0, 0.26);
}
</style>
