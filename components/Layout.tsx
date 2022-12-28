import React, { Suspense } from "react"
import ScrollToTop from "./ScrollToTop"
import { Flex, Spinner, useColorModeValue } from "@chakra-ui/react"
import dynamic from "next/dynamic"
// import Navbar from "./Navbar/Navbar"
// import Footer from "./Footer/Footer"

type LayoutProps = {
    children: React.ReactNode
}

const Navbar = dynamic(() => import("./Navbar/Navbar"), {
    suspense: true,
})
const Footer = dynamic(() => import("./Footer/Footer"), {
    suspense: true,
})

const Layout = ({ children }: LayoutProps) => {
    const colorMode = useColorModeValue("white", "rgb(26 32 44)")

    const renderLoader = () => (
        <Flex justifyContent="center" alignItems="center" height="100vh">
            <Spinner
                size="xl"
                thickness="4px"
                speed="0.65s"
                color="brand.500"
            />
        </Flex>
    )

    return (
        <>
            <Suspense fallback={renderLoader()}>
                <div
                    style={{
                        backgroundColor: colorMode,
                        fontFamily: "Jost",
                    }}
                >
                    <ScrollToTop />
                    <Navbar />
                    {children}
                    <Footer />
                </div>
            </Suspense>
        </>
    )
}

export default Layout
