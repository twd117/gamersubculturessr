<template>
   
  <div v-if="isGame" class="easy-grid">
    <router-link 
    :to="{ name: 'Sciences', params: { id: data[0].id, title: data[0].title  } }"
    >
    <div class="brdr">
         <div class=" cxchild ccard ">
              <div class="ccard__image ">
                  <img :src="data[0].imgurl" alt="image">
              </div>
              <div class="clk-tag  "> Entertainment </div>
              <div class="ccard__content ">
                  
 
                  <div class="ccard__article">
            <h4>
                {{data[0].title}}
            </h4>


                  
                  </div>
              </div>

      <div class="ccard__margin">
        {{data[0].tag}}

      </div>
          
          </div>
  </div>
</router-link>
<router-link 
    :to="{ name: 'Sciences', params: { id: data[1].id, title: data[1].title  } }"
  >
  <div  class="brdr">
         <div class=" cxchild ccard ">
              <div class="ccard__image ">
                  <img :src="data[1].imgurl" alt="image">
              </div>
              <div class="clk-tag  "> Entertainment </div>
              <div class="ccard__content ">
                  
 
                  <div class="ccard__article">
            <h4>
            {{data[1].title}}
            </h4>


                  
                  </div>
              </div>

      <div class="ccard__margin">
        {{data[1].tag}}

      </div>
          
          </div>
  </div>
</router-link>
</div>

<div v-if="!isGame" class="easy-grid">

<router-link 
    :to="{ name: 'Article', params: { id: data[0].id, title: data[0].title  } }"
  >
    <div class="brdr">
         <div class=" cxchild ccard ">
              <div class="ccard__image ">
                  <img :src="data[0].imgurl" alt="image">
              </div>
              <div class="clk-tag  "> Entertainment </div>
              <div class="ccard__content ">
                  
 
                  <div class="ccard__article">
            <h4>
                {{data[0].title}}
            </h4>


                  
                  </div>
              </div>

      <div class="ccard__margin">
        {{data[0].tag}}

      </div>
          
          </div>
  </div>
</router-link>
<router-link 
    :to="{ name: 'Article', params: { id: data[1].id, title: data[1].title  } }"
  >
  <div  class="brdr">
         <div class=" cxchild ccard ">
              <div class="ccard__image ">
                  <img :src="data[1].imgurl" alt="image">
              </div>
              <div class="clk-tag  "> Entertainment </div>
              <div class="ccard__content ">
                  
 
                  <div class="ccard__article">
            <h4>
            {{data[1].title}}
            </h4>


                  
                  </div>
              </div>

      <div class="ccard__margin">
        {{data[1].tag}}

      </div>
          
          </div>
  </div>
</router-link>

  
      
  
</div>




  
  
  </template>
  
  <script>
  import {useDataStore} from "../store/useDataStore.js"

  export default {
    

    name: "HorNavBar",
   async setup(props) {
    let data = [];

    const dataStore = useDataStore();
    if(props.isGame){
     
       await dataStore.getSidebarDataEnter();
       data=  dataStore.sidebarData;
     console.log("d----",data)
   
    }else{
     
       await dataStore.getSidebarDataGames();
       data = dataStore.sidebarData;


    }
   

    return { dataStore,data }
  },
  data(){
 return {
    x:[]
 };
  },
  props:{
    isGame: { Type:Boolean, default: false}
  },
  };
  </script>
  
  <style scoped>
  a {
    list-style: none;
    color:none;
    text-decoration: none;
  }
.easy-grid {
  display: grid;
  

  grid-gap:  1rem;
  grid-template-columns: repeat(
    2,
    minmax(300px, 1fr) 
  );
  align-items: center;
}


.vline {
    width: 12px;
    height: 100%;
    margin: 0px;
    background: rgb(229, 229, 229);
}
.brdr{
       margin-bottom: 12px;
}




#navrow {
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  
}

/***********************old card ************************************/


.ccard {
	background-color: #fff;
	margin-bottom: 1.6rem;

}

.ccard__margin {
  margin-top:0.5rem;
  margin-bottom:0.5rem;
  text-align: left;
}
 

    .ccard__image img {
        border-radius: 8px;
       height: auto;
    width: 100%;
	
	}


/* card article */
.ccard__article h4 {
  font-family: "Work Sans", sans-serif;
    text-align: left;
    margin-top: 0px;
    margin-bottom: 0px;
    font-weight: 700;
    color: #424242;

	
}

.ccard-text{
  font-family: Roboto;
font-size: 14px;
line-height: 20px;
color: #424242;
margin-top: 4px
}
/* card action */



	






	

.cxchild { 
  margin:12px;
     width:100%;

}

.clk-tag {
    display:flex;
    font-size: .875rem;
    font-weight: 550;
    font-style: normal;
    color: #5f6368;
    font-family: 'Roboto Mono', monospace;
   margin-top:.5rem;
   margin-bottom:.5rem; 
  
  
}

.clk-tag url {
    text-transform: none;
}

.cmaterial-icons {
  margin-right:6px;
}

.ccard-shadow:hover{
  box-shadow: 0px 0px 10px rgba(0,0,0,0.3);
}

  </style>