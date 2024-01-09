// Import the functions you need from the SDKs you need
import firebase, { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Firestore, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpWke5CtUhB_hCvUy80y5pMbfpFr8lXno",
  authDomain: "my-tweeter-f1db8.firebaseapp.com",
  projectId: "my-tweeter-f1db8",
  storageBucket: "my-tweeter-f1db8.appspot.com",
  messagingSenderId: "812260136249",
  appId: "1:812260136249:web:8b874c05892e18d0d7c4e8",
  measurementId: "G-PE7D62DY4S",
};

// Initialize Firebase
let app, analytics, db: Firestore;
// if (!firebase.getApps.length) {
app = initializeApp(firebaseConfig);
// analytics = getAnalytics(app);
db = getFirestore(app);
// }

export default db;
