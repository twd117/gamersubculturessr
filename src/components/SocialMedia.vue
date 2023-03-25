<template>
  <div class="share-buttons-container">
    <div class="share-list">
      <!-- FACEBOOK 
          <img
          src="https://img.icons8.com/material-rounded/96/000000/facebook-f.png"
        />
      -->
      <a class="fb-h" @click="gotoFacebook()" target="_blank">
      
        <font-awesome-icon icon="fa-brands fa-facebook-f" inverse />
      </a>

      <!-- TWITTER 
         <img
          src="https://img.icons8.com/material-rounded/96/000000/twitter-squared.png"
        />
      -->
      <a class="tw-h" @click="gotoTwitter()" target="_blank">
          <font-awesome-icon icon="fa-brands fa-twitter" inverse/>
      </a>

      <!-- LINKEDIN -->

      <!-- REDDIT
                  <img src="https://img.icons8.com/ios-glyphs/90/000000/reddit.png" />

      -->
      <a class="re-h" @click="gotoRedit()" target="_blank">
            <font-awesome-icon icon="fa-brands fa-reddit-alien" inverse/>

      </a>
      <a class="re-h" @click="  copyToClipboard()" target="_blank">
        <font-awesome-icon icon="fa-solid fa-link" inverse />
            </a>
          

      <!-- PINTEREST -->
    </div>
  </div>
</template>

<script>
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

<style>
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

.share-buttons-container {
  display: inline;
  float: right;
}
</style>