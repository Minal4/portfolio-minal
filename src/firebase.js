// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAn76-GtSxDlKkyM3jHQ3bUdSq2pBW6N1M",
    authDomain: "testing-d2c03.firebaseapp.com",
    projectId: "testing-d2c03",
    storageBucket: "testing-d2c03.appspot.com",
    messagingSenderId: "754067619934",
    appId: "1:754067619934:web:04463181e98ca0fb96f4cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;