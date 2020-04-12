import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBSV5GNotEMJzqpmWYLie0kJbhBM8wiThk",
    authDomain: "react-clothing-db-1601c.firebaseapp.com",
    databaseURL: "https://react-clothing-db-1601c.firebaseio.com",
    projectId: "react-clothing-db-1601c",
    storageBucket: "react-clothing-db-1601c.appspot.com",
    messagingSenderId: "158883474073",
    appId: "1:158883474073:web:f897e381c19d8c5a5f6608",
    measurementId: "G-6P94FTM2QY"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;