import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyARtmOaLK1NWn3o5OmC7DI2skxpSo2dYzc",
    authDomain: "clone-aea50.firebaseapp.com",
    databaseURL: "https://clone-aea50.firebaseio.com",
    projectId: "clone-aea50",
    storageBucket: "clone-aea50.appspot.com",
    messagingSenderId: "177925197327",
    appId: "1:177925197327:web:b8bc37d2ddbac6f5bd9d7a",
    measurementId: "G-NGLXC30S9M"
});

const auth = firebase.auth();

export { auth };