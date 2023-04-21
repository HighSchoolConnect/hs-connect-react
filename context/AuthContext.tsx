import { createContext, useContext, useEffect, useState } from "react"
import {
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    sendPasswordResetEmail,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth"
import { auth, db } from "@/lib/Firebase"
import { doc, getDoc, setDoc } from "firebase/firestore"
import { useRouter } from "next/router"

const AuthContext = createContext<any>({})

export const UserAuth = () => useContext(AuthContext)

export const AuthContextProvider = ({
    children,
}: {
    children: React.ReactNode
}) => {
    const [user, setUser] = useState<any>(null)
    const [isLoading, setIsLoading] = useState(true)
    console.log(user)
    const router = useRouter()

    const createUser = (email: string, password: string) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email: string, password: string) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = async () => {
        setUser(null)
        await signOut(auth)
        router.push("/")
    }
    const passwordReset = (email: string) => {
        return sendPasswordResetEmail(auth, email)
    }

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider()
        return signInWithPopup(auth, provider)
    }

    const setStudentData = async () => {
        //@ts-ignore
        const userRef = doc(db, "users", auth.currentUser.uid)
        //check if doc exists in db
        const userData = await getDoc(userRef)
        if (userData.data()?.uid === auth.currentUser?.uid) {
            // console.log(auth.currentUser?.uid);
            console.log("userData exists")
            setUser(userData.data())
        } else {
            await setDoc(userRef, {
                displayName: auth.currentUser?.displayName,
                currentPosition: "",
                location: "",
                education: "",
                phone: "",
                photoURL:
                    "https://firebasestorage.googleapis.com/v0/b/thehsconnect.appspot.com/o/undraw_profile_pic_ic-5-t%20(1).svg?alt=media&token=49609533-c10e-43fd-863d-1de315962adf",
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
                email: auth.currentUser?.email,
                createdAt: new Date(),
            })

            const userData = await getDoc(userRef)
            setUser(userData.data())
        }
    }

    const setEmployerData = async (company: string) => {
        //@ts-ignore
        const userRef = doc(db, "users", auth.currentUser.uid)
        //check if doc exists in db
        const userData = await getDoc(userRef)
        if (userData.data()?.uid === auth.currentUser?.uid) {
            // console.log(auth.currentUser?.uid);
            console.log("userData exists")
            setUser(userData.data())
        } else {
            await setDoc(userRef, {
                displayName: auth.currentUser?.displayName,
                company: company,
                employer: true,
                verified: true,
                email: auth.currentUser?.email,
                createdAt: new Date(),
            })
            const userData = await getDoc(userRef)
            setUser(userData.data())
        }
    }

    const getUserData = async () => {
        //@ts-ignore
        const userRef = doc(db, "users", auth.currentUser.uid)
        const userData = await getDoc(userRef)
        setUser(userData.data())
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            // setIsLoading(true);
            console.log("currentUser")
            console.log(currentUser)
            if (currentUser) {
                setIsLoading(true)
                const getUserData = async () => {
                    const userCollectionRef = doc(
                        db,
                        "users",
                        //@ts-ignore
                        auth.currentUser.uid
                    )
                    const userData = await getDoc(userCollectionRef)
                    if (userData.data()?.employer) {
                        setUser(userData.data())
                    } else {
                        setUser(userData.data())
                    }
                }
                getUserData()
                setIsLoading(false)
            }
            setUser(currentUser)

            setIsLoading(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])

    return (
        <AuthContext.Provider
            value={{
                createUser,
                user,
                logout,
                signIn,
                passwordReset,
                googleSignIn,
                isLoading,
                setStudentData,
                setEmployerData,
                getUserData,
            }}
        >
            {isLoading ? null : children}
        </AuthContext.Provider>
    )
}
