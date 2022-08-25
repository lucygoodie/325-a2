import { initializeApp } from "firebase/app";
import { initializeFirestore } from "firebase/firestore";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getAuth, connectAuthEmulator } from 'firebase/auth'
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    databaseURL: 'https:// swen325-a2-app.firebaseio.com',
    apiKey: "AIzaSyBjoJa_Uq81o0oLSODl3lHuY9NRmtf6vto",
    authDomain: "swen325-a2-app.firebaseapp.com",
    projectId: "swen325-a2-app",
    storageBucket: "swen325-a2-app.appspot.com",
    messagingSenderId: "688047180404",
    appId: "1:688047180404:web:59eed47e00e1ae0ab45f21",
    measurementId: "G-X63B38CLSV"
};

const app = initializeApp(firebaseConfig);

const db = initializeFirestore(app, {
    experimentalForceLongPolling: true,
});

export { db };