// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA128mehih8VVvmaYbmkm66dclRU1Oyhg8",
  authDomain: "react-59962.firebaseapp.com",
  projectId: "react-59962",
  storageBucket: "react-59962.appspot.com",
  messagingSenderId: "463548478876",
  appId: "1:463548478876:web:abfb5e66e38855d0448459",
  measurementId: "G-0SYCLY735G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const provider = new GoogleAuthProvider();
export const auth = getAuth(app);


