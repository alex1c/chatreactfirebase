import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import { initializeApp } from "firebase/app";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSPK5RJmutGRXR7V-OE8K960gjpt688Ok",
  authDomain: "chat-react-3a851.firebaseapp.com",
  projectId: "chat-react-3a851",
  storageBucket: "chat-react-3a851.appspot.com",
  messagingSenderId: "116808531246",
  appId: "1:116808531246:web:d9d5ce2323e1d5bb844ebf",
};

export const Context = createContext(null);
// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app);



/* // Signs-in Friendly Chat.
async function signIn() {
  // Sign in Firebase using popup auth and Google as the identity provider.
  var provider = new GoogleAuthProvider();
  const { user } = await signInWithPopup(getAuth(), provider);
  console.log("user", user);
}

// Signs-out of Friendly Chat.
function signOutUser() {
  //signOut(user,provider);
  //console.log('user2', user)
} */

//signIn()
//console.log('getAuth',getAuth())

//const auth = app.auth();
//const firestore = app.firestore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Context.Provider value={{}}>
    <App />
  </Context.Provider>
);
