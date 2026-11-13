<template>

     <!-- Xbox -->
<div class="container">

    <router-link v-if="store.isGame"
    :to="{ name: 'Article', params: { id: this.id, title: this.title } }"
  >
    <section class="xbox" :style="{   background: 'url('+this.url+') no-repeat center center/cover'  }">
      <div class="content">
        <div id="tag"> <span>{{tag}}</span> </div>
        <div  v-if="parseInt(rating) > 0" id="starcontainer" >
              <div v-for="n in parseInt(rating)" :key="n" class="ic">
                       <svg
                           stroke="white" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"/></svg>
             </div>
        </div>


        <h2 class="btit">{{title}}</h2>
        <p>{{sub}}</p>
          <a href="#" class="btn">
            Read Now <i class="fas fa-chevron-right"></i>
          </a>
      </div>
    </section>
    </router-link>
    <router-link v-else-if="store.isNews"
    :to="{ name: 'news', params: { id: this.id, title: this.title } }"
  >
    <section class="xbox" :style="{   background: 'url('+this.url+') no-repeat center center/cover'  }">
      <div class="content">
        <div id="tag"> <span>{{tag}}</span> </div>



        <h2 class="btit"> {{title}}</h2>
        <p>{{sub}}</p>
          <a href="#" class="btn">
            Read Now <i class="fas fa-chevron-right"></i>
          </a>
      </div>
    </section>
    </router-link>
    <router-link v-else-if="store.isScifi"
    :to="{ name: 'smlc', params: { id: this.id, title: this.title } }"
  >
    <section class="xbox" :style="{   background: 'url('+this.url+') no-repeat center center/cover'  }">
      <div class="content">
        <div id="tag"> <span>{{tag}}</span> </div>



        <h2 class="btit"> {{title}}</h2>
        <p>{{sub}}</p>
          <a href="#" class="btn">
            Read Now <i class="fas fa-chevron-right"></i>
          </a>
      </div>
    </section>
    </router-link>
       <router-link v-else
    :to="{ name: 'Sciences', params: { id: this.id, title: this.title } }"
  >
    <section class="xbox" :style="{   background: 'url('+this.url+') no-repeat center center/cover'  }">
      <div class="content">
        <div id="tag"> <span>{{tag}}</span> </div>
        <div  v-if="parseInt(rating) > 0" id="starcontainer" >
              <div v-for="n in parseInt(rating)" :key="n" class="ic">
                       <svg
                           stroke="white" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"/></svg>
             </div>
        </div>


        <h2 class="btit">{{title}}</h2>
        <p>{{sub}}</p>
          <a href="#" class="btn">
            Read Now <i class="fas fa-chevron-right"></i>
          </a>
      </div>
    </section>
    </router-link>
</div>


</template>

<script>
import { useNavStore } from "../store/useNavStore.js"

export default {
  name: "Banner",

  props: {
    id:String,
    tag: String,
        title: String,
    sub: String,
    rating: Number,
    img:String,
    imgurl:String,


  },
  setup(){
    const store = useNavStore();

    return { store }
  },
   data() {
    return {
      url: this.img
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
.container {
  width: 100%;
  margin: 24px auto 32px;
  font-family: 'Roboto', sans-serif;
  background: transparent;
  color: #ffffff;
  font-size: 16px;
  line-height: 1.5;
}

a {
  text-decoration: none;
  color: inherit;
}

.xbox {
  width: 100%;
  height: 440px;
  margin-bottom: 20px;
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid #e0e0e0;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: flex-end;
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1),
              box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

.xbox:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.18);
}

.xbox::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.88) 0%,
    rgba(0, 0, 0, 0.52) 55%,
    rgba(0, 0, 0, 0.2) 100%
  );
}

.xbox .content {
  width: 65%;
  padding: 36px 40px;
  text-align: left;
  position: relative;
  z-index: 1;
}

#tag {
  display: inline-flex;
  padding: 5px 12px;
  justify-content: center;
  width: fit-content;
  background: #FF7A30;
  border-radius: 6px;
  border: none;
  margin: 0 0 14px 0;
}

#tag span {
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #ffffff;
  margin: 0;
}

#starcontainer {
  display: flex;
  flex-direction: row;
  margin-bottom: 12px;
}

.ic {
  width: 16px;
  height: 16px;
  margin-right: 4px;
}

.ic svg {
  color: #FF7A30;
  fill: #FF7A30;
}

.btit {
  text-align: left;
  font-family: 'Roboto', sans-serif;
  font-size: 28px;
  font-weight: 700;
  line-height: 1.25;
  color: #ffffff;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.35);
  margin: 0 0 10px 0;
}

.xbox p {
  font-family: 'Roboto', sans-serif;
  font-size: 15px;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.88);
  margin: 0 0 20px 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.btn {
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border: none;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 600;
  padding: 10px 24px;
  background-color: #FF7A30;
  color: #ffffff;
  border-radius: 24px;
  box-shadow: 0 2px 6px rgba(255, 122, 48, 0.35);
  transition: background-color 0.2s ease, box-shadow 0.2s ease;
}

.btn:hover {
  background-color: #465C88;
  color: #ffffff;
  box-shadow: 0 4px 12px rgba(70, 92, 136, 0.4);
}

@media only screen and (max-width: 800px) {
  .xbox {
    height: 380px;
  }
  .xbox .content {
    width: 85%;
    padding: 28px;
  }
  .btit {
    font-size: 22px;
  }
}

@media only screen and (max-width: 600px) {
  .xbox {
    height: 340px;
  }
  .xbox .content {
    width: 100%;
    padding: 20px;
  }
  .btit {
    font-size: 19px;
  }
}
</style>
