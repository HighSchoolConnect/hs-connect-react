import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    useToast,
    IconButton,
    Checkbox,
} from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons"
import { FaGoogle } from "react-icons/fa"
import { updateProfile } from "firebase/auth"
import { useRouter } from "next/router"
import Link from "next/link"
import Head from "next/head"
import { UserAuth } from "@/context/AuthContext"
import { auth } from "@/lib/Firebase"

function Signup() {
    const [showPassword, setShowPassword] = useState(false)
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [googleIsLoading, setGoogleIsLoading] = useState(false)
    const [employer, setEmployer] = useState(false)
    const [companyName, setCompanyName] = useState("")

    const router = useRouter()
    // @ts-ignore
    const { createUser, googleSignIn, setStudentData, setEmployerData } =
        UserAuth()
    const toast = useToast()

    const handleSubmit = async () => {
        setIsLoading(true)

        try {
            await createUser(email, password)
            const fullName = `${firstName} ${lastName}`
            // @ts-ignore
            await updateProfile(auth.currentUser, {
                displayName: fullName,
            })
            if (employer) {
                await setEmployerData(companyName)
            } else {
                await setStudentData()
            }

            toast({
                title: "Success",
                description: "Account created",
                status: "success",
                duration: 5000,
                isClosable: true,
            })
            router.push("/mysites/home")
        } catch (error: any) {
            toast({
                title: "Error",
                description: error.message,
                status: "error",
                duration: 5000,
                isClosable: true,
            })
        }
        setIsLoading(false)
    }

    const handleSignInWithPopup = async () => {
        setGoogleIsLoading(true)
        try {
            await googleSignIn()
            if (employer) {
                await setEmployerData(companyName)
            } else {
                await setStudentData()
            }

            toast({
                title: "Success",
                description: "Signin successful",
                status: "success",
                duration: 5000,
                isClosable: true,
            })
            router.push("/mysites/home")
        } catch (error: any) {
            toast({
                title: "Error",
                description: error.message,
                status: "error",
                duration: 5000,
                isClosable: true,
            })
        }
        setGoogleIsLoading(false)
    }

    return (
        <>
            <Head>
                <title>Signup | HS Connect</title>
            </Head>
            <Flex
                minH={"80vh"}
                align={"center"}
                justify={"center"}
                bg={useColorModeValue("gray.50", "gray.800")}
            >
                <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
                    <Stack align={"center"}>
                        <Heading fontSize={"4xl"} textAlign={"center"}>
                            Sign up
                        </Heading>
                        <Text fontSize={"lg"} color={"gray.600"}>
                            to get started with HS Connect
                        </Text>
                    </Stack>
                    <Box
                        rounded={"lg"}
                        bg={useColorModeValue("white", "gray.700")}
                        boxShadow={"lg"}
                        p={8}
                    >
                        <Stack spacing={4}>
                            <HStack>
                                <Box>
                                    <FormControl id="name" isRequired>
                                        <FormLabel>First Name</FormLabel>
                                        <Input
                                            type="text"
                                            onChange={(e) =>
                                                setFirstName(e.target.value)
                                            }
                                        />
                                    </FormControl>
                                </Box>
                                <Box>
                                    <FormControl id="lastName">
                                        <FormLabel>Last Name</FormLabel>
                                        <Input
                                            type="text"
                                            onChange={(e) =>
                                                setLastName(e.target.value)
                                            }
                                        />
                                    </FormControl>
                                </Box>
                            </HStack>
                            <FormControl id="email" isRequired>
                                <FormLabel>Email address</FormLabel>
                                <Input
                                    type="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </FormControl>
                            <FormControl id="password" isRequired>
                                <FormLabel>Password</FormLabel>
                                <InputGroup>
                                    <Input
                                        type={
                                            showPassword ? "text" : "password"
                                        }
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                    />
                                    <InputRightElement h={"full"}>
                                        <Button
                                            variant={"ghost"}
                                            onClick={() =>
                                                setShowPassword(
                                                    (showPassword) =>
                                                        !showPassword
                                                )
                                            }
                                        >
                                            {showPassword ? (
                                                <ViewIcon />
                                            ) : (
                                                <ViewOffIcon />
                                            )}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                            </FormControl>
                            {employer && (
                                <FormControl id="companyName">
                                    <FormLabel>Company Name</FormLabel>
                                    <Input
                                        type="text"
                                        onChange={(e) =>
                                            setCompanyName(e.target.value)
                                        }
                                    />
                                </FormControl>
                            )}
                            <HStack>
                                <Checkbox
                                    onChange={() =>
                                        setEmployer((employer) => !employer)
                                    }
                                    colorScheme="brand"
                                >
                                    I am an employer
                                </Checkbox>
                            </HStack>

                            <Stack spacing={10} pt={2}>
                                <Button
                                    loadingText="Creating account..."
                                    size="lg"
                                    colorScheme="brand"
                                    isLoading={isLoading}
                                    onClick={() => {
                                        handleSubmit()
                                    }}
                                >
                                    Sign up
                                </Button>
                                <IconButton
                                    onClick={() => handleSignInWithPopup()}
                                    aria-label={""}
                                    size="lg"
                                    colorScheme="brand"
                                    isLoading={googleIsLoading}
                                    isDisabled={employer && !companyName}
                                >
                                    <FaGoogle />
                                </IconButton>
                                {employer && !companyName && (
                                    <Text color="brand.500" textAlign="center">
                                        Please enter your company name before
                                        using Google Signin
                                    </Text>
                                )}
                            </Stack>
                            <HStack pt={6} justifyContent="center">
                                <Text>Already have an account? </Text>

                                <Link href="/signin">
                                    <Text color={"brand.400"}>Sign in</Text>
                                </Link>
                            </HStack>
                        </Stack>
                    </Box>
                </Stack>
            </Flex>
        </>
    )
}
export default Signup
