// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwQbAltlPHlF4Tp8xZMfF1Is47OK57Jfs",
  authDomain: "bingeflix-gpt.firebaseapp.com",
  projectId: "bingeflix-gpt",
  storageBucket: "bingeflix-gpt.appspot.com",
  messagingSenderId: "1014702936314",
  appId: "1:1014702936314:web:2be011b2f72a19f0c63943",
  measurementId: "G-6KR30NTFCY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth =  getAuth();