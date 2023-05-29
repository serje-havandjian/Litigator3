// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYHNSniTUNCYcDDh8DVogn7eatNCXogC0",
  authDomain: "copilot1-d51ab.firebaseapp.com",
  projectId: "copilot1-d51ab",
  storageBucket: "copilot1-d51ab.appspot.com",
  messagingSenderId: "1026020489126",
  appId: "1:1026020489126:web:c3b3482824f73ba9f08167",
  measurementId: "G-G7M2X75T0S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const storage = getStorage(app)
const analytics = getAnalytics(app);