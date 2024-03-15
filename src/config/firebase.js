// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, snapshotEqual} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIu1T6r1KFDMU6utED0Ju9ldbW2iYYrvU",
  authDomain: "react-vite-contact.firebaseapp.com",
  projectId: "react-vite-contact",
  storageBucket: "react-vite-contact.appspot.com",
  messagingSenderId: "1083806006999",
  appId: "1:1083806006999:web:3233558b9a2ea59bf13a92"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


