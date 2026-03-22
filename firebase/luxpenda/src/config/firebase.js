import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDhHIMa2eXwTrSQkJJirT6xxvylap4hxsM",
  authDomain: "luxpenda.firebaseapp.com",
  projectId: "luxpenda",
  storageBucket: "luxpenda.firebasestorage.app",
  messagingSenderId: "460524744682",
  appId: "1:460524744682:web:d0ffbd177a08bbc7694c93",
  measurementId: "G-WWV9VSTNCN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Google provider instance
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);

// firebase login
// firebase init
// firebase deploy