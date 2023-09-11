// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyACwr-GVYKIqxEHAJ0ObxGgtyh_A56KcjM",
  authDomain: "messages-chat-bc911.firebaseapp.com",
  projectId: "messages-chat-bc911",
  storageBucket: "messages-chat-bc911.appspot.com",
  messagingSenderId: "448362233106",
  appId: "1:448362233106:web:3eb1591f139c2b362e07cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);