// // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const apiKey = window.env.VITE_API_KEY_FIREBASE;
const appId = window.env.VITE_APP_ID_FIREBASE;
const messagingSenderId = window.env.VITE_MESSAGING_SENDER_ID_FIREBASE;
const measurementId = window.env.VITE_MEASUREMENT_ID_FIREBASE;

export const firebaseConfig = {
  apiKey: "AIzaSyC35-oqxDmdnJ1TgKiEOrKKhFmRZUTXCI0",
  authDomain: "a-blog-template.firebaseapp.com",
  projectId: "a-blog-template",
  storageBucket: "a-blog-template.firebasestorage.app",
  messagingSenderId: "324897912018",
  appId: "1:324897912018:web:4640a9d450361f6287690b",
  measurementId: "G-YGBVEG74EN",
};

// // Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
