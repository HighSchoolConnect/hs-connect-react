import "../styles/globals.css"
import type { AppProps } from "next/app"
import { ChakraProvider, CSSReset } from "@chakra-ui/react"
import { theme } from "../theme/theme"
import { Amplify } from "aws-amplify"
import awsconfig from "../aws-exports"
import dynamic from "next/dynamic"
import { AmplifyProvider } from "@aws-amplify/ui-react"
const Layout = dynamic(() => import("../components/Layout"), {
    ssr: false,
})
Amplify.configure({ ...awsconfig, ssr: true })

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <CSSReset />
            <AmplifyProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </AmplifyProvider>
        </ChakraProvider>
    )
}

export default MyApp
