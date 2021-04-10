import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

export const app = firebase.initializeApp({
  apiKey: "AIzaSyBp5Bn93vY4PP6T5mWmseCxb_spmXheSdg",
  authDomain: "ubani-potfolio.firebaseapp.com",
  projectId: "ubani-potfolio",
  storageBucket: "ubani-potfolio.appspot.com",
  messagingSenderId: "627177900271",
  appId: "1:627177900271:web:ee230c2ee2eea118eff31a",
});
