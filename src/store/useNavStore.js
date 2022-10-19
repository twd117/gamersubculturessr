import { defineStore } from 'pinia'


export const useNavStore = defineStore('navStore', {
  state: () => ({
    isGame: true,
        isEntertainment: false,
        isNews:false,

  }),
  actions:{
     setIsEntertainment(b){
      this.isEntertainment=b;
      this.isGame=false;
      this.isNews=false;


     },
     setIsGame(b){
      this.isGame=b;
      this.isNews=false;
      this.isEntertainment=false;



     },
     setIsNews(b){
      this.isNews=b;
      this.isGame=false;;
      this.isEntertainment=false;



     },
    
  }
    // other options...
  });