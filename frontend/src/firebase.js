// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Replace this config with your own from Firebase console
const firebaseConfig = {
  apiKey: "AIzaSyA64KKXti8gopPRdohyAxBDILAYG1GM-VA",
  authDomain: "resume-visitor-counter.firebaseapp.com",
  projectId: "resume-visitor-counter",
  storageBucket: "resume-visitor-counter.firebasestorage.app",
  messagingSenderId: "493857146342",
  appId: "1:493857146342:web:ae746df2e4fb2ed4ff0227",
  measurementId: "G-0SFSQCJCPF"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
