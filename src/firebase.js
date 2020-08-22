import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "Put your own ones",
    authDomain: "Put your own one",
    databaseURL: "Put your own one",
    projectId: "Put your own one",
    storageBucket: "Put your own one",
    messagingSenderId: "Put your own one",
    appId: "Put your own one",
    measurementId: "Put your own one"
});

const auth = firebase.auth();

export { auth };