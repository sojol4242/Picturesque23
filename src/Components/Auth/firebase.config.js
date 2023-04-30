
import "firebase/auth";
import firebase from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyB4j80wqK42KdVJM4Pv0cDNeKZOhBDJf04",
  authDomain: "picturesque-cad49.firebaseapp.com",
  projectId: "picturesque-cad49",
  storageBucket: "picturesque-cad49.appspot.com",
  messagingSenderId: "458968508677",
  appId: "1:458968508677:web:aabb8ba9d06007cde06f6c",
  measurementId: "G-XEKYWJDK6L"
};
//   if (!firebase.apps.length) {
//     firebase.initializeApp(firebaseConfig);
//  } 
  
//  const auth=firebase.auth();
 const googleProvider=new firebase.auth.GoogleAuthProvider();
//  // const githubProvider =  new firebase.auth.GithubAuthProvider();
 
 export { firebaseConfig,googleProvider};