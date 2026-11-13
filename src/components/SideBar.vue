<template>
  


  <div id="scol">
    <div v-for="data in d" class=" schild scard radius shadowDepth1">
      
      <router-link v-if="store.isEntertainment"  :to="{ name: 'Article', params: { id: data.id, title: data.title  } }"   >
          
        <div class="card__image border-tlr-radius">
          <img :src="data.img[0].downloadURL" alt="image" class="border-tlr-radius">
        </div>
        <div class="lk-tag url "> Games </div>
        <div class="card__content ">
                  
 
          <article class="card__article">
            <p >{{data.title}}
            </p>

          
          </article>
        </div>

      <div class="card__margin">
       <span>{{data.tag}}</span>
      </div>
      
     

      </router-link>
      
      <router-link v-else
    :to="{ name: 'Sciences', params: { id: data.id, title: data.title } }"
  >          
          <div class="card__image border-tlr-radius">
            <img :src="data.img[0].downloadURL" alt="image" class="border-tlr-radius">
                </div>
              <div class="lk-tag url "> Entertainment </div>
          <div class="card__content ">
                    
   
            <article class="card__article">
              <p >{{ data.title }}
              </p>
  
            
            </article>
          </div>
  
        <div class="card__margin">
         <span>{{ data.tag }}</span>
        </div>
        
       
  
        </router-link>
    
    </div>


</div>


</template>
  
  <script>
import { useNavStore } from "../store/useNavStore.js"

  export default {
    setup(){
    const store = useNavStore();
   
    return { store }
  },
    name: "SideBar",
    props: ["d"],
   
  };
  </script>
  
  <style scoped>
#scol {
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  border-left: 1px solid #e0e0e0;
  padding-left: 24px;
  margin-left: 24px;
}

.scard {
  position: relative;
  background-color: #ffffff;
  margin-bottom: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  transition: transform 0.22s cubic-bezier(0.4, 0, 0.2, 1),
              box-shadow 0.22s cubic-bezier(0.4, 0, 0.2, 1);
}

.scard:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}

.scard a {
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
}

.card__image {
  position: relative;
  width: 100%;
  padding-top: 56.25%;
  background-color: #f1f3f4;
  overflow: hidden;
}

.card__image img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0;
  transition: transform 0.3s ease;
}

.scard:hover .card__image img {
  transform: scale(1.03);
}

.lk-tag {
  position: absolute;
  top: 12px;
  left: 12px;
  margin: 0;
  padding: 4px 10px;
  border-radius: 6px;
  font-family: 'Roboto', sans-serif;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #ffffff;
  background-color: #465C88;
  z-index: 2;
}

.card__content {
  padding: 16px 18px 8px;
  margin: 0;
}

.card__article p {
  text-decoration: none;
  transition: color 0.2s ease;
  text-align: left;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.35;
  color: rgba(0, 0, 0, 0.87);
  margin: 0;
}

.scard:hover .card__article p {
  color: #FF7A30;
}

.card__margin {
  margin: 8px 18px 16px;
  padding-top: 10px;
  border-top: 1px solid #f1f3f4;
  text-align: left;
}

.card__margin span {
  display: inline-block;
  padding: 3px 8px;
  border-radius: 4px;
  background-color: #f5f5f5;
  color: rgba(0, 0, 0, 0.65);
  font-family: 'Roboto', sans-serif;
  font-size: 11px;
  font-weight: 500;
}

.lk-tag::after {
  content: '';
  margin-left: auto;
  font-family: 'Roboto', sans-serif;
  font-size: 13px;
  font-weight: 600;
  color: #FF7A30;
  transition: transform 0.2s ease;
}

.schild {
  min-width: 200px;
  margin: 0 0 20px 0;
}

@media screen and (max-width: 900px) {
  #scol {
    display: none;
    width: 0px;
  }
}
  </style>