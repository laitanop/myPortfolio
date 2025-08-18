import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const apiKey = window.env.API_KEY_FIREBASE;
const appId = window.env.APP_ID_FIREBASE;
const messagingSenderId = window.env.MESSAGING_SENDER_ID_FIREBASE;
const measurementId = window.env.MEASUREMENT_ID_FIREBASE;

export const firebaseConfig = {
  apiKey,
  authDomain: "a-blog-template.firebaseapp.com",
  projectId: "a-blog-template",
  storageBucket: "a-blog-template.firebasestorage.app",
  messagingSenderId,
  appId,
  measurementId,
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
