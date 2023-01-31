// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBbBT7j6rxoIeuEPH7JGATCldslh7IS_4I",
    authDomain: "todoreact-2ccac.firebaseapp.com",
    projectId: "todoreact-2ccac",
    storageBucket: "todoreact-2ccac.appspot.com",
    messagingSenderId: "1012630061242",
    appId: "1:1012630061242:web:4001ab329c1c7490be4283"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;