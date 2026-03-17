import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBmdCTEepJteGj_f3YYukYMjx309725jfg",
  authDomain: "fir-course-c23fd.firebaseapp.com",
  projectId: "fir-course-c23fd",
  storageBucket: "fir-course-c23fd.firebasestorage.app",
  messagingSenderId: "97490334580",
  appId: "1:97490334580:web:2f7de550c174d831d03221",
  measurementId: "G-EQ03FGQ6T1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Google provider instance
export const googleProvider = new GoogleAuthProvider();

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);