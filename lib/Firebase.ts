// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCNvRCMA6quwCrrSjHJhIDaQ_wZKD6ZKkU",
    authDomain: "thehsconnect.firebaseapp.com",
    projectId: "thehsconnect",
    storageBucket: "thehsconnect.appspot.com",
    messagingSenderId: "614152206610",
    appId: "1:614152206610:web:760f7ff000732f8f565bcb",
    measurementId: "G-EX8Z764V7V",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)

let analytics: any
if (firebaseConfig?.projectId) {
    // Initialize Firebase
    const app = initializeApp(firebaseConfig)

    if (app.name && typeof window !== "undefined") {
        analytics = getAnalytics(app)
    }

    // Access Firebase services using shorthand notation
}

export { analytics }
