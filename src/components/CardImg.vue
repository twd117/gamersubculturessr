<template>
 <div class="cardt">
  <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" alt="" class="cardtimg">
  <div class="cardtbody">
    <div class="sbtag">
      <span>#e-sport</span>
    </div>
    <h5 class="cardttitle">Orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since. </h5>

    
  </div>  
</div>
  
  </template>
  
  <script>
  export default {
    name: "CardImg",
  };
  </script>
  
  <style>
 .cardt {
  margin:5px;
  position: relative;
  width: 300px;
  height: 250px;
  background: rgba(0,0,0, .5);
  
  border-radius: 5px;
  box-shadow: 0 10px 35px 0 rgba(0,0,0, .35);
  
}
.cardt:hover {
  background: rgba(255,0,0, .5);
}
.cardtbody {
  color: white;
  padding: 3rem;
}

.cardtimg {
  width:100%;
  height:100%;
  background: cover;

  border-radius:5px;
  
}

.cardttitle {
  font-size: 3rem;
  margin-bottom: 1px;
  position:absolute;
  left:5%;
  bottom:10%;
      color: #d6dbeb;
    font-size:.9em;
    color: #fefefe;

}



.sbtag {
  opacity:0.8;
  background-color:white;
     border-radius:4px;
  position:absolute;
    border: none;
    color: black;
    padding: 5px 8px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    left:5%;
    top:5%;

}


.button:hover {
  color: black;
}

  </style>