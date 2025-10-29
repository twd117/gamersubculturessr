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
    console.log("last", this.lastVisible);

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

export default allData = async function(b){

   let games =  await getGameArticles();
   let techs = await getNewsArticles();
   let ent = await getEntertainmentArticles();
   let news = await getSMLCArticles();
  let xsitegames = games.map(name => `/articles/${name["title"]}/${name["id"]}`);
 let xsitetechs = techs.map(name => `/tech/${name["title"]}/${name["id"]}`);
let  xsiteent =ent.map(name => `/entertainment/${name["title"]}/${name["id"]}`);
let  xsitenews = news.map(name => `/smlc/${name["title"]}/${name["id"]}`);

   let rssgames = games.map((name) =>  ({
     title : `${name["title"]}`,
     link : `https://www.gmrnews.com/articles/${name["title"]}/${name["id"]}`,
     pubDate : new Date(name['date']['seconds']*1000) })
   );
   let rsstech = techs.map((name) =>  ({
    title : `${name["title"]}`,
    link : `https://www.gmrnews.com/tech/${name["title"]}/${name["id"]}`,
    pubDate : new Date(name['date']['seconds']*1000) })
  );
  let rssent = ent.map((name) =>  ({
    title : `${name["title"]}`,
    link : `https://www.gmrnews.com/entertainment/${name["title"]}/${name["id"]}`,
    pubDate : new Date(name['date']['seconds']*1000) })
  );
  let rssnews = news.map((name) =>  ({
    title : `${name["title"]}`,
    link : `https://www.gmrnews.com/smlc/${name["title"]}/${name["id"]}`,
    pubDate : new Date(name['date']['seconds']*1000)})
  );

 // console.log(rssnews);

   return b ? [...xsitegames, ...xsitetechs, ...xsiteent, ...xsitenews ,"https://gmrnews.com/stories.html"] : [...rssgames,...rssent,...rssnews,...rsstech];

};
