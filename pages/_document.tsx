import { ColorModeScript } from "@chakra-ui/react"
import NextDocument, { Html, Head, Main, NextScript } from "next/document"
import { theme } from "../theme/theme"

export default class Document extends NextDocument {
    render() {
        return (
            <Html lang="en">
                <Head>
                    {" "}
                    <meta charSet="utf-8" />
                    <link rel="icon" href="/HSCLogo.png" />
                    <link rel="apple-touch-icon" href="/HSConnectLogo.jpg" />
                    <link
                        rel="preconnect"
                        href="https://fonts.googleapis.com"
                    />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                        rel="stylesheet"
                    />
                    <meta property="og:title" content="HS Connect" />
                    <meta
                        name="image"
                        property="og:image"
                        content="/HSConnectLogo.jpg"
                    />
                    <meta name="author" content="HS Connect" />
                    <meta
                        property="og:description"
                        content="HS Connect is a website where people can find the right job or internship, connect and strengthen professional relationships, and learn the skills you need to succeed in your career."
                    />
                    <meta property="og:url" content="https://hsc.geethg.com" />
                </Head>
                <body>
                    {/* 👇 Here's the script */}
                    <ColorModeScript
                        initialColorMode={theme.config.initialColorMode}
                    />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
