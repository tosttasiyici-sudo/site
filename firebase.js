// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC0qPP5aEKAudlBg69e5J1oXhNbQ1Ymwts",
  authDomain: "site-d2204.firebaseapp.com",
  projectId: "site-d2204",
  storageBucket: "site-d2204.firebasestorage.app",
  messagingSenderId: "99929019397",
  appId: "1:99929019397:web:6f378fcf2480090e0df86c",
  measurementId: "G-22CC6J4Q1H"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
