import { getAuth } from "firebase/auth";


const firebase = require('firebase/app');
const firestore = require('firebase/firestore');

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

const app = firebase.initializeApp(firebaseConfig);

const db = firestore.initializeFirestore(app, {
    experimentalForceLongPolling: true,
});

const authetication = getAuth(app);

export { db, authetication };

