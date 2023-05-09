<template>
    <div class="nativeads">

      
  

</div>


  </template>
  
  <script>
import { defineComponent } from 'vue';

  export default defineComponent( {
    name: "AmazonSpecial",
    mounted(){
       
      
        let Script = document.createElement("script");
        Script.setAttribute("src","/amazon.js");

        Script.setAttribute("type","text/javascript");


document.body.appendChild(Script);
            let amazonScript = document.createElement("script");
            amazonScript.setAttribute("src","//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US")
         document.body.appendChild(amazonScript);

  
   
    }
  });
  </script>
  
  <style>
  
  
  
  </style>