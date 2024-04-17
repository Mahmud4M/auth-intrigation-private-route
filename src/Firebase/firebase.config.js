// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3IbkcxohCdLOiCu0ZFreWCnWtg7LX5Js",
  authDomain: "auth-intrigation-private-b764c.firebaseapp.com",
  projectId: "auth-intrigation-private-b764c",
  storageBucket: "auth-intrigation-private-b764c.appspot.com",
  messagingSenderId: "50804625745",
  appId: "1:50804625745:web:41086e136a3cbec6380370"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth; 
