<template>



  <div id="post-content">
    <div class="article aparent">



          <h1 class="hts">{{ title }}</h1>
          <span class="plight">{{ sub }}</span>
    <div class="line"></div>
           <p id="typo_pl">Written on {{ moment(new Date(date.seconds * 1000)).format("ddd MMM DD, YYYY") }}
          </p>

          <AmaDisclosure/>

           <!--
             <img v-if="img[0]!==null || typeof img[0]!=='undefined'" class="image" :src="img[0].downloadURL"  />

         -->
         
         <!--
           <img v-if="imgurl===null || typeof imgurl==='undefined'" class="image" :src="img[0].downloadURL"  />
        <img v-else-if="imgurl.length>6" class="image" :src="imgurl"/> -->
        
        <img  class="image mgb" :src="img[0].downloadURL"  />






               <Markdown :html="true"  :breaks="true" :source="analyse" />





         <div v-if="video"  class="video-container">
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

      <div class="tagcat"><span class="tagspan">{{ tag }}</span></div>

      <Rating :rating="rating"/>


      <div id="ratingandsocial">

        <div class="rs">
                    <SocialMedia :url="currentUrl" :title="title" />

        </div>


      </div>




      <HorNavBar :isGame="false" />

      <NewsLetters/>

    </div>
  </div>
</template>

<script>

import SocialMediaVue from "./SocialMedia.vue";
import MarkdownVue from 'vue3-markdown-it';
import moment from 'moment'
import { defineComponent, computed, reactive } from 'vue';
import {useRoute} from 'vue-router';
import HorNavBarVue from "./HorNavBar.vue";
import NewsLettersVue from "./NewsLetters.vue";
import RatingVue from "./Rating.vue";
import AmazonAdsVue from "./AmazonAds.vue";
import AmazonSpecialVue from "./AmazonSpecial.vue";
import AmaDisclosureVue from "./AmaDisclosure.vue";



export default defineComponent({
  mounted() {
   // console.log("mounted--",this.analyse);
      let Script = document.createElement("script");
    Script.setAttribute("src", "https://platform.twitter.com/widgets.js");
    document.head.appendChild(Script);
    let amazonScript = document.createElement("script");
            amazonScript.setAttribute("src","//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US&adInstanceId=a7d57b86-663b-465e-9a91-6ede27915f95")
         document.body.appendChild(amazonScript);


    let adScript = document.createElement("script");
    adScript.setAttribute("src", "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1291356316800764");
    adScript.setAttribute("crossorigin","anonymous");
    adScript.async=true;
    document.head.appendChild(adScript);
    let adpushScript = document.createElement("script");
    adpushScript.innerHTML="(adsbygoogle = window.adsbygoogle || []).push({});"

    document.body.appendChild(adpushScript);
      },
    setup(props) {
    /*

       <div id="adsencectn1">
        <ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-1291356316800764"
     data-ad-slot="2797142084"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>




       </div>
       <div id="adsencectn2">

        <ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-1291356316800764"
     data-ad-slot="5853275170"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
       </div>

    <div id="adsencectn5">
          <ins class="adsbygoogle"
     style="display:block"
     data-ad-format="autorelaxed"
     data-ad-client="ca-pub-1291356316800764"
     data-ad-slot="5114908570"></ins>
         </div>
      <div id="adsencectn">
      <ins class="adsbygoogle"
     style="display:block"
     data-ad-format="fluid"
     data-ad-layout-key="-79+d6+v+y+55"
     data-ad-client="ca-pub-1291356316800764"
     data-ad-slot="8049468760"></ins>

    </div>
       <div id="thirdad"></div>
    const route=useRoute();

    const siteData = reactive({
      title: props.title,
      description: props.sub,
      url:"https://gmrnews.com"+route.path  ,

      img: props.imgurl,
    })
      console.log("--R--",siteData.url)
    useHead({
      // Can be static or computed
      title: computed(() => siteData.title),
      meta: [
      {
          name: `twitter:card`,
          content: computed(() => "summary_large_image"),
        },

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
      HorNavBar:HorNavBarVue,
      NewsLetters:NewsLettersVue,
      Rating:RatingVue,
      AmazonAds:AmazonAdsVue,
      AmazonSpecial:AmazonSpecialVue,
      AmaDisclosure:AmaDisclosureVue







  },
  name: "Article",
  props: [
    "title",
    "sub",
    "img",
    "tag",
    "analyse",
    "video",
    "date",
    "imgurl",
    "rating",
    "tweet"

  ],
  data() {
    return {
      currentUrl: "",
    };
},
created() {
    const route=useRoute();
    this.currentUrl = "https://gmrnews.com"+route.path;

    this.moment = moment;
  //  console.log("--analyse:",this.analyse);

},
});
</script>

<style >
#adsencectn {
  width: 100%;
}
#adsencectn1 {
  width: 100%;
}
#adsencectn2 {
  width: 100%;
}
#adsencectn5 {
  width: 100%;
}
.twitter-tweet{
  margin-right: auto;
    margin-left: auto;

    justify-content: center;

}
.twitter-tweet > iframe{
height: 765px;
    width: 550px;}
.tagspan{
  border-radius: 30px;
    padding: 0.75em 1.5em;
    cursor: pointer;
    background:#E5E5E5;
    color: #202125;
    border: 1px solid;

    border:  0px solid;
    transition: 250ms ease-out;
}
.tagcat{
  padding-top: 10px;
  padding-bottom: 10px;

  font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.5;
    letter-spacing: 1.2px;
    text-align: left;
    color: #202125;
}
.video-container {
  min-height: 600px;

  position: relative;
  padding-bottom: 56.25%;
  margin-top: 25px;
  margin-bottom:25px;
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
    border-radius: 12px;
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
 .adsbanner {
      display: none;
}
.adscontent {

  display: flex;
  justify-content: center;
  flex-wrap: wrap;

}
.line {
    height: 0.5px;
  margin-top: 10px;

  background-color:#424242;
  width: 100%;

}

h2 {

  margin-bottom: 16px;
  margin-top: 26px;
    margin-bottom: 16px;
    text-align: start;
   font-family:  Avenir, Helvetica, Arial, sans-serif;
    color: rgb(30,30,30);
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
  min-height: 800px;
  display: flex;
  width: 65%;
  flex-direction: column;
  height: 100%;
}
.hts {
  color: #424242;
  font-family: Google Sans;
  font-size: 2.25rem;
  font-weight: 400;
  letter-spacing: 0.0175rem;
  line-height: 2.75rem;
  text-align: left;
  margin-top: 16px;
  margin-left:0px;
}

.news {
  font-family: Google Sans;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  color: #424242;
  margin-bottom: 24px;
  text-align: left;
  margin-bottom: 0px;

}

.image {
  /*  max-height:300px; */

  width: auto;
  height: auto;
  margin-bottom: 30px;
  margin-top:30px;
}
#typo_pl  {
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
  #typo_rel  {
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
.article p {
font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  font-weight: 550;
  line-height: 1.5;
   letter-spacing: 1.2px;
  color: #000;
  margin-top:16px;
  margin-bottom:16px;
  text-align: justify;
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
   .ione{
     display:none;
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
  .ione{
     display:none;
  }

}
@media only screen and (max-width: 600px) {

  .ione{
     display:none;
  }

}
@media only screen and (max-width: 470px) {
  .adsbanner {
      display: none;

}
 .ione{
     display:none;
  }
  .itwo{
     display:none;
  }
}

/***************Amazon */




</style>
