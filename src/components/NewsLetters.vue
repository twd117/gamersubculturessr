<template>

<div class="news-letter" id="News-letter">
    <div class="nnews ">
      <div class="ncontainer">
        <h2 class="news-heading">{{msg}}</h2>
        <p class="des how-de">Get the latest gaming news, reviews, entertainment, and deals sent to your inbox. </p>

        <form v-if="!disable" action="">
          <input class="input" type="email" v-model="email"  maxlength="50" required placeholder="Enter your email address">
          <button id="nfbtn" @click="send">Sign up</button>


        </form>
      </div>
    </div>

  </div>
</template>

<script>
import {useDataStore} from "../store/useDataStore.js"

export default {
    setup(){
        const dataStore = useDataStore()

    return { dataStore }
    },
    name:"NewsLetters",
    data() {
    return {
      email: "",
      msg:"Gmrnews newsletters",
      disable:false
    };
},
    methods:{
       async send(e){
            e.preventDefault();
           await this.dataStore.setNewLetterEmail(this.email).then(()=> {
               this.msg="Registration successful"
               this.disable=true;
           });
            console.log("--email--",this.email);
        }
    }
}

</script>

<style scoped>
.news-letter{
    margin-top: 16px;
    margin-bottom: 16px;
}

.ncontainer > form {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
}
.ncontainer{
  display:flex;
  flex-direction:column;
  align-items: center;
  margin:16px;
}
.input{
  transition: all 0.3s ease-in-out;
    background: none;
    box-shadow: none;
    height: 50px;
    padding: 5px 15px;
    box-shadow: none;
    border-color: #d8d8d8;
    border-radius: 0.25rem;
      width: 50%;
    margin-bottom: 9px;
    border: 1px solid #bfbfbf;
    background-color: #fff;
    font-size: 18px;
  color: #333;
  font-family: Roboto, sans-serif;
}
.nnews{
      border: 1px solid #dee2e6;
    padding: 20px;
    text-align: center;
    background-color: #f8f9fa;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
.news-heading{

  font-size: 31px;
  line-height: 1.4;
  color: #333;
  font-family: "Roboto", serif;
    font-weight: 700;

}
.nnews p{
  text-align:center;
  font-size: 18px;
  margin-bottom: 16px;
  margin-top: 1px;
  line-height: 1.8;
  font-family: "Roboto", serif;
   font-weight: 400;


}


#nfbtn {
  font-family: 'Roboto', sans-serif;
    height: 2.6rem;
    font-weight: bolder;
  width:50%;
  border:none;
  display: inline-block;
    font-size: 16px;
    line-height: 20.8px;
    cursor: pointer;
    outline: 0;
    margin-bottom: 0;
    padding: 4px 15px;
    text-align: center;
    vertical-align: middle;
    position: relative;
    background-size: auto 100%;
    border-radius: 4px;
    transition: all 0.25s;
    background-color: #007bff;
  color:white;
}

@media (max-width: 650px) {

  .input{
  transition: all 0.3s ease-in-out;
    background: none;
    box-shadow: none;
    height: 50px;
    padding: 5px 15px;
    box-shadow: none;
    border-color: #d8d8d8;
    border-radius: 0.25rem;
      width: 70%;
    margin-bottom: 9px;

    border: 1px solid #bfbfbf;
    background-color: #fff;
    font-size: 14px;
  color: #333;
  font-family: Roboto, sans-serif;
}

}
</style>
