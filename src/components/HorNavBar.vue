<template>
    <div class="hsb">
      <span>Mores</span>
        <h3>News</h3>

  <div class="line"></div>
  <div v-if="isGame" class="easy-grid">


    <router-link
    :to="{ name: 'Sciences', params: { id: data[0].id, title: data[0].title  } }"
    >
    <div class="brdr">
      <div class="hsb">

      </div>
         <div class=" cxchild ccard ">
              <div class="ccard__image ">
                  <img :src="data[0].img[0].downloadURL" alt="image">
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
                  <img :src="data[1].img[0].downloadURL" alt="image">
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
                  <img :src="data[0].img[0].downloadURL" alt="image">
              </div>
              <div class="clk-tag  "> Games </div>
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
                  <img :src="data[1].img[0].downloadURL" alt="image">
              </div>
              <div class="clk-tag  "> Games </div>
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
    // console.log("d----",data)

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
  .line {
    height: 1px;
    margin-top: 26px;
    margin-bottom: 26px;
    background-color: #e0e0e0;
    width: 100%;
    box-shadow: 0 0 4px rgba(0,0,0,0.1);
  }
  .hsb > span{
    display: flex;
    text-align: left;
    color: #000000;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 2rem;
    line-height: 110%;
    letter-spacing: -0.04em;
    text-transform: uppercase;
    margin-bottom: 6px;
    text-shadow: 0 0 5px rgba(0,0,0,0.1);
  }
  .hsb > h3{
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 3rem;
    line-height: 110%;
    letter-spacing: -0.04em;
    text-transform: uppercase;
    margin-bottom: 16px;
    color: #000000;
    text-shadow: 0 0 10px rgba(0,0,0,0.1);
  }
  a {
    list-style: none;
    color:none;
    text-decoration: none;
  }
.easy-grid {
  display: grid;
  align-items: start;
  grid-gap:  1rem;
  grid-template-columns: repeat(
    2,
    minmax(300px, 1fr)
  );
 }

@media (max-width: 650px) {

.easy-grid{
  display: grid;
  align-items: start;
  grid-gap:  1rem;
  grid-template-columns: repeat(
    1,
    minmax(200px, 1fr)
  );
 
}
}


.vline {
    width: 12px;
    height: 100%;
    margin: 0px;
    background: #e0e0e0;
}
.brdr{
       margin-bottom: 12px;
}


.ccard {
	background-color: #ffffff;
	margin-bottom: 1.6rem;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);

}

.ccard__margin {
  margin-top:0.5rem;
  margin-bottom:0.5rem;
  text-align: left;
  color: #000000;
}


    .ccard__image img {
        border-radius: 4px;
       height: auto;
    width: 100%;

	}


/* card article */
.ccard__article h4 {
  font-family: "Roboto", sans-serif;
    text-align: left;
    margin-top: 0px;
    margin-bottom: 0px;
    font-weight: 700;
    color: #000000;


}

.ccard-text{
  font-family: 'Roboto', sans-serif;
font-size: 14px;
line-height: 20px;
color: #000000;
margin-top: 4px
}

.cxchild {
     width:100%;

}

.clk-tag {
    display:flex;
    font-size: .875rem;
    font-weight: 550;
    font-style: normal;
    color: #000000;
    font-family: 'Roboto', sans-serif;
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
  box-shadow: 0px 4px 8px rgba(0,0,0,0.2);
}

  </style>
