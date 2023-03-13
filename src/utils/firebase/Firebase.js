// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { GoogleAuthProvider } from "firebase/auth";

import { GithubAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTgdrYYnkRxOyZzwfxKrda9iS-LMEnmqo",
  authDomain: "vright-5b11b.firebaseapp.com",
  projectId: "vright-5b11b",
  storageBucket: "vright-5b11b.appspot.com",
  messagingSenderId: "925420280351",
  appId: "1:925420280351:web:f29338ef7705820b70932a",
  measurementId: "G-1FGV4JSCL1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const gitprovider = new GithubAuthProvider();
export const gprovider = new GoogleAuthProvider();

export const auth = getAuth(app);
auth.languageCode = 'it';
