import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBrw_o3pd8K6jIpGvCOuSbJ7z0VtubAdLE",
  authDomain: "betahouse-9dcef.firebaseapp.com",
  projectId: "betahouse-9dcef",
  storageBucket: "betahouse-9dcef.firebasestorage.app",
  messagingSenderId: "5325907148",
  appId: "1:5325907148:web:3ddb314bd2a60685528e69",
  measurementId: "G-5S0PJNZEYF",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };
