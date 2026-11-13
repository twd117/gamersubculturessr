<template>
  <h1 class="ht">{{ title }}</h1>
  <div id="gamedetail">
  <h2 class="news">Developer(s): {{ dev }}</h2>
      <p id="typo_pl">Platform(s): {{ platform }}</p>
      <div class="line"></div>
      <p id="typo_rel" v-if="release !== null && release.length > 3">Release date: {{ release }}</p>

      <AmaDisclosure />

      <img class="image mgb" :src="imageUrl" />

  </div>

  <div id="post-content">
    <div class="article">
      
      <div class="content-with-ad">
        <div id="mkdn" >
          <Markdown :html="true" :breaks="true" :source="story + analyse" />
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
          <VerticalAd    :data="Newsdata " />
        </div>
 
  </div>
   <NewsList  :nslug="slug"  :items="Trenddata" />
</template>


  
 


        

<script>
import SocialMediaVue from "./SocialMedia.vue";
import MarkdownVue from 'vue3-markdown-it';
import moment from 'moment';
import { defineComponent,   reactive, ref } from 'vue';
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
import AdComponent from './AdComponent.vue';
import DealsComponent from './DealsComponent.vue';


 export default defineComponent({
  
  async setup(props) {
    const dataStore = useDataStore();
    let TopStoriesdata = [];
    let Trenddata = [];
    let Newsdata = [];
    let dealsdata= [];
    let slug="smlc";

    const imageUrl = ref(props.img && props.img.length > 0 ? props.img[0].downloadURL : '');

     await dataStore.getSidebarDataEnter();
    TopStoriesdata = dataStore.sidebarData;

    await dataStore.getSidebarDataOthers();
    Trenddata = dataStore.sidebarData;

    await dataStore.getSidebarDataGames();
    Newsdata =  dataStore.sidebarData.slice(2);
     
     await dataStore.getDeals(props.id);
    dealsdata = dataStore.data;
    
    
     return { Trenddata,slug ,TopStoriesdata, Newsdata, dealsdata, imageUrl};
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
    PowerStationDeals: PowerStationDeals,
    AdComponent,
    DealsComponent,
    VerticalAd,

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
    "tweet"
  ],
  data() {
    return {
      showComments: false,
      currentUrl: "",
      adsData: [
        {
          id: 1,
          name: "Urlife E20 Lite 750W Electric Bike",
          image: "https://i.ibb.co/3k5b4f2/61-C-b3-T4-L-AC-SL1500.jpg",
          originalPrice: "$599.00",
          savePercent: "54",
          discountedPrice: "$276.01",
          store: "AliExpress",
          code: "AEUS64",
        },
      ],
    };
  },
  computed: {
    fastCommentsConfig() {
      return {
        tenantId: 'mztLi86h3bc',
        urlId: this.id,
        onRender: () => { this.showSpinner = false }
      }
    }
  },

  created() {
    const route = useRoute();
    this.currentUrl = "https://gamersub.com" + route.path;
    this.moment = moment;
  },
});
</script>

<style  >
/* Material Design 3 (M3) Typography & Layout for Article Detail */
:root {
  --md-sys-typescale-font: 'Roboto', sans-serif;
  --md-sys-color-on-surface: #1d1b20;
  --md-sys-color-on-surface-variant: #49454f;
  --md-sys-color-outline-variant: #cac4d0;
  --md-sys-color-primary: #FF7A30;
}

#gamedetail {
  margin-right: 95px;
  margin-left: 95px;
}

#post-content {
  display: flex;
  justify-content: center;
  gap: 32px;
  padding: 8px 95px;
}

.article {
  flex-grow: 1;
  width: 70%;
  background: #ffffff;
  border: 0.3px solid #e0e0e0;
  border-radius: 16px;
  padding: 32px 36px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
}

.ad-container {
  margin-left: 0;
  position: sticky;
  top: 24px;
  height: fit-content;
}

@media (max-width: 600px) {
  .ad-container {
    display: none;
  }
}

/* M3 Display Small / Headline Large — Article Title */
.ht {
  color: var(--md-sys-color-on-surface, #1d1b20);
  font-family: var(--md-sys-typescale-font);
  font-size: 2.25rem; /* 36px — M3 Display Small */
  font-weight: 700;
  line-height: 2.75rem; /* 44px */
  letter-spacing: 0px;
  text-align: left;
  margin: 24px 95px 12px 95px;
}

/* M3 Title Large — Developer / Subtitle */
.news {
  font-family: var(--md-sys-typescale-font);
  font-size: 1.375rem; /* 22px — M3 Title Large */
  font-weight: 500;
  line-height: 1.75rem; /* 28px */
  letter-spacing: 0px;
  color: var(--md-sys-color-on-surface-variant, #49454f);
  text-align: left;
  margin-top: 8px;
  margin-bottom: 8px;
}

.plight {
  font-family: var(--md-sys-typescale-font);
  text-align: left;
  font-size: 1.375rem; /* 22px — M3 Title Large */
  line-height: 1.75rem; /* 28px */
  font-weight: 400;
  letter-spacing: 0px;
  color: var(--md-sys-color-on-surface-variant, #49454f);
  margin-top: 8px;
  margin-bottom: 12px;
}

/* M3 Label Large — Metadata (Platform, Release Date) */
#typo_pl,
#typo_rel {
  font-family: var(--md-sys-typescale-font);
  font-size: 0.875rem; /* 14px — M3 Label Large */
  font-weight: 500;
  line-height: 1.25rem; /* 20px */
  letter-spacing: 0.1px;
  text-align: left;
  color: var(--md-sys-color-on-surface-variant, #49454f);
  margin-top: 12px;
  margin-bottom: 12px;
}

.line {
  height: 1px;
  margin-top: 12px;
  margin-bottom: 12px;
  background-color: #e0e0e0;
  width: 100%;
}

.image {
  width: 100%;
  height: auto;
  border-radius: 16px;
  margin-top: 16px;
  margin-bottom: 28px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

/* M3 Markdown Article Typography Hierarchy */
#mkdn {
  text-align: left;
  font-family: var(--md-sys-typescale-font);
  color: var(--md-sys-color-on-surface, #1d1b20);
}

/* M3 Headline Medium */
#mkdn h1,
#mkdn h2,
h2 {
  font-family: var(--md-sys-typescale-font);
  font-size: 1.75rem; /* 28px — M3 Headline Medium */
  font-weight: 600;
  line-height: 2.25rem; /* 36px */
  letter-spacing: 0px;
  color: var(--md-sys-color-on-surface, #1d1b20);
  text-align: left;
  margin-top: 32px;
  margin-bottom: 16px;
}

/* M3 Headline Small */
#mkdn h3 {
  font-family: var(--md-sys-typescale-font);
  font-size: 1.5rem; /* 24px — M3 Headline Small */
  font-weight: 600;
  line-height: 2rem; /* 32px */
  letter-spacing: 0px;
  color: var(--md-sys-color-on-surface, #1d1b20);
  text-align: left;
  margin-top: 28px;
  margin-bottom: 12px;
}

/* M3 Title Large */
#mkdn h4 {
  font-family: var(--md-sys-typescale-font);
  font-size: 1.375rem; /* 22px — M3 Title Large */
  font-weight: 500;
  line-height: 1.75rem; /* 28px */
  letter-spacing: 0px;
  color: var(--md-sys-color-on-surface, #1d1b20);
  text-align: left;
  margin-top: 24px;
  margin-bottom: 10px;
}

/* M3 Body Large — Long-form Article Body */
.article p,
#mkdn p {
  font-family: var(--md-sys-typescale-font);
  font-size: 1rem; /* 16px — M3 Body Large */
  font-weight: 400;
  line-height: 1.65rem; /* 26.4px — M3 Body Large comfortable reading */
  letter-spacing: 0.5px; /* M3 Body Large tracking */
  color: var(--md-sys-color-on-surface, #1d1b20);
  margin-top: 16px;
  margin-bottom: 16px;
  text-align: left;
}

#mkdn ul,
#mkdn ol {
  font-family: var(--md-sys-typescale-font);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.65rem;
  letter-spacing: 0.5px;
  color: var(--md-sys-color-on-surface, #1d1b20);
  margin: 16px 0 16px 24px;
  text-align: left;
}

#mkdn li {
  margin-bottom: 8px;
}

#mkdn blockquote {
  font-family: var(--md-sys-typescale-font);
  font-size: 1.125rem;
  font-style: italic;
  line-height: 1.75rem;
  letter-spacing: 0.25px;
  color: var(--md-sys-color-on-surface-variant, #49454f);
  border-left: 4px solid #FF7A30;
  background-color: #fafafa;
  padding: 16px 20px;
  margin: 24px 0;
  border-radius: 0 12px 12px 0;
}

#mkdn a {
  color: #FF7A30;
  font-weight: 500;
  text-decoration: underline;
  text-underline-offset: 3px;
}

#mkdn a:hover {
  color: #465C88;
}

#mkdn p > img {
  width: 100%;
  height: auto;
  margin-bottom: 28px;
  margin-top: 28px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

/* M3 Assist Chip — Tag */
.tagcat {
  padding-top: 16px;
  padding-bottom: 12px;
  text-align: left;
}

.tagspan {
  display: inline-flex;
  align-items: center;
  border-radius: 8px;
  padding: 6px 16px;
  cursor: pointer;
  background: rgba(255, 122, 48, 0.12);
  color: #c84b00;
  font-family: var(--md-sys-typescale-font);
  font-size: 0.875rem; /* 14px — M3 Label Large */
  font-weight: 500;
  line-height: 1.25rem;
  letter-spacing: 0.1px;
  border: 1px solid rgba(255, 122, 48, 0.3);
  transition: background-color 0.2s ease;
}

.tagspan:hover {
  background: rgba(255, 122, 48, 0.2);
}

.video-container {
  min-height: 390px;
  position: relative;
  padding-bottom: 56.25%;
  margin-top: 28px;
  margin-bottom: 28px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.rs {
  flex-grow: 1;
}

#ratingandsocial {
  display: flex;
  flex-direction: column;
  margin-top: 36px;
  margin-bottom: 36px;
}

#ytb {
  margin-top: 1px;
  margin-bottom: 10px;
}

@media (max-width: 768px) {
  .ht {
    font-size: 1.75rem; /* 28px — M3 Headline Medium on mobile */
    line-height: 2.25rem;
    margin: 20px 24px 10px 24px;
  }
  #gamedetail {
    margin-right: 24px;
    margin-left: 24px;
  }
  .article {
    width: 100%;
    padding: 20px;
  }
  #post-content {
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 8px 24px;
  }
}
</style>