import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBW_j0azeDm5UeXsh7KmZ-eGdbsUngVRAg",
    authDomain: "react-ecommerce-9e998.firebaseapp.com",
    databaseURL: "https://react-ecommerce-9e998.firebaseio.com",
    projectId: "react-ecommerce-9e998",
    storageBucket: "react-ecommerce-9e998.appspot.com",
    messagingSenderId: "406076468502",
    appId: "1:406076468502:web:7a024334ada19e8b227437",
    measurementId: "G-W2VMQJET0Q"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;