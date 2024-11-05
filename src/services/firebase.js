import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB9s3xa_E0f0GFjlqEcbnuuzKqkh6RQKt0",
  authDomain: "meet-tea-bf719.firebaseapp.com",
  databaseURL: "https://meet-tea-bf719-default-rtdb.firebaseio.com",
  projectId: "meet-tea-bf719",
  storageBucket: "meet-tea-bf719.appspot.com",
  messagingSenderId: "34636774989",
  appId: "1:34636774989:web:6fd674fd955c1de14b2604"
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
