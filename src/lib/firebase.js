// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3VQ8mQEMprQOU_j_yat9ttL4ND7cTv1I",
  authDomain: "discipline-76bd7.firebaseapp.com",
  projectId: "discipline-76bd7",
  storageBucket: "discipline-76bd7.firebasestorage.app",
  messagingSenderId: "782183311709",
  appId: "1:782183311709:web:09531434fbc0041f0560b4",
  measurementId: "G-WQ38E4DW08"
};
// Initialize Firebase
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

// Initialize Analytics conditionally (Client-side only)
let analytics;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) analytics = getAnalytics(app);
  });
}

export { app, db, analytics, auth, storage };

