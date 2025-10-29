// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4p4PZKJ34Y1_1kt1T-T1XByt4iIoNJhg",
  authDomain: "blog-31210.firebaseapp.com",
  databaseURL: "https://blog-31210-default-rtdb.firebaseio.com",
  projectId: "blog-31210",
  storageBucket: "blog-31210.appspot.com",
  messagingSenderId: "920758206433",
  appId: "1:920758206433:web:d222dd17009fdb64bedca0",
  measurementId: "G-LRTLQTHGLL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db =  getFirestore();

if (typeof window !== 'undefined') {

 getAnalytics(app);


}



export default db;
