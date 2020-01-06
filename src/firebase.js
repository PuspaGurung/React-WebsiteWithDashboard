import firebase from "firebase";
import "firebase/app";
import "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDolqGUsLM1CD6DBSAvQqoov3gAgBOMd-s",
  authDomain: "m-city-cb4c3.firebaseapp.com",
  databaseURL: "https://m-city-cb4c3.firebaseio.com",
  projectId: "m-city-cb4c3",
  storageBucket: "m-city-cb4c3.appspot.com",
  messagingSenderId: "784762051888",
  appId: "1:784762051888:web:17d1bed538f76649f03cf5",
  measurementId: "G-KMJSZ5FCXM"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref("matches");
const firebasePromotions = firebaseDB.ref("promotions");

export { firebase, firebaseMatches, firebasePromotions };
