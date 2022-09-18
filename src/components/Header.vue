<template>
  <header class="mhparent navbar-container">
    <div id="logo">
      <span>ゲームオタク</span>
    </div>

    <ul class="mhchild--featured hparent">
           <li @click="games();isScienceMethode(false);" class="hchild nav-link" :class="{ active: !isScience }" >
       Video-Game 
        <div class="underline" ></div>
      </li>  
       <li @click="sciences();isScienceMethode(true)" class="hchild nav-link" :class="{ active: isScience }">
        Entertainment
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
export default {
  data() {
    return {
      isunderline: true,
    }
  },
  methods: {},
  name: "Header",
  props: {
    sciences:Function,
    games:Function,
    isScienceMethode:Function,
    isScience:Boolean,
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
  color: #414549;
  padding: 0px;
}
.push {
  margin-left: auto;
}
/*.mhchild--featured {
  flex-basis: 30%;
}*/

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
  color: #414549;
  font-weight: 500;
  text-transform: capitalize;
  font-family: Roboto, sans-serif;
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
  background-color: blue;
}


.blue {
 margin-top: 10px;
  background-color: blue;
  width: 100%;
 }

.navbar-container ul li:hover .underline {
  margin-top: 10px;
  background-color: blue;
  width: 100%;
}
.navbar-container ul li:active a {
  transition: none;
  color: rgba(255, 255, 255, 0.76);
}

.navbar-container ul li:active .underline {
  transition: none;
  background-color: rgba(255, 255, 255, 0.76);
}

#logo {
  margin-top: 27px;
}



.header-shadow {
  box-shadow: 0 0.125rem 0.3125rem rgba(0, 0, 0, 0.26);
}
</style>
