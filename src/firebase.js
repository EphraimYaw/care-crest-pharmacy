// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; // 👈 Add this

const firebaseConfig = {
  apiKey: "AIzaSyDlYXwpQXIl9HOPuZrmYMwR3Z9Kmkotd68",
  authDomain: "care-crest-pharmacy.firebaseapp.com",
  projectId: "care-crest-pharmacy",
  storageBucket: "care-crest-pharmacy.firebasestorage.app",
  messagingSenderId: "656170220323",
  appId: "1:656170220323:web:bf6f573a97c406a0f3aa96",
  measurementId: "G-YZL3FPMB1W"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app); // 👈 Add this

export { db, auth };
