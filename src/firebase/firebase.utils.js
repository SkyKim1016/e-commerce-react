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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;