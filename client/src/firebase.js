// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "dream-estates-e7f25.firebaseapp.com",
  projectId: "dream-estates-e7f25",
  storageBucket: "dream-estates-e7f25.appspot.com",
  messagingSenderId: "3087810740",
  appId: "1:3087810740:web:dd36b0466bac570bd397e1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);