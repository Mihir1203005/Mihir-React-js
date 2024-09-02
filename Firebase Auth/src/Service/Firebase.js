// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAtXZkotFt5oc8DpSNdZxiOeiG04YzFU4",
  authDomain: "react-firebase-a1dd5.firebaseapp.com",
  projectId: "react-firebase-a1dd5",
  storageBucket: "react-firebase-a1dd5.appspot.com",
  messagingSenderId: "404817030556",
  appId: "1:404817030556:web:81a5bf8576c33f3dc96c59",
  measurementId: "G-MRC4CGZ883"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
