import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "lamadev-chatapp.firebaseapp.com",
  projectId: "lamadev-chatapp",
  storageBucket: "lamadev-chatapp.appspot.com",
  messagingSenderId: "662801723329",
  appId: "1:662801723329:web:c6bc43b73b25546f4dc940",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
