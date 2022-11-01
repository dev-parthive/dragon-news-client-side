// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apikey,
  authDomain: process.env.REACT_APP_apikey,
  projectId: process.env.REACT_APP_apikey,
  storageBucket: process.env.REACT_APP_apikey,
  messagingSende:process.env.REACT_APP_apikey,
  appId: process.env.REACT_APP_apikey,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;