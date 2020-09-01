import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { useRef } from "react";

const config = {
  apiKey: "AIzaSyCG-WTtD8vXtPygvEqerQ6TJh-LHU9bJk8",
  authDomain: "e-shop-d63de.firebaseapp.com",
  databaseURL: "https://e-shop-d63de.firebaseio.com",
  projectId: "e-shop-d63de",
  storageBucket: "e-shop-d63de.appspot.com",
  messagingSenderId: "1088085908972",
  appId: "1:1088085908972:web:bd0813f051fea1f38534c9",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const userSnapshot = await userRef.get();

  if (!userSnapshot.exist) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.error("Error creating user", error.message);
    }
  }
  return useRef;
};

export const addCollectionAndDocument = async (collectionName, data) => {
  const collectionRef = firestore.collection(collectionName);
  const batch = firestore.batch();
  data.forEach((item) => {
    const docRef = collectionRef.doc();
    console.log(docRef);
    batch.set(docRef, item);
  });
  return await batch.commit();
};

export default firebase;
