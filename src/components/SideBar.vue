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
  
    width:25%;
  
    display: flex;
  
    flex-direction: column;
  
    align-items: center;
  
    border-left: 1px solid #e0e0e0;
  
    padding-left: 20px;
  
    margin-left: 20px;
  
  }
  
  
  
  .scard {
  
  	background-color: #ffffff;
  
  	margin-bottom: 1.6rem;
  
    border: 1px solid #e0e0e0;
  
    border-radius: 4px;
  
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  
  }
  
  
  
  .card__margin {
  
    margin-top:0.5rem;
  
    margin-bottom:0.5rem;
  
    text-align: left;
  
    margin-left: 1rem;
  
    margin-right: 1rem;
  
    color: #000000;
  
  }
  
   
  
  .card__image {
  
    
  
  	min-height: 100px;
  
  	background-color: #ffffff;
  
  }
  
  	.card__image img {
  
  		width: 100%;
  
  		max-width: 100%;
  
      border-radius: 4px 4px 0 0;
  
  	
  
  	}
  
  
  
  .card__content {
  
  	position: relative;
  
    margin-right: 1rem;
  
     margin-left: 1rem;
  
  }
  
  
  
  /* card meta */
  
  .card__meta time {
  
  	font-size: 1.5rem;
  
  	color: #757575;
  
  	margin-left: 1rem;
  
  }
  
  
  
  /* card article */
  
  .card__article p {
  
  	text-decoration: none;
  
  	
  
  	transition: all 0.5s ease;
  
     text-align: left;
  
    font-family: 'Roboto', sans-serif;
  
  font-size: 18px;
  
  color: #000000;
  
  
  
  letter-spacing: .28px;
  
  }
  
  
  
  .card-text{
  
    font-family: 'Roboto', sans-serif;
  
  font-size: 14px;
  
  line-height: 20px;
  
  color: #000000;
  
  margin-top: 4px
  
  }
  
  /* card action */
  
  .card__action {
  
  	overflow: hidden;
  
  	padding-right: 1.6rem;
  
  	padding-left: 1.6rem;
  
  	padding-bottom: 1.6rem;
  
  }
  
  	 
  
  
  
  	.card__author img,
  
  	.card__author-content {
  
  		display: inline-block;
  
  		vertical-align: middle;
  
  	}
  
  
  
  .schild { 
  
  min-width:200px;
  
    margin:6px;
  
  
  
  }
  
  
  
  .lk-tag {
  
      display:flex;
  
      font-size: .875rem;
  
      font-weight: 550;
  
      font-style: normal;
  
      color: #000000;
  
      font-family: 'Roboto', sans-serif;
  
     margin-top:.5rem;
  
     margin-bottom:.5rem; 
  
     margin-right: 1rem;
  
     margin-left: 1rem;
  
    
  
  }
  
  
  
  .lk-tag url {
  
      text-transform: none;
  
  }
  
  
  
  .material-icons {
  
    margin-right:6px;
  
    color: #000000;
  
  }
  
  
  
  .card-shadow:hover{
  
    box-shadow: 0px 4px 8px rgba(0,0,0,0.2);
  
    transform: translateY(-5px);
  
    transition: all 0.3s ease;
  
  }
  
  @media screen and (max-width: 900px) {
  
      #scol{
  
        display: none;
  
        width: 0px;
  
      }
  
  }
  
     
  
    </style>