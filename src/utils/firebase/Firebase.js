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
  apiKey: "AIzaSyBostWoa0Cn51VVKBl7JCB7_nCDT9AdbS8",
  authDomain: "bloodshare-8e808.firebaseapp.com",
  projectId: "bloodshare-8e808",
  storageBucket: "bloodshare-8e808.appspot.com",
  messagingSenderId: "709960832534",
  appId: "1:709960832534:web:ca8afedb0eea2e5df58737",
  measurementId: "G-7K86DB7PMB"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const gitprovider = new GithubAuthProvider();
export const gprovider = new GoogleAuthProvider();

export const auth = getAuth(app);
auth.languageCode = 'it';
