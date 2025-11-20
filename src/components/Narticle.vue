<template>
  <h1 class="ht">{{ title }}</h1>
  <div id="gamedetail">

    <p class="plight">{{ sub }}</p>
    <div class="line"></div>
           <p id="typo_pl">Written on {{moment(new Date(date.seconds * 1000)).format("ddd MMM DD, YYYY") }}
          </p>
  
      <AmaDisclosure />

      <img class="image mgb" :src="img[0].downloadURL" />

  </div>

  <div id="post-content">
    <div class="article">
      
      <div class="content-with-ad">
        <div id="mkdn">
          <Markdown :html="true" :breaks="true" :source="story  " />
        </div>
        
      </div>

      <PowerStationDeals  v-if="dealsdata"  :deals="dealsdata" />

 
       <div v-if="video" class="video-container">
        <iframe
          id="ytb"
          width="auto"
          height="600"
          :src="'https://www.youtube.com/embed/' + video"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope;"
          allowfullscreen
        ></iframe>
      </div>

      <div class="tagcat">
        <span class="tagspan">{{ tag }}</span>
      </div>
 
      <Rating :rating="rating" />

      <TopStories :stories="TopStoriesdata" />

      <div id="ratingandsocial">
        <div class="rs">
          <SocialMedia :url="currentUrl" :title="title" />
        </div>
      </div>

      <HorNavBar :isGame="true" />
      <NewsLetters />
      

     </div>

    <div class="ad-container">
          <VerticalAd  :data="Newsdata.slice(1)"  />
        </div>
 
  </div>
  
  <NewsList :nslug="slug" :items="Trenddata" />
</template>

<script>
import SocialMediaVue from "./SocialMedia.vue";
import MarkdownVue from 'vue3-markdown-it';
import moment from 'moment';
import { defineComponent, computed, reactive } from 'vue';
import { useRoute } from 'vue-router';
import NewsLettersVue from "./NewsLetters.vue";
import HorNavBarVue from "./HorNavBar.vue";
import RatingVue from "./Rating.vue";
import AmazonAdsVue from "./AmazonAds.vue";
 import AmaDisclosureVue from "./AmaDisclosure.vue";
import NewsList from './NewsList.vue';
import TopStories from './TopStories.vue';
import TrendingSection from './TrendingSection.vue';
import { useDataStore } from "../store/useDataStore.js";
import VerticalAd from './VerticalAd.vue';
import PowerStationDeals from "./PowerStationDeals.vue";

export default defineComponent({
  mounted() {
    let Script = document.createElement("script");
    let amazonScript = document.createElement("script");
    amazonScript.setAttribute("src", "//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US&adInstanceId=a7d57b86-663b-465e-9a91-6ede27915f95");
    document.body.appendChild(amazonScript);

    Script.setAttribute("src", "https://platform.twitter.com/widgets.js");
    document.head.appendChild(Script);
    let adScript = document.createElement("script");
    adScript.setAttribute("src", "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1291356316800764");
    adScript.setAttribute("crossorigin", "anonymous");
    adScript.async = true;
    document.head.appendChild(adScript);
    let adpushScript = document.createElement("script");
    adpushScript.innerHTML = "(adsbygoogle = window.adsbygoogle || []).push({});";
    document.body.appendChild(adpushScript);
  },

  async setup(props) {
    const dataStore = useDataStore();
    let TopStoriesdata = [];
    let Trenddata = [];
    let Newsdata = [];
    let dealsdata= [];
    let slug="Article";

    await dataStore.getSidebarDataEnter();
    TopStoriesdata = dataStore.sidebarData;

    await dataStore.getSidebarDataGames();
    Trenddata = dataStore.sidebarData;

    await dataStore.getSidebarDataGames();
    Newsdata = dataStore.sidebarData;
    await dataStore.getDeals(props.id);
    dealsdata = dataStore.data;
    return { Trenddata,slug, TopStoriesdata, Newsdata, dealsdata };
  },
  components: {
    SocialMedia: SocialMediaVue,
    Markdown: MarkdownVue,
    NewsLetters: NewsLettersVue,
    HorNavBar: HorNavBarVue,
    Rating: RatingVue,
    AmazonAds: AmazonAdsVue,
     AmaDisclosure: AmaDisclosureVue,
    TrendingSection: TrendingSection,
    NewsList: NewsList,
    TopStories: TopStories,
    VerticalAd: VerticalAd ,
    PowerStationDeals: PowerStationDeals,

  },
  name: "Article",
  props: [

    "id",
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
    "imgurl",
    "tweet",
    "date"

  ],
  data() {
    return {
      currentUrl: "",
    };
  },
  created() {
    const route = useRoute();
    this.currentUrl = "https://gamersub.com" + route.path;
    this.moment = moment;
  },
});
</script>

<style  >
 
#gamedetail{
  margin-top:2px;
  margin-right:95px;
  margin-left:95px;
 

}

#post-content {
  display: flex;
  justify-content: center;
  gap: 24px;
  padding: 8px 95px;
}

.article {
  flex-grow: 1;
  width: 70%;
}

.ad-container {
  width: 30%;
  margin-left: 24px;
  position: sticky;
  top: 24px;
  height: fit-content;
}

@media (max-width: 600px) {
  .ad-container {
    display: none;
  }
}

.roboto-serif-article {
  font-family: "Roboto Serif", serif;
  font-optical-sizing: auto;
  font-weight: normal;
  font-style: normal;
  font-variation-settings:
    "wdth" 100,
    "GRAD" 0;
}
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
.twitter-tweet {
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
}
.twitter-tweet > iframe {
  height: 765px;
  width: 550px;
}

#amazonbox {
  margin-top: 50px;
  margin-bottom: 50px;
}

.tagspan {
  border-radius: 30px;
  padding: 0.75em 1.5em;
  cursor: pointer;
  background: #e5e5e5;
  color: #202125;
  border: 1px solid;
  border: 0px solid;
  transition: 250ms ease-out;
 
}
.tagcat {

  margin-top:8px;

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
  min-height: 390px;
  position: relative;
  padding-bottom: 56.25%;
  margin-top: 25px;
  margin-bottom: 25px;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

#mkdn p > img {
  width: 100%;
  height: auto;
  margin-bottom: 30px;
  margin-top: 30px;
  border-radius: 12px;
}
.plight {
  font-family: Google Sans;
  text-align: left;
  font-size: 1.2375rem;
  line-height: 1.95rem;
  font-weight: 300;
  font-style: normal;
  color: #000;
  margin-top:8px;

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
  background-color: #424242;
  width: 100%;
}

h2 {
  margin-bottom: 16px;
  margin-top: 26px;
  margin-bottom: 16px;
  text-align: start;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: rgb(30, 30, 30);
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
.ht {
  color: #424242;
  font-family: Google Sans;
  font-size: 2.25rem;
  font-weight: 400;
  letter-spacing: 0.0175rem;
  line-height: 2.75rem;
  text-align: left;
  margin-top: 16px;
  margin-left: 35px;
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
  width: 100%;
  height: auto; 
    margin-bottom: 30px;
    margin-top: 30px;
}
#typo_pl {
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: 1.2px;
  text-align: left;
  color: #202125;
  margin-top: 16px;
  margin-bottom: 16px;
}
#typo_rel {
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: 1.2px;
  text-align: left;
  color: #202125;
  margin-top: 16px;
  margin-bottom: 16px;
}
.article p {
  font-family: 'Times New Roman', sans-serif;
  font-size:   19px;
  font-optical-sizing: auto;
   font-style: normal;
  font-weight: 485;
 line-height: 1.6em;
  font-variation-settings:
    "wdth" 100,
    "GRAD" 0;
  color: #000;
  margin-top: 16px;
  margin-bottom: 16px;
  text-align: justify;
}
@media (max-width: 768px) {
  #gamedetail{
  margin-right: 35px;
  margin-left: 35px;

 }
 .article{
  width: 60%;
}
#post-content {
  display: flex;
  justify-content: center;
  gap: 24px;
  padding: 8px  35px;
}
}
</style>
