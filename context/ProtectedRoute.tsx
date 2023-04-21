import { Flex, Spinner } from "@chakra-ui/react"
import { useRouter } from "next/router"
import React, { useEffect } from "react"
import { UserAuth } from "../context/AuthContext"

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const { user, isLoading } = UserAuth()
    const router = useRouter()

    useEffect(() => {
        if (!user) {
            router.push("/signin")
        }
    }, [router, user])

    if (isLoading) {
        return (
            <Flex justifyContent="center" alignItems="center" height="100vh">
                <Spinner
                    size="xl"
                    thickness="4px"
                    speed="0.65s"
                    color="brand.500"
                />
            </Flex>
        )
    }

    return (
        <>
            {user ? (
                children
            ) : (
                <Flex
                    justifyContent="center"
                    alignItems="center"
                    height="100vh"
                >
                    <Spinner
                        size="xl"
                        thickness="4px"
                        speed="0.65s"
                        color="brand.500"
                    />
                </Flex>
            )}
        </>
    )
}

export default ProtectedRoute
