import { defineStore } from 'pinia'


export const useNavStore = defineStore('navStore', {
  state: () => ({
    isGame: true,
        isEntertainment: false,
        isNews:false,
        isScifi:false

  }),
  actions:{
     setIsEntertainment(b){
      this.isEntertainment=b;
      this.isGame=false;
      this.isNews=false;
      this.isScifi=false;



     },
     setIsGame(b){
      this.isGame=b;
      this.isNews=false;
      this.isEntertainment=false;
      this.isScifi=false;



     },
     setIsNews(b){
      this.isNews=b;
      this.isGame=false;;
      this.isEntertainment=false;
      this.isScifi=false;



     },
    setIsScifi(b){
      this.isNews=false;
      this.isGame=false;;
      this.isEntertainment=false;
      this.isScifi=b;
    }
  }
    // other options...
  });