// Import Firebase functions
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "-",
  authDomain: "fir-2702350781.firebaseapp.com",
  projectId: "fir-2702350781",
  storageBucket: "fir-2702350781.firebasestorage.app",
  messagingSenderId: "286797129029",
  appId: "1:286797129029:web:1a22f47cb25ac571e78a2c",
  measurementId: "G-YCLXZ9N5N6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Initialize Firestore

export { db };
