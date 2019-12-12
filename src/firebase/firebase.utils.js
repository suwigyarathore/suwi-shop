import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA_WlCYYUKUZRt9ThiIeHEQgum8034B7y4",
  authDomain: "shop-db-beda6.firebaseapp.com",
  databaseURL: "https://shop-db-beda6.firebaseio.com",
  projectId: "shop-db-beda6",
  storageBucket: "shop-db-beda6.appspot.com",
  messagingSenderId: "741128827601",
  appId: "1:741128827601:web:64d61e28a811456899cbf0",
  measurementId: "G-PSFXC03XGX"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
