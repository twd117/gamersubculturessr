<template>
    <div id="flb">
        <CardBlack/>
        <CardWhite/>
        <CardImg/>
    </div>
  </template>
  
  <script>
      import CardBlackVue from './CardBlack.vue';
       import CardWhiteVue from './CardWhite.vue';
       import CardImgVue from './CardImg.vue';
  export default {
    name: "SideBar",
    components: {
        CardBlack:CardBlackVue,
        CardWhite:CardWhiteVue,
        CardImg:CardImgVue,
    }
  };
  </script>
  
  <style>
  
#flb {
  display:flex;
}
  
   
  </style>