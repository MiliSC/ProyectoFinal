
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

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
export const auth = getAuth(app)
export const db = getFirestore(app)