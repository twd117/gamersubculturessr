<template>
    <div id="nativeads">

      
  

</div>


  </template>
  
  <script>
import { defineComponent } from 'vue';

  export default defineComponent( {
    name: "AmazonSpecial",
    mounted(){
        
       
         
        let amazonpromScript = document.createElement("script");
        amazonpromScript.setAttribute("src","/amazon.js");

        amazonpromScript.setAttribute("type","text/javascript");


          // document.body.appendChild(Script);
            let amazonpromtwoScript = document.createElement("script");
            amazonpromtwoScript.setAttribute("src","//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US")
      //   document.body.appendChild(amazonScript);
         let nativeads = document.getElementById("nativeads");
        nativeads.appendChild(amazonpromScript);
        nativeads.appendChild(amazontwopromScript);
  
   
    }
  });
  </script>
  
  <style>
  
  
  
  </style>