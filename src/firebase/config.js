// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-S5MqXIavPVd_ygw6ArbjIbag_jyXexg",
  authDomain: "react-cursos-c08ec.firebaseapp.com",
  projectId: "react-cursos-c08ec",
  storageBucket: "react-cursos-c08ec.appspot.com",
  messagingSenderId: "431361498176",
  appId: "1:431361498176:web:bde101220208f00d1613a5"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth( FirebaseApp );

export const FirebaseDB = getFirestore( FirebaseApp );

