// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_API_KEY,
//   authDomain: import.meta.env.VITE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_APP_ID,
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// export { auth };

// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Replace this configuration with your Firebase project credentials
const firebaseConfig = {
  apiKey: "AIzaSyBIvLnf1q-91Yt91nPvL0BbCxyLn72EzKo",
  authDomain: "cohandler-e3152.firebaseapp.com",
  projectId: "cohandler-e3152",
  storageBucket: "cohandler-e3152.firebasestorage.app",
  messagingSenderId: "723273148875",
  appId: "1:723273148875:web:00150a7b1119751275ee4e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
export const auth = getAuth(app);
export const db = getFirestore(app);
