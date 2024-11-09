// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "auth-67192.firebaseapp.com",
  projectId: "auth-67192",
  storageBucket: "auth-67192.firebasestorage.app",
  messagingSenderId: "107249309667",
  appId: "1:107249309667:web:659c131dfd3c8a33d672d6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);