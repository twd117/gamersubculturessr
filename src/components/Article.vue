<template>
 

       
  <h1 class="ht">{{ title }}</h1>
  <div id="post-content">
    <div class="article aparent">
      <h1 class="news">Developer(s): {{ dev }}</h1>
             <p>Platform(s): {{ platform }} </p>
         <div class="line"></div>
      <p v-if="release!==null && release.length>3">Release date: {{  release }}</p>
    
    
    

      
        <img v-if="imgurl===null || typeof imgurl==='undefined'" class="image" :src="img[0].downloadURL"  />
        <img v-else-if="imgurl.length>6" class="image" :src="imgurl"/>

         <Markdown :source="story" />
       
       
       
         

       



     <div v-if="video" class="video-container">
       <iframe
        id="ytb"
        width="auto"
        height="600"
        :src="'https://www.youtube.com/embed/' + video"
        frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope;"
    allowfullscreen
      >
      </iframe>
</div>
        
           
               <Markdown :source="analyse" />


      
  
       <div id="adone"></div>
       <div id="adtwo"></div>
       <div id="adone"></div>


              
      <div id="ratingandsocial">
     
        <div class="rs">
                    <SocialMedia :url="currentUrl" :title="title" />

        </div>

            
      </div>
       </div> 
  
      
    </div>
   
</template>

<script>
import SocialMediaVue from "./SocialMedia.vue";

import MarkdownVue from 'vue3-markdown-it';
import moment from 'moment';
import { defineComponent, computed, reactive } from 'vue';
import {useRoute} from 'vue-router';
//import postscribe from 'postscribe';



export default defineComponent({
  mounted() {
    /*  postscribe('#adone', `
      <div id="amzn-assoc-ad-685efb3f-43c9-4863-946b-07f2f5b6885f"><\/div>
      <script async src=https:\/\/z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US&adInstanceId=685efb3f-43c9-4863-946b-07f2f5b6885f>
        <\/script>
      `);
      postscribe('#adtwo', `
      <div id="amzn-assoc-ad-e98e4aa5-df51-4a6e-8d85-c1350ebcaf7a"><\/div>
      <script async src=https:\/\/z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US&adInstanceId=e98e4aa5-df51-4a6e-8d85-c1350ebcaf7a>
        <\/script>
      `
      );*/

    },
  
    setup(props) {
       
      
     
    //  postscribe('#firstad', '<h1>Hello PostScribe</h1>');

    /*     const route=useRoute();

    const siteData = reactive({
      title: props.title,
      description: props.sub,
      url:"https://gamersubculture.com"+route.path  ,
    
      img: props.imgurl,
    })
      console.log("--R--",siteData.url)
    useHead({
      // Can be static or computed
      title: computed(() => siteData.title),
      meta: [
          {
          name: `og:title`,
          content: computed(() => siteData.title),
        },
        {
          name: `description`,
          content: computed(() => siteData.description),
        },
       
         {
          name: `og:image`,
          content: computed(() => siteData.img),
        },
          {
          name: `og:type`,
          content: "article",
        },
          {
          name: `og:url`,
          content: computed(() => siteData.url),
        },

      ],
    })*/
  },
  components: {
    SocialMedia: SocialMediaVue,
    
     Markdown:MarkdownVue,
   

    

  },
  name: "Article",
  props: [
    "title",
    "sub",
    "img",
    "tag",
    "dev",
    "analyse",
    "story",
    "video",
    "platform",
    "rating",
    "release",
    "imgurl"
  ],
  data() {
    return {
      currentUrl: "",
    };
},
created() {
  const route=useRoute();

 
this.currentUrl = "https://gamersubculture.com"+route.path;
    this.moment = moment;

},
});
</script>

<style>
.ve {
      position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    max-width: 100%;
}
.video-container {
  position: relative;
  padding-bottom: 56.25%;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

p > img {
  width: 100%;
    height: auto;
    margin-bottom: 30px;
    margin-top: 30px;
}

.plight {
      font-family: Google Sans;
text-align:left;
    font-size: 1.2375rem;
    line-height: 1.95rem;
    font-weight: 300;
    font-style: normal;
    color: #000;
}
.line {
    height: 0.5px;
  margin-top: 10px;

  background-color:#424242;
  width: 100%;
 
}
 .adsbanner {
      display: none; 
}
.adscontent {

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 16px;
  margin-bottom: 16px;

}

h2 {
  
  margin-top: 16px;
  margin-bottom: 16px;
  text-align: start;
}
#starcontainer {
  display: flex;
  flex-direction: row;
  margin-bottom: 16px;
}
.ic svg {
  margin-right: 4px;
  color: white;
}
.ic {
  position: static;
  width: 16px;
  height: 16px;
  left: calc(50% - 16px / 2 - 16px);
  top: calc(50% - 16px / 2);

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
  margin: 0px 0px;
}
.start {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;

  position: static;
  width: 80px;
  height: 16px;
  left: 0px;
  top: 40px;

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 16px 0px;
}
.rs {
  flex-grow: 1;
}
#ratingandsocial {
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  margin-bottom: 50px;
}
#ytb {
  margin-top: 1px;
  margin-bottom: 10px;
}
.aparent {
  display: flex;
  width: 65%;
  flex-direction: column;
  height: 100%;
}
.ht {
  color: #424242;
  font-family: Google Sans;
  font-size: 2.25rem;
  font-weight: 400;
  letter-spacing: 0.0175rem;
  line-height: 2.75rem;
  text-align: left;
  margin-bottom:16px;
    margin-left: 35px;

}

.news {
  font-family: Google Sans;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  color: #424242;
  margin-top: -8px;
  text-align: left;
}

.image {
  /*  max-height:300px; */

  width: auto;
  height: auto;
}
.article p {
font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.5;
   letter-spacing: 1.2px;
  text-align: left;
  color: #202125;
  margin-top:16px;
  margin-bottom:16px;
}

#post-content {
  display: flex;

  justify-content: center;
}

@media only screen and (max-width: 1090px) {
  .aparent {
    display: flex;
    width: 75%;
    flex-direction: column;
    height: 100%;
  }
}
@media only screen and (max-width: 976px) {
  .adsbanner700{
    display: none;
  }
    .adsbanner {
      display: flex; 
      justify-content: center;
}
}
@media only screen and (max-width: 800px) {
  .aparent {
    display: flex;
    width: 85%;
    flex-direction: column;
    height: 100%;
  }
  
}

@media only screen and (max-width: 700px) {
  .aparent {
    display: flex;
    width: 95%;
    flex-direction: column;
    height: 100%;
  }
}
@media only screen and (max-width: 470px) {
  .adsbanner {
      display: none; 
}
}


</style>