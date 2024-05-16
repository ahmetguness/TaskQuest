import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBnNwAd9UatCPYvwhd2SZ5z7eNTzVjXzVY",
    authDomain: "taskquest-527b9.firebaseapp.com",
    projectId: "taskquest-527b9",
    storageBucket: "taskquest-527b9.appspot.com",
    messagingSenderId: "256547366937",
    appId: "1:256547366937:web:91b16ec0ad8fd7eff9e288"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
