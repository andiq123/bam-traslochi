// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIHS8nFs898f4s_fLujM_z7NdfUtFiZXI",
  authDomain: "statistics-bam.firebaseapp.com",
  projectId: "statistics-bam",
  storageBucket: "statistics-bam.appspot.com",
  messagingSenderId: "144607959046",
  appId: "1:144607959046:web:8074fe8b53db366d7a8b87",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore();
