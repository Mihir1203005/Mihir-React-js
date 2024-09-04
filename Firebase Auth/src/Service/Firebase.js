
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
 import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1eErIX7x4_dVZfY_k60uphJO4ig3U7xc",
  authDomain: "fir-auth-686fa.firebaseapp.com",
  projectId: "fir-auth-686fa",
  storageBucket: "fir-auth-686fa.appspot.com",
  messagingSenderId: "857478022976",
  appId: "1:857478022976:web:0ae48ae2a247a487c99ca5",
  measurementId: "G-D0L3XC6501"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
const analytics = getAnalytics(app);
