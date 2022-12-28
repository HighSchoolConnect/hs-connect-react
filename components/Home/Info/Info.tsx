import { PropsWithChildren } from "react"
import {
    chakra,
    Container,
    Stack,
    Text,
    useColorModeValue,
    Image,
    Skeleton,
    Box,
    Link,
    TextProps,
    Button,
} from "@chakra-ui/react"
type InfoProps = {
    title: string
    description: string
    image: string
    buttonLink: string
    buttonText: string
    flip: boolean
}
const Info = ({
    title,
    description,
    image,
    flip,
    buttonLink,
    buttonText,
}: InfoProps) => {
    return (
        <Box
            bg={useColorModeValue(
                flip ? "gray.50" : "white",
                flip ? "gray.800" : "gray.900"
            )}
            overflow="hidden"
            pt={10}
            pb={10}
        >
            <Container maxW="6xl" px={{ base: 6, md: 3 }} py={14}>
                <Stack
                    direction={{
                        base: flip ? "column-reverse" : "column",
                        md: flip ? "row-reverse" : "row",
                    }}
                    justifyContent="center"
                >
                    <Box mr={{ base: 0, md: 5 }} pos="relative">
                        <DottedBox flip={flip} />
                        <Image
                            w="100%"
                            h="100%"
                            minW={{ base: "auto", md: "30rem" }}
                            maxH="20rem"
                            objectFit="contain"
                            src={image}
                            alt={title}
                            rounded="md"
                            fallback={<Skeleton />}
                            zIndex={3}
                            pos="relative"
                            // bg={useColorModeValue("gray.50", "gray.700")}
                            // boxShadow="lg"
                        />
                    </Box>
                    <Stack
                        direction="column"
                        spacing={6}
                        justifyContent="center"
                        zIndex={3}
                    >
                        <chakra.h1
                            fontSize="5xl"
                            lineHeight={1}
                            fontWeight="bold"
                            textAlign="left"
                        >
                            {title}
                        </chakra.h1>
                        <Box>
                            <Content>{description}</Content>
                        </Box>
                        <Button
                            mt={4}
                            colorScheme="brand"
                            as={Link}
                            href={buttonLink}
                        >
                            {buttonText}
                        </Button>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    )
}

const Content = ({ children, ...props }: PropsWithChildren<TextProps>) => {
    return (
        <Text
            fontSize="md"
            textAlign="left"
            lineHeight="1.375"
            fontWeight="400"
            color="gray.500"
            {...props}
        >
            {children}
        </Text>
    )
}
type DotBoxProps = {
    flip: boolean
}
export function DottedBox({ flip }: DotBoxProps) {
    return (
        <Box
            position="absolute"
            left={flip ? "nil" : "45px"}
            right={flip ? "45px" : "nil"}
            top="-30px"
            height="full"
            maxW="700px"
            zIndex={0}
        >
            <svg
                color={useColorModeValue(
                    "rgba(55,65,81, 0.1)",
                    "rgba(55,65,81, 0.7)"
                )}
                width="420"
                height="420"
                fill="none"
            >
                <defs>
                    <pattern
                        id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
                        x="0"
                        y="0"
                        width="20"
                        height="20"
                        patternUnits="userSpaceOnUse"
                    >
                        <rect
                            x="0"
                            y="0"
                            width="4"
                            height="4"
                            fill="currentColor"
                        ></rect>
                    </pattern>
                </defs>
                <rect
                    width="404"
                    height="404"
                    fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
                ></rect>
            </svg>
        </Box>
    )
}

export default Info
