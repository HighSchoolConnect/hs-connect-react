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
    currentPosition: "",
    location: "",
    education: "",
    phone: "",
    photoURL: "https://firebasestorage.googleapis.com/v0/b/thehsconnect.appspot.com/o/undraw_profile_pic_ic-5-t%20(1).svg?alt=media&token=49609533-c10e-43fd-863d-1de315962adf",
    about: "",
    HSGradMonth: "",
    HSGradYear: "",
    degree: "",
    undergradCollege: "",
    UStartYear: "",
    UEndYear: "",
    jobTitle1: "",
    jobComp1: "",
    jobDescription1: "",
    jobStart1: "",
    jobEnd1: "",
    jobTitle2: "",
    jobComp2: "",
    jobDescription2: "",
    jobStart2: "",
    jobEnd2: "",
    jobTitle3: "",
    jobComp3: "",
    jobDescription3: "",
    jobStart3: "",
    jobEnd3: "",
    employer: false,
    skill1: "",
    skill2: "",
    skill3: "",
    skill4: "",
    skill5: "",
    ac1: "",
    ac2: "",
    ac3: "",

    email: auth.currentUser.email,
    createdAt: new Date(),
  });


};

export const createEmployerDocument = async (user, additionalData, additionalData2) => {


  const userRef = doc(db, "employers", auth.currentUser.uid);
  await setDoc(userRef, {
    displayName: additionalData,
    company: additionalData2,
    employer: true,
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
