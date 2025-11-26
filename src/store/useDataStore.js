import { defineStore } from 'pinia'

import db from "../dbclient/dbclient.js";

import {
    collection,
    query,
    getDocs,
    orderBy,
    limit,
    startAfter,
    addDoc,
    where
  } from "firebase/firestore";

export const useDataStore = defineStore('data',{

     state : () => ({
          data:[],
          lastVisible: null,
          sidebarData: [],

     }),
     actions : {
        async getGameArticles(state){
            this.data = [];
             const q = query(collection(db, "articles"), orderBy("_createdAt",'desc'),limit(30));
             await getDocs(q).then((querySnapshot) => {
               this.lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
             //  console.log("last", this.lastVisible);
               
               querySnapshot.forEach((doc) => {
                 this.data.push({
                   id: doc.id,
                   title: doc.data().title,
                   img: doc.data().img,
                   sub: doc.data().subtitle,
                   story: doc.data().story,
                   dev: doc.data().dev,
                   analyse: doc.data().analyse,
                   video: doc.data().video,
                   patform: doc.data().platform,
                   rating: doc.data().rating,
                   tag: doc.data().tag,
                   date: doc.data()._createdAt,
                   imgurl: doc.data().imgurl
                 });
              //   console.log(" title => ", doc.data().title);
 
               });
             });
         },
         async getNewsArticles(state){
          this.data = [];
           const q = query(collection(db, "news"), orderBy("date",'desc'),limit(30));
           await getDocs(q).then((querySnapshot) => {
             this.lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
           //  console.log("last", this.lastVisible);ss
     
             querySnapshot.forEach((doc) => {
               this.data.push({
                 id: doc.id,
                 title: doc.data().title,
                 img: doc.data().img,
                 sub: doc.data().subtitle,
                 story: doc.data().story,
                 video: doc.data().video,
               
                 tag: doc.data().tag,
                 date: doc.data().date,
                 imgurl: doc.data().imgurl
               });
           //    console.log(" title => ", doc.data().title);

             });
           });
       },
        async getEntertainmentArticles(state){
             this.data=[];
             const q = query(collection(db, "entertainment"), orderBy("date",'desc'),limit(30));
             await getDocs(q).then((querySnapshot) => {
               this.lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
       
               querySnapshot.forEach((doc) => {
                 this.data.push({
                   id: doc.id,
                   title: doc.data().title,
                   img: doc.data().img,
                   sub: doc.data().subtitle,
                   
                   analyse: doc.data().analyse,
                   video: doc.data().video,
                  
                   tag: doc.data().tag,
                   date: doc.data().date,
                   imgurl: doc.data().imgurl,
                   rating:doc.data().rating
       
                 });
            //     console.log(" title => ", doc.data().title);
       
               });
       
             });

         },
         async getSMLCArticles(state){
          this.data=[];
          const q = query(collection(db, "smlc"), orderBy("date",'desc'),limit(30));
          await getDocs(q).then((querySnapshot) => {
            this.lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
    
            querySnapshot.forEach((doc) => {
              this.data.push({
                id: doc.id,
                title: doc.data().title,
                img: doc.data().img,
                sub: doc.data().subtitle,
                
                analyse: doc.data().analyse,
                video: doc.data().video,
               
                tag: doc.data().tag,
                date: doc.data().date,
                imgurl: doc.data().imgurl,
    
              });
         //     console.log(" title => ", doc.data().title);
    
            });
    
          });

      },

     
         async getNextGamesArticles() {
            //  Construct a new query starting at this document,
            // get the next 25 cities.
         if(this.lastVisible !== undefined){
                 const next = query(
              collection(db, "articles"),
              orderBy("_createdAt",'desc'),
              startAfter(this.lastVisible),
              limit(10)
            );
             await getDocs(next).then((querySnapshot) => {
              this.lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
              //   console.log("last", this.lastVisible);
      
              querySnapshot.forEach((doc) => {
                this.data.push({
                  id: doc.id,
                  title: doc.data().title,
                  img: doc.data().img,
                  sub: doc.data().subtitle,
                  story: doc.data().story,
                  dev: doc.data().dev,
                  analyse: doc.data().analyse,
                  video: doc.data().video,
                  patform: doc.data().platform,
                  rating: doc.data().rating,
                  tag: doc.data().tag,
                  date: doc.data()._createdAt,
                  imgurl: doc.data().imgurl
      
                });
             //   console.log(doc.id, " => ", doc.data().imgurl);
      
              });
            });
         }
         
          },
         
          async getNextSMLCArticles() {
            //  Construct a new query starting at this document,
            // get the next 25 cities.
         if(this.lastVisible !== undefined){
                 const next = query(
              collection(db, "smlc"),
              orderBy("date",'desc'),
              startAfter(this.lastVisible),
              limit(10)
            );
             await getDocs(next).then((querySnapshot) => {
              this.lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
              //   console.log("last", this.lastVisible);
      
              querySnapshot.forEach((doc) => {
                this.data.push({
                  id: doc.id,
                  title: doc.data().title,
                  img: doc.data().img,
                  sub: doc.data().subtitle,
                 
                  analyse: doc.data().analyse,
                  video: doc.data().video,
                 
                  tag: doc.data().tag,
                  date: doc.data().date,
                  imgurl: doc.data().imgurl,
      
                });
             //   console.log(doc.id, " => ", doc.data().imgurl);
      
              });
            });
         }
         
          },

          async getNextEntertainmentArticles() {
            //  Construct a new query starting at this document,
            // get the next 25 cities.
         if(this.lastVisible !== undefined){
                 const next = query(
              collection(db, "entertainment"),
              orderBy("date",'desc'),
              startAfter(this.lastVisible),
              limit(10)
            );
             await getDocs(next).then((querySnapshot) => {
              this.lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
      
              querySnapshot.forEach((doc) => {
                this.data.push({
                  id: doc.id,
                  title: doc.data().title,
                  img: doc.data().img,
                  sub: doc.data().subtitle,
                 
                  analyse: doc.data().analyse,
                  video: doc.data().video,
                 
                  tag: doc.data().tag,
                  date: doc.data().date,
                  imgurl: doc.data().imgurl,
                  rating:doc.data().rating
      
                });
          //      console.log(doc.id, " => ", doc.data().imgurl);
      
              });
            });
         }
         
          },
          async getNextNewsArticles() {
            //  Construct a new query starting at this document,
            // get the next 25 cities.
         if(this.lastVisible !== undefined){
                 const next = query(
              collection(db, "news"),
              orderBy("date",'desc'),
              startAfter(this.lastVisible),
              limit(10)
            );
             await getDocs(next).then((querySnapshot) => {
              this.lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
      
              querySnapshot.forEach((doc) => {
                this.data.push({
                  id: doc.id,
                  title: doc.data().title,
                  img: doc.data().img,
                  sub: doc.data().subtitle,
                 
                  analyse: doc.data().story,
                  video: doc.data().video,
                 
                  tag: doc.data().tag,
                  date: doc.data().date,
                  imgurl: doc.data().imgurl
      
                });
              //  console.log(doc.id, " => ", doc.data().imgurl);
      
              });
            });
         }
         
          },


         
         
    async getSidebarDataGames(){
            this.sidebarData = [];
      //  console.log("entertainment-----------------------------");
     
     const q = query(collection(db, "articles"), orderBy("_createdAt",'desc'),limit(5));
     await getDocs(q).then((querySnapshot) => {
      //console.log("entertainment-------------------------fetch----",querySnapshot.docs.length);
     
       querySnapshot.forEach((doc) => {
         this.sidebarData.push({
           id: doc.id,
           title: doc.data().title,
           img: doc.data().img,
           sub: doc.data().subtitle,
           story: doc.data().story,
           analyse: doc.data().analyse,
           video: doc.data().video,
     
           tag: doc.data().tag,
           date: doc.data()._createdAt,
           imgurl: doc.data().imgurl
         });
       //   console.log(doc.id, "-------------entertainment");
       });
      
     }).catch(function(err) {
       //console.log(err, "-------------error");
     
     });
     
         },
   async getSidebarDataEnter(){
            this.sidebarData = [];
      //  console.log("entertainment-----------------------------");
     
     const q = query(collection(db, "entertainment"), orderBy("date",'desc'),limit(5));
     await getDocs(q).then((querySnapshot) => {
     //  console.log("doc----", querySnapshot);
     //console.log("entertainment-------------------------fetch----",querySnapshot.docs.length);
     
       querySnapshot.forEach((doc) => {
         this.sidebarData.push({
           id: doc.id,
           title: doc.data().title,
           img: doc.data().img,
           sub: doc.data().subtitle,
           story: doc.data().story,
           analyse: doc.data().analyse,
           video: doc.data().video,
     
           tag: doc.data().tag,
           date: doc.data().date,
           imgurl: doc.data().imgurl,
           rating:doc.data().rating

         });
       //   console.log(doc.id, "-------------entertainment");
       });
      
     }).catch(function(err) {
       //console.log(err, "-------------error");
     
     });
     
         },


         async getSidebarDataTechNews(){
          this.sidebarData = [];
    //  console.log("entertainment-----------------------------");
   
   const q = query(collection(db, "news"), orderBy("date",'desc'),limit(5));
   await getDocs(q).then((querySnapshot) => {
   //  console.log("doc----", querySnapshot);
   //console.log("entertainment-------------------------fetch----",querySnapshot.docs.length);
   
     querySnapshot.forEach((doc) => {
       this.sidebarData.push({
         id: doc.id,
         title: doc.data().title,
         img: doc.data().img,
         sub: doc.data().subtitle,
         story: doc.data().story,
          video: doc.data().video,
   
         tag: doc.data().tag,
         date: doc.data().date,
         imgurl: doc.data().imgurl,
         rating:doc.data().rating

       });
     //   console.log(doc.id, "-------------entertainment");
     });
    
   }).catch(function(err) {
     //console.log(err, "-------------error");
   
   });
   
       },

 
       async getSidebarDataOthers(){
        this.sidebarData = [];
  //  console.log("entertainment-----------------------------");
 
 const q = query(collection(db, "smlc"), orderBy("date",'desc'),limit(5));
 await getDocs(q).then((querySnapshot) => {
 //  console.log("doc----", querySnapshot);
 //console.log("entertainment-------------------------fetch----",querySnapshot.docs.length);
 
   querySnapshot.forEach((doc) => {
     this.sidebarData.push({
       id: doc.id,
       title: doc.data().title,
       img: doc.data().img,
       sub: doc.data().subtitle,
       story: doc.data().analyse,
        video: doc.data().video,
 
       tag: doc.data().tag,
       date: doc.data().date,
       imgurl: doc.data().imgurl,
       rating:doc.data().rating

     });
   //   console.log(doc.id, "-------------entertainment");
   });
 //  console.log(this.sidebarData, "-------------entertainment");
 
 }).catch(function(err) {
   //console.log(err, "-------------error");
 
 });
 
     },


         async getDeals(id){
          this.data=[];

          console.log(id);
          const q = query(
            collection(db, "Deals"),
            where("dealsid", "==", id)
          );
          await getDocs(q).then((querySnapshot) => {
 
            querySnapshot.forEach((doc) => {
              this.data.push({
                id: doc.id,
                name: doc.data().name,
                code: doc.data().code,
                discountedPrice: doc.data().discountedPrice,
                originalPrice: doc.data().originalPrice,
                image: doc.data().image,
                savePercent: doc.data().savePercent,
                link:doc.data().link,
                store: doc.data().store,
                
    
              });
         //     console.log(" title => ", doc.data().title);
    
            });
 
          });

      },






      async getDealsVerticalBanner(  ){
        this.data=[];

         const q = query(
          collection(db, "Deals"),
          where("dealsid", "==", "0")
        );
        await getDocs(q).then((querySnapshot) => {
           querySnapshot.forEach((doc) => {
             this.data.push({
              id: doc.id,
               
              image: doc.data().image,
               link:doc.data().link, 
  
            });
   
          });
         });

          
 
    },
         
         async setNewLetterEmail(email){
    //  console.log("entertainment-----------------------------");
   // Add a new document with a generated id.
   const q = query(collection(db, "newsletters"), where("email", "==", email));

const querySnapshot = await getDocs(q);
//console.log("test----", " => ", querySnapshot.size);
if(querySnapshot.size === 0){

const docRef = await addDoc(collection(db, "newsletters"), {
  email: email,
});
}


   
   //  console.log(this.sidebarData, "-------------entertainment");
   
   
       },
           
     },

});
