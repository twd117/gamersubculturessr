<template>
   
<div class="product-inf" v-if="rating">
                  <div class="product-inf__percent">
                    <div class="product-inf__percent-circle">
                      <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 100 100">
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stop-color="#0c1e2c" stop-opacity="0"></stop>
                            <stop offset="100%" stop-color="#cb2240" stop-opacity="1"></stop>
                          </linearGradient>
                        </defs>
                        <circle cx="50" cy="50" r="47" :stroke-dasharray="calcer()" stroke="#cb2240" stroke-width="6" fill="none"></circle>
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
import { calculateString } from 'bytebuffer';
import { computed } from 'vue';

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
  #rbox{
    display: flex;
    justify-content: end;
  }
  .product-inf {
    padding-top: 30px;

    text-align: center;
    background-color: black;
    padding-bottom: 30px;
    border-radius: 9px;
      margin-top: 30px;
      margin-bottom: 30px;
}
.product-slider__content {
    color: #fff;
    padding-top: 1px;
    position: relative;
    z-index: 2;
    width: 100%;
    padding-left: 250px;
    padding-right: 80px;
}
.product-inf__percent {
    font-weight: 700;
    font-size: 44px;
    letter-spacing: 1px;
    margin-bottom: 12px;
    font-family: 'Roboto Mono';
    position: relative;
    color:white
}
.product-inf__percent-txt {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.product-inf__title {
    font-family: 'Roboto Mono';
    font-weight: 700;
    letter-spacing: 2px;
    font-size: 33px;
    color: white;
}
  </style>