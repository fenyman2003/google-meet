import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // your firebase config
  apiKey: "AIzaSyCKmUlryNjNzlrO3VNwkLkrsQ7CKeGu4iQ",
  authDomain: "video-call-2013f.firebaseapp.com",
  projectId: "video-call-2013f",
  storageBucket: "video-call-2013f.appspot.com",
  messagingSenderId: "387039970701",
  appId: "1:387039970701:web:04aee94013a2d49df0a9c4",
  measurementId: "G-3Y7PLVSZD9"
};

const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const auth = getAuth(app);

export { auth, firestore };
