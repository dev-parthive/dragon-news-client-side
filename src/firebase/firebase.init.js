// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHXkXWSQAwpOQZypZEA9N7T6DKT1E0vvU",
  authDomain: "dragon-news-ae0a8.firebaseapp.com",
  projectId: "dragon-news-ae0a8",
  storageBucket: "dragon-news-ae0a8.appspot.com",
  messagingSenderId: "104963665732",
  appId: "1:104963665732:web:ed2019dde6c533aa5a7111"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;