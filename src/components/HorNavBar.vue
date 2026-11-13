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
  margin-top: 16px;
  margin-bottom: 24px;
  background-color: #e0e0e0;
  width: 100%;
}

.hsb > span {
  display: flex;
  text-align: left;
  color: #FF7A30;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 13px;
  line-height: 1.2;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  margin-bottom: 4px;
}

.hsb > h3 {
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.3;
  letter-spacing: 0;
  text-transform: none;
  margin-bottom: 8px;
  color: rgba(0, 0, 0, 0.87);
}

a {
  list-style: none;
  color: inherit;
  text-decoration: none;
}

.easy-grid {
  display: grid;
  align-items: stretch;
  grid-gap: 24px;
  grid-template-columns: repeat(2, minmax(220px, 1fr));
}

@media (max-width: 650px) {
  .easy-grid {
    grid-template-columns: 1fr;
  }
}

.brdr {
  margin-bottom: 12px;
  height: 100%;
}

.ccard {
  position: relative;
  background-color: #ffffff;
  margin-bottom: 0;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: transform 0.22s cubic-bezier(0.4, 0, 0.2, 1),
              box-shadow 0.22s cubic-bezier(0.4, 0, 0.2, 1);
}

.ccard:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}

.ccard__image {
  position: relative;
  width: 100%;
  padding-top: 56.25%;
  background-color: #f1f3f4;
  overflow: hidden;
}

.ccard__image img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0;
  transition: transform 0.3s ease;
}

.ccard:hover .ccard__image img {
  transform: scale(1.03);
}

.clk-tag {
  position: absolute;
  top: 12px;
  left: 12px;
  padding: 4px 10px;
  border-radius: 6px;
  font-family: 'Roboto', sans-serif;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #ffffff;
  background-color: #FF7A30;
  margin: 0;
  z-index: 2;
}

.ccard__content {
  padding: 18px 20px 10px;
  flex: 1;
}

.ccard__article h4 {
  font-family: 'Roboto', sans-serif;
  text-align: left;
  margin: 0;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.35;
  color: rgba(0, 0, 0, 0.87);
  transition: color 0.2s ease;
}

.ccard:hover .ccard__article h4 {
  color: #FF7A30;
}

.ccard__margin {
  margin: auto 20px 16px;
  padding-top: 12px;
  border-top: 1px solid #f1f3f4;
  text-align: left;
  font-family: 'Roboto', sans-serif;
  font-size: 11px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.65);
  display: flex;
  align-items: center;
}

.ccard__margin::after {
  content: 'Read Article \2192';
  margin-left: auto;
  font-size: 13px;
  font-weight: 600;
  color: #FF7A30;
}

.cxchild {
  width: 100%;
}
  </style>
