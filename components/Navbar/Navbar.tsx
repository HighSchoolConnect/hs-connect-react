import {
    Avatar,
    Box,
    Button,
    chakra,
    CloseButton,
    Flex,
    HStack,
    IconButton,
    useColorModeValue,
    useDisclosure,
    VisuallyHidden,
    VStack,
    Image,
    useColorMode,
    Link,
} from "@chakra-ui/react"
import { Auth } from "aws-amplify"
import { useRouter } from "next/router"
import React, { useEffect } from "react"
import {
    AiOutlineMenu,
    AiOutlineSearch,
    AiFillBell,
    AiFillPlusCircle,
    AiOutlineUser,
} from "react-icons/ai"
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs"

function Navbar() {
    const bg = useColorModeValue("white", "gray.800")
    const mobileNav = useDisclosure()
    const { colorMode, toggleColorMode } = useColorMode()
    const [user, setUser] = React.useState<any>()
    const router = useRouter()

    useEffect(() => {
        async function ionViewCanEnter() {
            try {
                const user = await Auth.currentAuthenticatedUser()
                setUser(user)
            } catch (err) {
                console.log(err)
            }
        }
        ionViewCanEnter()
    }, [])

    const handleSignOut = async () => {
        try {
            await Auth.signOut()
            setUser(null)
            router.push("/")
        } catch (error) {
            console.log("error signing out: ", error)
        }
    }

    return (
        <React.Fragment>
            <chakra.header
                bg={bg}
                w="full"
                px={{
                    base: 2,
                    sm: 4,
                }}
                py={4}
                shadow="md"
            >
                <Flex
                    alignItems="center"
                    justifyContent="space-between"
                    mx="auto"
                >
                    <HStack display="flex" spacing={3} alignItems="center">
                        <Box
                            display={{
                                base: "inline-flex",
                                md: "none",
                            }}
                        >
                            <IconButton
                                display={{
                                    base: "flex",
                                    md: "none",
                                }}
                                aria-label="Open menu"
                                fontSize="20px"
                                color="gray.800"
                                _dark={{
                                    color: "inherit",
                                }}
                                variant="ghost"
                                icon={<AiOutlineMenu />}
                                onClick={mobileNav.onOpen}
                            />
                            <VStack
                                pos="absolute"
                                top={0}
                                left={0}
                                right={0}
                                display={mobileNav.isOpen ? "flex" : "none"}
                                flexDirection="column"
                                p={2}
                                pb={4}
                                m={2}
                                bg={bg}
                                spacing={3}
                                rounded="sm"
                                shadow="sm"
                                zIndex="dropdown"
                            >
                                <CloseButton
                                    aria-label="Close menu"
                                    justifySelf="self-start"
                                    onClick={mobileNav.onClose}
                                />
                                <Button
                                    w="full"
                                    variant="ghost"
                                    leftIcon={<AiOutlineSearch />}
                                >
                                    Find Jobs
                                </Button>
                                <Button
                                    w="full"
                                    variant="solid"
                                    colorScheme="brand"
                                    leftIcon={<AiFillPlusCircle />}
                                >
                                    Post a Job
                                </Button>
                            </VStack>
                        </Box>
                        <chakra.a
                            href="/"
                            title="HS Connect Home Page"
                            display="flex"
                            alignItems="center"
                        >
                            <Image
                                src="/HSCLogo.png"
                                alt="HS Connect Logo"
                                w="50px"
                            />
                            <VisuallyHidden>HS Connect</VisuallyHidden>
                        </chakra.a>

                        <HStack
                            spacing={3}
                            display={{
                                base: "none",
                                md: "inline-flex",
                            }}
                        >
                            <Button
                                variant="ghost"
                                leftIcon={<AiOutlineSearch />}
                                size="sm"
                            >
                                Find Jobs
                            </Button>
                            <Button
                                variant="solid"
                                colorScheme="brand"
                                leftIcon={<AiFillPlusCircle />}
                                size="sm"
                            >
                                Post a Job
                            </Button>
                        </HStack>
                    </HStack>
                    <HStack
                        spacing={3}
                        display={mobileNav.isOpen ? "none" : "flex"}
                        alignItems="center"
                    >
                        <chakra.a
                            p={3}
                            color="gray.800"
                            _dark={{
                                color: "inherit",
                            }}
                            rounded="sm"
                            _hover={{
                                color: "gray.800",
                                _dark: {
                                    color: "gray.600",
                                },
                            }}
                        >
                            <AiFillBell />
                            <VisuallyHidden>Notifications</VisuallyHidden>
                        </chakra.a>

                        <Avatar
                            size="sm"
                            icon={
                                <AiOutlineUser
                                    fontSize="1.5rem"
                                    color="white"
                                />
                            }
                            bg="brand.500"
                            as={Link}
                            href="/profile"
                            src={user?.attributes?.picture}
                        />
                        {user != null ? (
                            <Button
                                variant="solid"
                                colorScheme="brand"
                                size="sm"
                                onClick={handleSignOut}
                            >
                                Sign Out
                            </Button>
                        ) : (
                            <> </>
                        )}
                        <IconButton
                            colorScheme="brand"
                            icon={
                                colorMode === "light" ? (
                                    <BsFillMoonFill />
                                ) : (
                                    <BsFillSunFill />
                                )
                            }
                            onClick={toggleColorMode}
                            aria-label={""}
                            size="sm"
                        />
                    </HStack>
                </Flex>
            </chakra.header>
        </React.Fragment>
    )
}

export default Navbar
