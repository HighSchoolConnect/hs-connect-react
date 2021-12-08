import { useEffect, useState } from "react";

import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,


} from "firebase/auth";

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
const auth = getAuth();


export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);

}
export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);

}

export function logout() {
  return signOut(auth);
}


export function useAuth() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
    return unsub;
  }, []);

  return currentUser;
}
export default app;
