<template>
      
  <div class="crd-ctn">
  <a target="_blank" href="https://www.behance.net/doonnnx">
  <div class="thecard">
   
    <div class="card-caption">
      <div ><span class="date">Thursday, July 16, 2015</span><span class="flt">#07</span>
        </div>
      
      <h1>Ubisoft announced the launch of playtests for a new co-op shooter call Project U
 </h1>
      <p></p>
    </div>
   
  </div>
</a>
    </div>
  
  </template>
  
  <script>
  export default {
    name: "CardBlack",
  };
  </script>
  
  <style>
  .flt {
 
 float:right;
 font-size: 10px;
 
}


a {
 text-decoration: none;
}

p {
 font-size: 13px;
}


a:hover .thecard {
 box-shadow: 0 10px 50px rgba(0,0,0,.6);
}

.thecard {
 width: 300px;
 
 box-shadow: 0 1px 30px rgba(0,0,0,.4);
 display: block;
 border-radius: 4px;
 transition: 400ms ease;
}

.card-img {
 height: 225px;
}

.card-img img {
 width:100%;
 border-radius: 4px 4px 0px 0px;
}

.card-caption span{
 
   font-family: 'Muli', sans-serif;
 color:#fefefe;
}
.card-caption p{
 font-family: 'Noto Sans', sans-serif;
 color:#d6d6d6;
 
}
.card-caption h1{
 font-family: 'Noto Sans', sans-serif;
 color:#fefefe;
}
.card-caption {
 position: relative;
 background: #000;
 padding: 15px 25px 15px 25px;
 border-radius: 0px 0px 4px 4px;
}

.card-outmore {
 padding: 10px 25px 10px 25px;
 border-radius: 0px 0px 4px 4px;
 border-top: 1px solid #e0e0e0;
 background: #efefef;
 color: #222;
 display: inline-table;
 width: 100%;
 box-sizing: border-box;
 transition: 400ms ease;
}
.card-outmore h5 {
 float: left;
}
.card-outmore i {
 float: right;
}

.Dcard-caption span.date {
 font-size: 10px;
}

.card-caption h1 {
 font-size: 28px;
}

.card-caption span.date {
 font-size: 10px;
}

.Dcard-caption h1 {
 font-size: 28px;
}

h5 {
 margin:0;
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
}
.Dcard-caption {
 position: relative;
 background: #fff;
 padding: 15px 25px 15px 25px;
 border-radius: 4px 4px 4px 4px;
}

/******* green card   ********************/



.crd-ctn {
 margin:5px 5px;
}

  
  
   
  </style>