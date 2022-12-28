import {
    useColorModeValue,
    chakra,
    Flex,
    Stack,
    Heading,
    Box,
    Input,
    InputGroup,
    InputLeftElement,
} from "@chakra-ui/react"
import React from "react"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import { Engine } from "tsparticles-engine"
import { AiOutlineSearch } from "react-icons/ai"

function Hero() {
    const particlesInit = async (main: Engine) => {
        await loadFull(main)
    }
    const bg = useColorModeValue("white", "gray.800")
    const [value, setValue] = React.useState("")
    return (
        <Box bg={bg} id="home">
            <Box
                w="full"
                h="container.sm"
                backgroundImage="/hero-bg.jpg"
                bgPos="center"
                bgSize="cover"
                bgRepeat="no-repeat"
                bgAttachment={{ base: "none", sm: "fixed" }}
                //add overlay
            >
                <Flex
                    align="center"
                    pos="relative"
                    justify="center"
                    boxSize="full"
                    bg="#1D4044d1"
                >
                    <Particles
                        init={particlesInit}
                        //@ts-ignore
                        options={options}
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            width: "100%",
                            height: "100%",
                        }}
                    />
                    <Stack textAlign="center" alignItems="center" spacing={0}>
                        <Heading
                            fontSize={["5xl", "6xl", "8xl"]}
                            color="white"
                            textTransform="uppercase"
                            fontFamily="Jost"
                        >
                            HS Connect
                        </Heading>
                        <Heading
                            fontSize={["sm", "lg", "xl"]}
                            color="white"
                            textTransform="uppercase"
                            fontFamily="Jost"
                        >
                            {" "}
                            Find the job you desire as a student
                        </Heading>
                        <Box w="full" pt={8} color="white">
                            <InputGroup size="lg">
                                <InputLeftElement
                                    pointerEvents="none"
                                    children={
                                        <AiOutlineSearch color="gray.300" />
                                    }
                                />
                                <Input
                                    placeholder="EX: Software Engineer, Medical Assistant"
                                    value={value}
                                    onChange={(e) => setValue(e.target.value)}
                                    onReset={() => setValue("")}
                                />
                            </InputGroup>
                        </Box>
                    </Stack>
                </Flex>
            </Box>
        </Box>
    )
}

export default Hero

const options = {
    fullScreen: { enable: false, zIndex: -1 },
    fpsLimit: 60,
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: "push",
            },
            onHover: {
                enable: true,
                mode: "repulse",
            },
            resize: true,
        },
        modes: {
            bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
            },
            push: {
                quantity: 4,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
        },
    },
    particles: {
        color: {
            value: "#00c6d3",
        },
        links: {
            color: "#00c6d3",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
        },
        collisions: {
            enable: true,
        },
        move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 1,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                area: 800,
            },
            value: 35,
        },
        opacity: {
            value: 0.5,
        },
        shape: {
            type: "circle",
        },
        size: {
            random: true,
            value: 1,
        },
    },
    detectRetina: true,
}
