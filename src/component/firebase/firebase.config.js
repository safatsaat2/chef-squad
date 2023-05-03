// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9o3jD0tHlugBWsO9pU9dK7wENaldauvM",
  authDomain: "chef-squad.firebaseapp.com",
  projectId: "chef-squad",
  storageBucket: "chef-squad.appspot.com",
  messagingSenderId: "155813482336",
  appId: "1:155813482336:web:ea3018c0d32f1585c39805"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;