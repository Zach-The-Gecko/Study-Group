import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDtx9gkZ5nuHH6rPQxT9JqmW7XYMYNR1l0",
  authDomain: "study-group-dfdc3.firebaseapp.com",
  databaseURL: "https://study-group-dfdc3.firebaseio.com",
  projectId: "study-group-dfdc3",
  storageBucket: "study-group-dfdc3.appspot.com",
  messagingSenderId: "387160317122",
  appId: "1:387160317122:web:6785c85da591cc250d6f5b",
  measurementId: "G-393H8TVLVM",
};

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
        ...additionalData,
      });
    } catch (error) {
      console.error("Error creating user ", error.message);
    }
  }

  return userRef;
};

export const getUserData = async (id) => {
  const userRef = firestore.doc(`users/${id}`);
  const snapShot = await userRef.get();
  return snapShot.data();
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.OAuthProvider("microsoft.com");
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithMicrosoft = () => auth.signInWithPopup(provider);

export default firebase;
