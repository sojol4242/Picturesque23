import firebase from "firebase/app";

import "firebase/database"
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAqrSQQBlYopEnHxlTzTy_w50gI98UWKMc",
  authDomain: "tracepoint-a2ae7.firebaseapp.com",
  projectId: "tracepoint-a2ae7",
  storageBucket: "tracepoint-a2ae7.appspot.com",
  messagingSenderId: "63241441004",
  appId: "1:63241441004:web:d2a9af4ffe0c0bca7e1fc9",
  measurementId: "G-RHXLKNW3V2"
};
const app=null;
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}
const db= firebase.database()
 const googleProvider=new firebase.auth.GoogleAuthProvider();
 export { app,googleProvider,db};
