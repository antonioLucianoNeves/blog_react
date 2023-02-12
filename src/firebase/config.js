
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAfcdN44jyTX0cBKj4FYeyLkMFJlTu8dQY",
  authDomain: "miniblog-d578f.firebaseapp.com",
  projectId: "miniblog-d578f",
  storageBucket: "miniblog-d578f.appspot.com",
  messagingSenderId: "33208425549",
  appId: "1:33208425549:web:8c060c5e41809e5daf5004"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export{db};