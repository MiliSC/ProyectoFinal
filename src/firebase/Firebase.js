// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2KYu3LJn1xGwZp_DKGRyGQZ4DxRxKCvk",
  authDomain: "proyectofinal-a0c82.firebaseapp.com",
  projectId: "proyectofinal-a0c82",
  storageBucket: "proyectofinal-a0c82.appspot.com",
  messagingSenderId: "275363731316",
  appId: "1:275363731316:web:7699ff4193da5f0df97e21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
export const auth = getAuth(app)

