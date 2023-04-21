import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { ChakraProvider, CSSReset } from "@chakra-ui/react"
import { theme } from "@/theme/theme"
import Layout from "@/components/Layout"
import { useRouter } from "next/router"
import { AuthContextProvider } from "@/context/AuthContext"
import ProtectedRoute from "@/context/ProtectedRoute"
// const Layout = dynamic(() => import("@/components/Layout"), {
//     ssr: false,
// })
const noAuthRequired = ["/", "/signin", "/signup", "/password-reset", "/404"]
function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter()

    return (
        <ChakraProvider theme={theme}>
            <AuthContextProvider>
                <Layout>
                    <CSSReset />
                    {noAuthRequired.includes(router.pathname) ? (
                        <Component {...pageProps} />
                    ) : (
                        <ProtectedRoute>
                            <Component {...pageProps} />
                        </ProtectedRoute>
                    )}
                </Layout>
            </AuthContextProvider>
        </ChakraProvider>
    )
}

export default MyApp
