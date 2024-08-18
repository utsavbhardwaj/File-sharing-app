// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQjigT7dr1i6M5O2W9D7SGNPRPpXLvdUc",
  authDomain: "fileweb-8bf55.firebaseapp.com",
  projectId: "fileweb-8bf55",
  storageBucket: "fileweb-8bf55.appspot.com",
  messagingSenderId: "279105519072",
  appId: "1:279105519072:web:1a073b2105e4a4ed9aff85",
  measurementId: "G-JYVQ96JM0D"
};

// Initi  alize Firebase
const app = initializeApp(firebaseConfig);
export default app;