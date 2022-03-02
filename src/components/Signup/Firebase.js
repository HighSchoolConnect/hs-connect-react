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
import { doc, setDoc, addDoc, collection } from "firebase/firestore";

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

export const createJob = async () => {
  const jobRef = collection(db, "jobs");
  await addDoc(jobRef, {
    title: "Production/Cook",
    company: "Pizza Hut",
    location: "Coppell, TX",
    address: "820 S Macarthur Blvd, Coppell, TX",
    salaryLow: 7.88,
    salaryHigh: 9.6,
    logo: "https://upload.wikimedia.org/wikipedia/sco/thumb/d/d2/Pizza_Hut_logo.svg/2177px-Pizza_Hut_logo.svg.png"
  });

}
// createJob();


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
