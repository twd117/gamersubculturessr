import { defineComponent } from 'vue';
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

const getNewsArticles = async function(){
  const data = [];
   const q = query(collection(db, "news"), orderBy("date",'desc'));
   await getDocs(q).then((querySnapshot) => {
   //  console.log("last", this.lastVisible);

     querySnapshot.forEach((doc) => {
      data.push({
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
    //   console.log(" title => ", doc.data().title);

     });
   });
   return data;
};
const getEntertainmentArticles =  async function(){
     const data=[];
     const q = query(collection(db, "entertainment"), orderBy("date",'desc'));
     await getDocs(q).then((querySnapshot) => {

       querySnapshot.forEach((doc) => {
         data.push({
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
     return data;

 };
 const getSMLCArticles = async function(){
 const data=[];
  const q = query(collection(db, "smlc"), orderBy("date",'desc'));
  await getDocs(q).then((querySnapshot) => {

    querySnapshot.forEach((doc) => {
      data.push({
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
  return data;

};

const  getGameArticles = async function()  {
  const data = [];
   const q = query(collection(db, "articles"), orderBy("_createdAt",'desc'));
   await getDocs(q).then((querySnapshot) => {
   //  console.log("last", this.lastVisible);

     querySnapshot.forEach((doc) => {
       data.push({
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
   return data;
}

export default allData = async function(){
  
   let games =  await getGameArticles();
   let techs = await getNewsArticles();
   let ent = await getEntertainmentArticles();
   let news = await getSMLCArticles();
   games = games.map(name => `/articles/${name["title"]}/${name["id"]}`);
   techs = techs.map(name => `/tech/${name["title"]}/${name["id"]}`);
   ent =ent.map(name => `/entertainment/${name["title"]}/${name["id"]}`);
   news = news.map(name => `/smlc/${name["title"]}/${name["id"]}`);

   return [...games, ...techs, ...ent, ...news];

};