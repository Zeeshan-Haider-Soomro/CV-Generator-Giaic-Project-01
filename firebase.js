
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, sendPasswordResetEmail    } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs   } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBGz1G1OYuQsnmsh3tzAFN2kYgY2aclytY",
    authDomain: "giaic-project-01.firebaseapp.com",
    projectId: "giaic-project-01",
    storageBucket: "giaic-project-01.appspot.com",
    messagingSenderId: "710351974532",
    appId: "1:710351974532:web:e8e58583658e866f74d2d1",
    measurementId: "G-2KESQ18SET"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);


export {auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, sendPasswordResetEmail, collection, addDoc, getDocs ,db,  } 