<template>
  <div class="share-buttons-container">
    <div class="share-text">
    
     
        <span>Share via social media</span>
     </div>
    <div class="share-list">
      <!-- FACEBOOK 
          <img
          src="https://img.icons8.com/material-rounded/96/000000/facebook-f.png"
        />
      -->
      <a class="" @click="gotoFacebook()" target="_blank">
      
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#003C43" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"/></svg>
      </a>

      <!-- TWITTER 
         <img
          src="https://img.icons8.com/material-rounded/96/000000/twitter-squared.png"
        />
      -->
      <a class="" @click="gotoTwitter()" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#003C43" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z"/></svg>
      </a>

      <!-- LINKEDIN -->

      <!-- REDDIT
                  <img src="https://img.icons8.com/ios-glyphs/90/000000/reddit.png" />

      -->
      <a class="" @click="gotoRedit()" target="_blank">
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#003C43" d="M64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32zM305.9 166.4c20.6 0 37.3-16.7 37.3-37.3s-16.7-37.3-37.3-37.3c-18 0-33.1 12.8-36.6 29.8c-30.2 3.2-53.8 28.8-53.8 59.9l0 .2c-32.8 1.4-62.8 10.7-86.6 25.5c-8.8-6.8-19.9-10.9-32-10.9c-28.9 0-52.3 23.4-52.3 52.3c0 21 12.3 39 30.1 47.4c1.7 60.7 67.9 109.6 149.3 109.6s147.6-48.9 149.3-109.7c17.7-8.4 29.9-26.4 29.9-47.3c0-28.9-23.4-52.3-52.3-52.3c-12 0-23 4-31.9 10.8c-24-14.9-54.3-24.2-87.5-25.4l0-.1c0-22.2 16.5-40.7 37.9-43.7l0 0c3.9 16.5 18.7 28.7 36.3 28.7zM155 248.1c14.6 0 25.8 15.4 25 34.4s-11.8 25.9-26.5 25.9s-27.5-7.7-26.6-26.7s13.5-33.5 28.1-33.5zm166.4 33.5c.9 19-12 26.7-26.6 26.7s-25.6-6.9-26.5-25.9c-.9-19 10.3-34.4 25-34.4s27.3 14.6 28.1 33.5zm-42.1 49.6c-9 21.5-30.3 36.7-55.1 36.7s-46.1-15.1-55.1-36.7c-1.1-2.6 .7-5.4 3.4-5.7c16.1-1.6 33.5-2.5 51.7-2.5s35.6 .9 51.7 2.5c2.7 .3 4.5 3.1 3.4 5.7z"/></svg>

      </a>
      <a class="" @click="  copyToClipboard()" target="_blank">
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#003C43" d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l140.1 0L400 115.9 400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-204.1c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-32-48 0 0 32c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l32 0 0-48-32 0z"/></svg>
            </a>
          
          

      <!-- PINTEREST -->
    </div>
  </div>
</template>

<script>
  import { getModularInstance } from '@firebase/util';
import { escapeHtml } from '@vue/shared';
import { urlencoded } from 'body-parser';
import { copyText } from 'vue3-clipboard';

export default {
  name: "SocialButton",
  props: ["url", "title"],
  methods: {

   
    copyToClipboard(){
      console.log("clipborader----")
     
      copyText(this.url + "&title=" + this.title, undefined, (error, event) => {
          if (error) {
            alert('Can not copy')
            console.log(error)
          } else {
            alert('link Copied to clipBoard')
            console.log(event)
          }
        })
    },
    gotoRedit() {
      window.open(
        "https://reddit.com/submit?url=" + this.url + "&title=" + this.title
      );
    },
    gotoFacebook() {
      window.open("https://www.facebook.com/sharer.php?u=" + this.url);
    },
    gotoTwitter() {
      window.open(
        "https://twitter.com/intent/tweet?text=" +
          this.title +
          "&url=" +
          this.url +
          "&hashtags=" +
          this.title
      );
    },
  },
};
</script>

<style  >

.share-text {
   display: flex;
   flex-direction: row;
   align-items: center;
   color:#2C3E50;
    }

    .share-text > span {
      font-family: Roboto;
      font-size: 22px;
    font-weight: bold;
    margin-left: 4px;
    }

  .share-buttons-container {
        width: 100%;
    background: #fff;
    margin: 0 auto;
    box-shadow: 2px 2px 10px #ccc;
    padding-right: 12px;
    padding-left: 12px;
    padding-top: 6px;
    padding-bottom: 6px;
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    align-items: center;

    justify-content: space-between;
  }
.share-list {
  display: flex;
  flex-direction: row;
 }

.share-list a {
  border-radius: 100px;
  width: 35px;
  height: 35px;
  padding: 7px;
  margin: 10px;
  cursor: pointer;
  overflow: hidden;
}
.share-list a img {
  width: 100%;
  height: 100%;
  filter: invert(100%);
}
a.fb-h {
  background: #3B5998;
}
a.tw-h {
  background: #00acee;
}
a.li-h {
  background: #0077B5;
}
a.re-h {
  background: #FF5700;
}
a.pi-h {
  background: #c8232c;
}

 
</style>