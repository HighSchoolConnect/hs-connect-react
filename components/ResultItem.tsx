import React from "react"
import {
    Box,
    useDisclosure,
    HStack,
    VStack,
    Image,
    Text,
    Flex,
    chakra,
    Link as ChakraLink,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    GridItem,
    Button,
} from "@chakra-ui/react"
import Link from "next/link"
import { auth } from "@/lib/Firebase"
//import {results} from "./SampleResults";

// import { Chakra } from "../ButtonElement"
// import { auth } from "../Signup/Firebase"

interface ResultItemProps {
    id: string
    title: string
    company: string
    address: string

    location: string
    salaryLow: string
    salaryHigh: string
    logo: string
    type: string
    description: string
}

const ResultItem = ({
    id,
    title,
    company,
    address,
    location,
    salaryLow,
    salaryHigh,
    logo,
    type,
    description,
}: ResultItemProps) => {
    const btnRef = React.useRef()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [scrollBehavior] = React.useState("inside")

    return (
        <GridItem w="100%" h="600px" p={4}>
            <Box maxW="xs" mx="auto" bg="black" shadow="lg" rounded="lg">
                <Box px={4} py={2}>
                    <chakra.h1
                        color="white"
                        fontWeight="bold"
                        fontSize="3xl"
                        textTransform="uppercase"
                    >
                        {title}
                    </chakra.h1>
                    <chakra.p mt={1} fontSize="sm" color="white">
                        {company}
                    </chakra.p>
                    <chakra.p mt={1} fontSize="sm" color="white">
                        {location}
                    </chakra.p>
                    <chakra.p mt={1} fontSize="sm" color="white">
                        {address}
                    </chakra.p>
                    <chakra.p mt={1} fontSize="sm" color="white">
                        {salaryLow} - {salaryHigh}
                    </chakra.p>
                </Box>

                <Image
                    h={48}
                    w="100%"
                    fit="contain"
                    mt={2}
                    pb={2}
                    src={logo}
                    alt={title}
                />

                <Flex
                    alignItems="center"
                    justifyContent="space-between"
                    px={4}
                    py={2}
                    bg="teal"
                    roundedBottom="lg"
                >
                    <chakra.h1 color="white" fontWeight="bold" fontSize="lg">
                        {type}
                    </chakra.h1>
                    <chakra.button
                        px={2}
                        py={1}
                        bg="white"
                        fontSize="xs"
                        color="gray.900"
                        fontWeight="bold"
                        rounded="lg"
                        textTransform="uppercase"
                        //@ts-ignore
                        ref={btnRef}
                        onClick={onOpen}
                        _hover={{
                            bg: "gray.200",
                        }}
                        _focus={{
                            bg: "gray.400",
                        }}
                    >
                        Apply
                    </chakra.button>
                </Flex>

                <Modal
                    isOpen={isOpen}
                    onClose={onClose}
                    //@ts-ignore
                    scrollBehavior={scrollBehavior}
                    isCentered
                    size="sm"
                >
                    <ModalOverlay />
                    <ModalContent bg="#00c6d3">
                        <ModalHeader color="white">{title}</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Box
                                mx="auto"
                                rounded="lg"
                                shadow="md"
                                bg="teal"
                                maxW="2xl"
                            >
                                <Image
                                    roundedTop="lg"
                                    w="full"
                                    h={64}
                                    fit="contain"
                                    src={logo}
                                    alt="Article"
                                    bg="#ffffff"
                                    boxShadow="lg"
                                />
                                <Box p={6}>
                                    <Box>
                                        <VStack align="left">
                                            <ChakraLink
                                                fontWeight="bold"
                                                color="white"
                                            >
                                                {company}
                                            </ChakraLink>
                                            <Text
                                                fontSize="s"
                                                textTransform="uppercase"
                                                bg="teal"
                                                color="white"
                                                fontWeight={900}
                                            >
                                                {location}
                                            </Text>
                                            <Text
                                                fontSize="s"
                                                textTransform="uppercase"
                                                bg="teal"
                                                color="white"
                                            >
                                                Type: {type}
                                            </Text>
                                            <Text
                                                fontSize="s"
                                                textTransform="uppercase"
                                                bg="teal"
                                                color="white"
                                            >
                                                Salary: {salaryLow} -{" "}
                                                {salaryHigh}
                                            </Text>
                                        </VStack>

                                        {/* <Text
                      display="block"
                      color="white"
                      fontWeight="bold"
                      fontSize="2xl"
                      mt={2}
                    >
                      {title}
                    </Text> */}

                                        <chakra.p
                                            mt={2}
                                            fontSize="xs"
                                            color="white"
                                        >
                                            {description}
                                        </chakra.p>
                                        <Button
                                            as={Link}
                                            href={
                                                auth?.currentUser?.uid != null
                                                    ? "/apply/" +
                                                      id +
                                                      "/" +
                                                      title
                                                    : "/signup/" +
                                                      id +
                                                      "/" +
                                                      title
                                            }
                                        >
                                            <Button
                                                colorScheme="teal"
                                                mt={10}
                                                mb={-5}
                                            >
                                                <HStack>
                                                    <Text>Apply</Text>
                                                </HStack>
                                            </Button>
                                        </Button>
                                    </Box>

                                    <Box mt={6}>
                                        <Flex alignItems="center">
                                            <Flex alignItems="center">
                                                {/* <Box bg="white" rounded="full" p={2} mx={2}> */}
                                                {/* <Image
                          h={10}
                          fit="cover"
                          rounded="full"
                          src={logo}
                          alt="Avatar"
                        /> */}
                                                {/* </Box> */}
                                            </Flex>
                                        </Flex>
                                    </Box>
                                </Box>
                            </Box>
                        </ModalBody>

                        <ModalFooter></ModalFooter>
                    </ModalContent>
                </Modal>
            </Box>
        </GridItem>
    )
}

export default ResultItem
