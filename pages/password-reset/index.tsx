import { UserAuth } from "@/context/AuthContext"
import {
    Button,
    FormControl,
    Flex,
    Heading,
    Input,
    Stack,
    Text,
    useColorModeValue,
    useToast,
} from "@chakra-ui/react"
import { useRouter } from "next/router"
import { useState } from "react"

function PasswordReset() {
    document.title = "Password Reset | HS Connect"
    const [email, setEmail] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const toast = useToast()
    const router = useRouter()
    // @ts-ignore
    const { passwordReset } = UserAuth()

    const handleSubmit = async () => {
        setIsLoading(true)
        try {
            await passwordReset(email)
            toast({
                title: "Success",
                description: "Password reset email sent",
                status: "success",
                duration: 5000,
                isClosable: true,
            })
            router.push("/signin")
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
    return (
        <>
            <Flex
                minH={"80vh"}
                align={"center"}
                justify={"center"}
                bg={useColorModeValue("gray.50", "gray.800")}
            >
                <Stack
                    spacing={4}
                    w={"full"}
                    maxW={"md"}
                    bg={useColorModeValue("white", "gray.700")}
                    rounded={"xl"}
                    boxShadow={"lg"}
                    p={6}
                    my={12}
                >
                    <Heading
                        lineHeight={1.1}
                        fontSize={{ base: "2xl", md: "3xl" }}
                    >
                        Forgot your password?
                    </Heading>
                    <Text
                        fontSize={{ base: "sm", sm: "md" }}
                        color={useColorModeValue("gray.800", "gray.400")}
                    >
                        You&apos;ll get an email with a reset link
                    </Text>
                    <FormControl id="email">
                        <Input
                            placeholder="your-email@example.com"
                            _placeholder={{ color: "gray.500" }}
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </FormControl>
                    <Stack spacing={6}>
                        <Button
                            loadingText="Sending..."
                            colorScheme="brand"
                            isLoading={isLoading}
                            onClick={handleSubmit}
                        >
                            Request Reset
                        </Button>
                    </Stack>
                </Stack>
            </Flex>
        </>
    )
}
export default PasswordReset
