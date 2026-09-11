// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  VITE_apiKey: import.meta.env.VITE_apiKey,
  VITE_authDomain: import.meta.env.VITE_authDomain,
  VITE_projectId: import.meta.env.VITE_projectId,
  VITE_storageBucket: import.meta.env.VITE_storageBucket,
  VITE_messagingSenderId: import.meta.env.VITE_messagingSenderId,
  VITE_appId: import.meta.env.VITE_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);