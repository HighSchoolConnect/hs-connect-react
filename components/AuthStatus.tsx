import { Hub, Auth } from "aws-amplify"
import { useState, useEffect } from "react"

export default function AuthenticatedStatus(): Boolean {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)

    async function ionViewCanEnter() {
       
        try {
            const authenticatedUser = await Auth.currentAuthenticatedUser()
            if (authenticatedUser !== undefined) {
                setIsAuthenticated(true)
            } else {
                setIsAuthenticated(false)
            }
        } catch {
            setIsAuthenticated(false)
        }
    }

    useEffect(() => {
        ionViewCanEnter()
    })

    useEffect(() => {
        const listener = (data: any) => {
            switch (data.payload.event) {
                case "signIn" || "autoSignIn" || "tokenRefresh":
                    console.log("is authenticated")
                    setIsAuthenticated(true)
                    break
                case "signOut" ||
                    "signIn_failure" ||
                    "tokenRefresh_failure" ||
                    "autoSignIn_failure":
                    console.log("is not authenticated")
                    setIsAuthenticated(false)
                    break
            }
        }

        Hub.listen("auth", listener)
    })

    return isAuthenticated
}
