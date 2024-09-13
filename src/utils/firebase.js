// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB198JX2chjMVCqlvjDPlkaHawcCwoeMIA",
  authDomain: "netflixgpt-d5dbc.firebaseapp.com",
  projectId: "netflixgpt-d5dbc",
  storageBucket: "netflixgpt-d5dbc.appspot.com",
  messagingSenderId: "685622301078",
  appId: "1:685622301078:web:87feeeb1ed2c4a43680db7",
  measurementId: "G-C2FHJRZFH4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();