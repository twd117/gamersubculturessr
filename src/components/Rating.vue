<template>
   
<div class="product-inf" v-if="rating">
                  <div class="product-inf__percent">
                    <div class="product-inf__percent-circle">
                      <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 100 100">
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stop-color="#f8f9fa" stop-opacity="0"></stop>
                            <stop offset="100%" stop-color="#007bff" stop-opacity="1"></stop>
                          </linearGradient>
                        </defs>
                        <circle cx="50" cy="50" r="47" :stroke-dasharray="calcer()" stroke="#007bff" stroke-width="6" fill="none"></circle>
                      </svg>
                    </div>
                    <div class="product-inf__percent-txt">
                      {{ rating }}/5 
                    </div>
                  </div>

                  <span class="product-inf__title"> {{ opp() }} </span>
                </div>



</template>
  
  <script>


  export default {
    name: "Rating",
    props:{rating:Number},
    methods:{
         calcer(){
            return ""+this.rating * 60 +",300";
         }
         ,
         opp(){
            switch(this.rating){
                case 1:

                return "Poor";

                case 2:

                return "Below Average";

                case 3:

                return "Satisfactory";

                case 4:

                return "Very Good";

                case 5:

                return "Exceeds Expectations";

                default:
                return "";

            }
         }
    },
  };
  </script>
  
  <style>
  #rbox {
    display: flex;
    justify-content: flex-end;
  }
  .product-inf {
    padding: 28px 24px;
    text-align: center;
    background-color: #fafafa;
    border-radius: 12px;
    margin-top: 28px;
    margin-bottom: 28px;
    border: 1px solid #e0e0e0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  }
  .product-slider__content {
    color: #1d1b20;
    padding-top: 1px;
    position: relative;
    z-index: 2;
    width: 100%;
    padding-left: 250px;
    padding-right: 80px;
  }
  /* M3 Display Small — Rating Score */
  .product-inf__percent {
    font-family: 'Roboto', sans-serif;
    font-size: 2.25rem; /* 36px — M3 Display Small */
    font-weight: 700;
    line-height: 2.75rem; /* 44px */
    letter-spacing: 0px;
    margin-bottom: 12px;
    position: relative;
    color: #1d1b20;
  }
  .product-inf__percent-txt {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  /* M3 Headline Small — Rating Verdict */
  .product-inf__title {
    font-family: 'Roboto', sans-serif;
    font-size: 1.5rem; /* 24px — M3 Headline Small */
    font-weight: 600;
    line-height: 2rem; /* 32px */
    letter-spacing: 0px;
    color: #1d1b20;
  }
  </style>