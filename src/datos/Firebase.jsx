// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC2c4gSW8JHmDTOqbSut7Q-oOpr9i1A0bg",
    authDomain: "bendita-barrica.firebaseapp.com",
    projectId: "bendita-barrica",
    storageBucket: "bendita-barrica.appspot.com",
    messagingSenderId: "184735023661",
    appId: "1:184735023661:web:5839aa6c0a6ac5183f2ea4"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const BaseVinos = getFirestore(app)

export default BaseVinos