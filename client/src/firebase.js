// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-cf5f1.firebaseapp.com",
  projectId: "mern-estate-cf5f1",
  storageBucket: "mern-estate-cf5f1.firebasestorage.app",
  messagingSenderId: "686956115553",
  appId: "1:686956115553:web:7b185f1804e9aef6271c20"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);