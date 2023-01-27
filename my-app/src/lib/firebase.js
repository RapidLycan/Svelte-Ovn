// Impoort the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtkRuscbsdtPJjIDE83QHKiKcv9VTHTRs",
  authDomain: "firestart-2e46f.firebaseapp.com",
  databaseURL:
    "https://firestart-2e46f-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "firestart-2e46f",
  storageBucket: "firestart-2e46f.appspot.com",
  messagingSenderId: "234889757195",
  appId: "1:234889757195:web:9fc826020a0252133a7d0e",
  measurementId: "G-125J5189BW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
