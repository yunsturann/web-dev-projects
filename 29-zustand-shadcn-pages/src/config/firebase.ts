// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "zustand-14e26.firebaseapp.com",
  projectId: "zustand-14e26",
  storageBucket: "zustand-14e26.appspot.com",
  messagingSenderId: "879852567800",
  appId: "1:879852567800:web:9ac9732220d2e3bb210f0d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the necessary Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
