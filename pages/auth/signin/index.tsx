import React, { useEffect } from "react"
import "@aws-amplify/ui-react/styles.css"
import { Button, Flex, useColorMode } from "@chakra-ui/react"
import {
    Authenticator,
    defaultDarkModeOverride,
    ThemeProvider,
} from "@aws-amplify/ui-react"
import { useRouter } from "next/router"
import { Auth, Hub } from "aws-amplify"

const Signin = () => {
    const router = useRouter()
    const { redirect } = router.query
    var redirectUrl = redirect ? redirect : ""

    const { colorMode, toggleColorMode } = useColorMode()

    const theme = {
        name: "my-theme",
        overrides: [defaultDarkModeOverride],
        fonts: {
            body: "Jost",
            heading: "Jost",
            
        },
    }

    useEffect(() => {
        const listener = (data: any) => {
            switch (data.payload.event) {
                case "signIn" || "autoSignIn" || "tokenRefresh":
                    console.log("is authenticated")
                    router.push("/" + redirectUrl.toString())
                    break
                case "signOut" ||
                    "signIn_failure" ||
                    "tokenRefresh_failure" ||
                    "autoSignIn_failure":
                    console.log("is not authenticated")

                    break
            }
        }

        Hub.listen("auth", listener)
    })
    const services = {
        async handleSignUp(formData: {
            username: any
            password: any
            attributes: any
        }) {
            let { username, password, attributes } = formData

            // custom username
            username = username.toLowerCase()
            attributes.email = attributes.email.toLowerCase()
            attributes.picture = "/person.svg"

            return Auth.signUp({
                username,
                password,
                attributes: {
                    ...attributes,
                    "custom:about": " ",
                    "custom:location": " ",
                    "custom:employer": "0",
                    "custom:currentPosition": " ",
                    "custom:highSchool": " ",
                    "custom:highSchoolStartYear": " ",
                    "custom:highSchoolEndYear": " ",
                    "custom:college": " ",
                    "custom:collegeStartYear": " ",
                    "custom:collegeEndYear": " ",
                    "custom:degree": " ",
                    "custom:jobOneTitle": " ",
                    "custom:jobOneCompany": " ",
                    "custom:jobOneDescription": " ",
                    "custom:jobOneStartDate": " ",
                    "custom:jobOneEndDate": " ",
                    "custom:jobTwoTitle": " ",
                    "custom:jobTwoCompany": " ",
                    "custom:jobTwoDescription": " ",
                    "custom:jobTwoStartDate": " ",
                    "custom:jobTwoEndDate": " ",
                    "custom:jobThreeTitle": " ",
                    "custom:jobThreeCompany": " ",
                    "custom:jobThreeDescription": " ",
                    "custom:jobThreeStartDate": " ",
                    "custom:jobThreeEndDate": " ",
                    "custom:skillOne": " ",
                    "custom:skillTwo": " ",
                    "custom:skillThree": " ",
                    "custom:skillFour": " ",
                    "custom:skillFive": " ",
                    "custom:accomplishmentOne": " ",
                    "custom:accomplishmentTwo": " ",
                    "custom:accomplishmentThree": " ",
                },
            })
        },
    }

    return (
        <Flex direction="column" align="center" justify="center" h="100vh">
            <ThemeProvider theme={theme} colorMode={colorMode}>
                <Authenticator
                    services={services}
                    signUpAttributes={["name", "family_name", "email"]}
                />
            </ThemeProvider>
        </Flex>
    )
}

export default Signin
