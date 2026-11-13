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
  display: none;
}

a {
  text-decoration: none;
  color: inherit;
  display: block;
}

.crd-ctn {
  display: flex;
  margin: 0 0 20px 0;
  align-items: stretch;
  background-color: #ffffff;
  border-radius: 12px;
  border: 1px solid #e0e0e0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  transition: transform 0.22s cubic-bezier(0.4, 0, 0.2, 1),
              box-shadow 0.22s cubic-bezier(0.4, 0, 0.2, 1);
}

.crd-ctn:hover {
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  transform: translateY(-4px);
}

.card-img {
  width: 280px;
  min-height: 190px;
  object-fit: cover;
  height: auto;
  border-radius: 0;
  border: none;
  flex-shrink: 0;
  background-color: #f1f3f4;
  transition: transform 0.3s ease;
}

.crd-ctn:hover .card-img {
  transform: scale(1.03);
}

.thecard {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 0;
}

.Dcard-caption {
  padding: 20px 24px;
  text-align: left;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.dtg {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 10px;
}

.Dcard-caption span.date {
  font-size: 12px;
  color: rgba(0, 0, 0, 0.54);
  font-family: 'Roboto', sans-serif;
}

.flt {
  display: inline-flex;
  align-items: center;
  padding: 3px 10px;
  border-radius: 6px;
  background-color: rgba(255, 122, 48, 0.12);
  color: #d85a12;
  font-size: 11px;
  font-weight: 600;
  font-family: 'Roboto', sans-serif;
}

.Dcard-caption h1 {
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.35;
  color: rgba(0, 0, 0, 0.87);
  margin: 0 0 10px 0;
  transition: color 0.2s ease;
}

.crd-ctn:hover .Dcard-caption h1 {
  color: #FF7A30;
}

.Dcard-caption p {
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.6);
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

h5 {
  margin: 0;
}

@media screen and (max-width: 700px) {
  .card-img {
    width: 210px;
  }
}

@media screen and (max-width: 650px) {
  .crd-ctn {
    flex-direction: column;
    padding: 0;
  }

  .card-img {
    width: 100%;
    height: 200px;
  }

  .Dcard-caption {
    padding: 18px 20px;
  }
}
  </style>