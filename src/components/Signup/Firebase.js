import { useEffect, useState } from "react";

import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,


} from "firebase/auth";
import "firebase/firestore";

import { getFirestore } from "@firebase/firestore";
import { doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCNvRCMA6quwCrrSjHJhIDaQ_wZKD6ZKkU",
  authDomain: "thehsconnect.firebaseapp.com",
  projectId: "thehsconnect",
  storageBucket: "thehsconnect.appspot.com",
  messagingSenderId: "614152206610",
  appId: "1:614152206610:web:760f7ff000732f8f565bcb",
  measurementId: "G-EX8Z764V7V",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth();

export const db = getFirestore(app);

export const createUserDocument = async (user, additionalData) => {


  const userRef = doc(db, "users", auth.currentUser.uid);
  await setDoc(userRef, {
    displayName: additionalData,
    email: auth.currentUser.email,
    createdAt: new Date(),
  });


};

export const consolelogUID = (user) => {
  console.log();
}







export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);

}
export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);

}

export function logout() {
  return signOut(auth);
}

export function resetPassword(email) {
  return sendPasswordResetEmail(auth, email);
}

export function useAuth() {
  const [currentUser, setCurrentUser] = useState();
  // console.log(currentUser);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
    return unsub;
  }, []);

  return currentUser;
}





export default app;
