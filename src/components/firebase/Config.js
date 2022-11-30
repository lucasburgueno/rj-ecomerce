// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; 
import {getFirestore } from "firebase/firestore"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCssK7xAi6R3SNCsIqHRk9EvKwc0eDQTB8",
  authDomain: "rj-ecomerce.firebaseapp.com",
  projectId: "rj-ecomerce",
  storageBucket: "rj-ecomerce.appspot.com",
  messagingSenderId: "968985806238",
  appId: "1:968985806238:web:685d11fd9fe84d7490028f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)