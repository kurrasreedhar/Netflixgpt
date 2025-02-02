// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRXDylhok_cATTp-0xktR-TPDNP0pCxmk",
  authDomain: "pnetflix-1ab81.firebaseapp.com",
  projectId: "pnetflix-1ab81",
  storageBucket: "pnetflix-1ab81.firebasestorage.app",
  messagingSenderId: "1067894801323",
  appId: "1:1067894801323:web:b6d783b93005485b38c8ee",
  measurementId: "G-KSMLY6MVC6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();