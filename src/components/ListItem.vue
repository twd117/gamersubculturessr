<template>
           <div class="line"></div>

   <div id="flx">
  
    <router-link v-if="store.isGame"
    :to="{ name: 'Article', params: { id: this.id, title: this.title  } }"
  >
  <div class="crd-ctn">
     <img class="card-img" :src="img[0].downloadURL">
   
<div class="thecard">
 
  <div class="Dcard-caption">
    <div >
      <div class="dtg">
      <span class="date">{{ date ? toDate(date.seconds): "" }}</span>
        <span class="flt">#{{tag}}</span>
      </div>
               <h1>{{title}} </h1>
    <p>{{sub}}</p>

       </div>
 
  </div>
  
  
    </div>
       
</div>
 </router-link>
 
    <router-link  v-else-if="store.isNews"

    :to="{ name: 'news', params: { id: this.id, title: this.title  } }"
  >
  <div class="crd-ctn">
     <img class="card-img" :src="img[0].downloadURL">
   
<div class="thecard">
 
  <div class="Dcard-caption">
    <div >
      <div class="dtg">
      <span class="date">{{ date ? toDate(date.seconds): "" }}</span>
        <span class="flt">#{{tag}}</span>
      </div>
               <h1>{{title}} </h1>
    <p>{{sub}}</p>

       </div>
 
  </div>
  
  
    </div>
       
</div>
 </router-link>

 <router-link  v-else-if="store.isScifi"

:to="{ name: 'smlc', params: { id: this.id, title: this.title  } }"
>
<div class="crd-ctn">
 <img class="card-img" :src="img[0].downloadURL">

<div class="thecard">

<div class="Dcard-caption">
<div >
  <div class="dtg">
  <span class="date">{{ date ? toDate(date.seconds): "" }}</span>
    <span class="flt">#{{tag}}</span>
  </div>
           <h1>{{title}} </h1>
<p>{{sub}}</p>

   </div>

</div>


</div>
   
</div>
</router-link>

 

 <router-link v-else
    :to="{ name: 'Sciences', params: { id: this.id, title: this.title } }"
  >
  <div class="crd-ctn">
     <img class="card-img" :src="img[0].downloadURL">
   
<div class="thecard">
 
  <div class="Dcard-caption">
    <div >
      <div class="dtg">
      <span class="date">{{ date ? toDate(date.seconds):"" }}</span>
        <span class="flt">#{{tag}}</span>
      </div>
               <h1>{{title}} </h1>
    <p>{{sub}}</p>

       </div>
 
  </div>
  
  
    </div>
       
</div>
 </router-link>

</div>


</template>
  
  <script>
  import moment from 'moment';
  import { useNavStore } from "../store/useNavStore.js"

  export default {
    setup(){
    const store = useNavStore();
    
    return { store }
  },
    name: "ListItem",
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
    "imgurl",
    "date"

  ],
  methods:{
    toDate(s){
        return moment(new Date(s*1000)).format("dddd, MMMM Do YYYY")
    }
  }
  };
  </script>
  
  <style scoped>
 

 .line {
    height: 0.2px;
  margin-top: 10px;
  margin-bottom:10px;
  background-color:#424242;
  width: 100%;
 
}

 /*a:hover .thecard {
  box-shadow: 0 10px 50px rgba(0,0,0,.6);
}*/
a {
  text-decoration: none;
}


.card-img {
  width:300Px;
  object-fit: cover;
   height: 100%;
}

.thecard {
  width: 100%;
  height:100%;
  
  /* box-shadow: 0 1px 30px rgba(0,0,0,.4);*/
  display: flex;
  flex-direction:column;
  border-radius: 4px;
  transition: 400ms ease;
}


p {
  font-size: 13px;
}


.Dcard-caption span.date {
  font-size: 10px;
}
.flt {
 
 font-size: 10px;
 
}



.Dcard-caption h1 {
  font-size: 22px;
}

h5 {
  margin:0;
}
.dtg {
  display:flex;
  justify-content:space-between;
}
/**********Dark card***********/

.Dcard-caption span{
  
    font-family: 'Muli', sans-serif;
  color:#040404;
}
.Dcard-caption p{
  font-family: 'Noto Sans', sans-serif;
  color:#040404;
  
}
.Dcard-caption h1{
  font-family: 'Noto Sans', sans-serif;
  color:#000000;
  margin-top:18px;
  margin-bottom: 18px;
}
.Dcard-caption {
  padding: 15px 25px 15px 25px;
  border-radius: 4px 4px 4px 4px;
  text-align: left;
}

/*#flx {
 
}*/

.crd-ctn {
  display:flex;
  margin:8px;
  align-items: center;

}

@media screen and (max-width: 1090px) {
    .Dcard-caption span.date {
  font-size: 10px;
}
.flt {
 
 font-size: 10px;
 
}

p {
  font-size: 11px;
}

.Dcard-caption h1 {
  font-size: 15px;
}

}

@media screen and (max-width: 700px) {
  .Dcard-caption span.date {
  font-size: 10px;
}
.flt {
 
 font-size: 10px;
 
}

p {
  font-size: 11px;
}
.card-img {
  width:200Px;}
}

@media screen and (max-width: 650px) {
  .crd-ctn {
  display:flex;
  flex-direction: column;
  margin:8px;
  justify-content: center;
}
  .Dcard-caption span.date {
  font-size: 10px;
  margin-top: 8px;;
}
.flt {
 
 display: none ;
}
.Dcard-caption{
  padding:0px;
}
p {
  font-size: 11px;
}
.card-img {
  width:100%;}
}


  </style>