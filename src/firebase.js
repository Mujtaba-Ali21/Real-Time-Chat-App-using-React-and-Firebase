import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAw29baF8tyrP_uzqVAGkt8kuU0ee3DyZ8",
    authDomain: "awesomechattter.firebaseapp.com",
    projectId: "awesomechattter",
    storageBucket: "awesomechattter.appspot.com",
    messagingSenderId: "1098309393303",
    appId: "1:1098309393303:web:10b155a03ef425fddd82d2"
  };

 
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)