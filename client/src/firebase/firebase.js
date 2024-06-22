// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import { get } from "mongoose";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoGnD00VhjjklwVLSMMcQznyiV7Kw5bpw",
  authDomain: "sixth-loader-404406.firebaseapp.com",
  projectId: "sixth-loader-404406",
  storageBucket: "sixth-loader-404406.appspot.com",
  messagingSenderId: "892868021322",
  appId: "1:892868021322:web:29cd66b29ceaadd5b12ab3",
  measurementId: "G-RD8RRR4S9N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider=new GoogleAuthProvider();
export {auth,provider}