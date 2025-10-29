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

.btit {
    text-align: start;
    font-family: 'Orbitron', sans-serif;
    color: #00ff00;
    text-shadow: 0 0 10px #00ff00;
}
a {
  color: #00ff00;
  text-decoration: none; /* no underline */
}
a :hover{
  color: #fff;
  text-decoration: none; /* no underline */
}

.btn {
  cursor: pointer;
  display: inline-block;
  border: 1px solid #00ff00;
  font-weight: bold;
  padding: 10px 20px;
  background: transparent;
  color: #00ff00;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.btn:hover{
  background-color: #00ff00;
  color:#1a1a1a;
}
#starcontainer {
  display:flex;
  flex-direction:row;
  margin-bottom:16px;
}
.ic svg {
  margin-right:4px;
  color: #00ff00;
  filter: drop-shadow(0 0 5px #00ff00);
}
.ic {
  position: static;
width: 16px;
height: 16px;
left: calc(50% - 16px/2 - 16px);
top: calc(50% - 16px/2);


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
#tag {
  display: flex;
padding: 3px;
justify-content: center;

width: 40%;


background: rgba(0, 255, 0, 0.1);
border-radius: 0px 8px;
border: 1px solid #00ff00;

/* Inside auto layout */

flex-wrap: wrap;
margin: 16px 0px;
}
#tag span {

  justify-content: center;
  position: static;
width: 49px;
height: 16px;
left: 8px;
top: 4px;
color:#00ff00;
/* Mobile/Small copy */

font-family: 'Roboto Mono', monospace;
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
/* identical to box height, or 114% */


/* Primary/Teal */

color: #00ff00;


/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
margin: 0px 10px;
}

.container {
    width: 100%;
    margin: auto;
   font-family: 'Roboto Mono', monospace;
  background: #1a1a1a;
  color: #e0e0e0;
  font-size: 17px;
  line-height: 1.5;
}

a {
  text-decoration: none;
}

.xbox {
  width: 100%;
  height: 450px;
  margin-bottom: 20px;
  position: relative;
   background-repeat: no-repeat;
  background-position: center;
    -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

.xbox::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
}

.xbox .content {
  width: 40%;
  padding: 50px 0 0 30px;
  text-align: left;
  position: relative;
  z-index: 1;
}

.xbox p {
  margin: 10px 0 20px;
}



.content {
  width: 55%;
  padding: 100px 0 0 30px;
}

@media only screen and (max-width: 1000px) {
    .container {

  color: #e0e0e0;
  font-size: 16px;
  line-height: 1.5;
}
.xbox .content {
  width: 55%;
  padding: 50px 0 0 30px;
  text-align: left;
}

}
@media only screen and (max-width: 800px) {
    .container {

  color: #e0e0e0;
  font-size: 16px;
  line-height: 1.5;
}
.xbox .content {
  width: 60%;
  padding: 50px 0 0 30px;
  text-align: left;
}

}

@media only screen and (max-width: 600px) {
    .container {

  color: #e0e0e0;
  font-size: 13px;
  line-height: 1.5;
}
.xbox .content {
  width: 65%;
  padding: 50px 0 0 30px;
  text-align: left;
}

}
@media only screen and (max-width: 450px) {
    .container {

  color: #e0e0e0;
  font-size: 10px;
  line-height: 1.5;
}
#tag span {
  padding:7px;
}
.xbox .content {
  width: 75%;
  padding: 50px 0 0 30px;
  text-align: left;
}


}
</style>
