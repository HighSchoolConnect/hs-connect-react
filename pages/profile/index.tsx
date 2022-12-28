import React, { useEffect } from "react"
import "@aws-amplify/ui-react/styles.css"
import {
    Button,
    Image,
    Text,
    Box,
    Container,
    Grid,
    useColorModeValue,
    IconButton,
    useDisclosure,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Input,
    Textarea,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
} from "@chakra-ui/react"
import { Auth, withSSRContext } from "aws-amplify"
import { useRouter } from "next/router"
import type { GetServerSideProps } from "next"
import { FaPencilAlt } from "react-icons/fa"

interface Props {
    user: any
}
const Profile = ({ user }: Props) => {
    const router = useRouter()
    const [authStatus, setAuthStatus] = React.useState(false)
    const [userData, setUserData] = React.useState(user)
    const [isLoading, setIsLoading] = React.useState(false)

    const [name, setName] = React.useState(" ")
    const [familyName, setFamilyName] = React.useState(" ")
    const [picture, setPicture] = React.useState(" ")
    const [about, setAbout] = React.useState(" ")
    const [location, setLocation] = React.useState(" ")
    const [employer, setEmployer] = React.useState("0")
    const [currentPosition, setCurrentPosition] = React.useState(" ")
    const [highSchool, setHighSchool] = React.useState(" ")
    const [highSchoolStartYear, setHighSchoolStartYear] = React.useState(" ")
    const [highSchoolEndYear, setHighSchoolEndYear] = React.useState(" ")
    const [college, setCollege] = React.useState(" ")
    const [collegeStartYear, setCollegeStartYear] = React.useState(" ")
    const [collegeEndYear, setCollegeEndYear] = React.useState(" ")
    const [degree, setDegree] = React.useState(" ")
    const [jobOneTitle, setJobOneTitle] = React.useState(" ")
    const [jobOneCompany, setJobOneCompany] = React.useState(" ")
    const [jobOneDescription, setJobOneDescription] = React.useState(" ")
    const [jobOneStartDate, setJobOneStartDate] = React.useState(" ")
    const [jobOneEndDate, setJobOneEndDate] = React.useState(" ")
    const [jobTwoTitle, setJobTwoTitle] = React.useState(" ")
    const [jobTwoCompany, setJobTwoCompany] = React.useState(" ")
    const [jobTwoDescription, setJobTwoDescription] = React.useState(" ")
    const [jobTwoStartDate, setJobTwoStartDate] = React.useState(" ")
    const [jobTwoEndDate, setJobTwoEndDate] = React.useState(" ")
    const [jobThreeTitle, setJobThreeTitle] = React.useState(" ")
    const [jobThreeCompany, setJobThreeCompany] = React.useState(" ")
    const [jobThreeDescription, setJobThreeDescription] = React.useState(" ")
    const [jobThreeStartDate, setJobThreeStartDate] = React.useState(" ")
    const [jobThreeEndDate, setJobThreeEndDate] = React.useState(" ")
    const [skillOne, setSkillOne] = React.useState(" ")
    const [skillTwo, setSkillTwo] = React.useState(" ")
    const [skillThree, setSkillThree] = React.useState(" ")
    const [skillFour, setSkillFour] = React.useState(" ")
    const [skillFive, setSkillFive] = React.useState(" ")
    const [accomplishmentOne, setAccomplishmentOne] = React.useState(" ")
    const [accomplishmentTwo, setAccomplishmentTwo] = React.useState(" ")
    const [accomplishmentThree, setAccomplishmentThree] = React.useState(" ")

    useEffect(() => {
        console.log(user)
        async function ionViewCanEnter() {
            try {
                await Auth.currentAuthenticatedUser()
                setAuthStatus(true)
                setName(user.attributes.name)
                setFamilyName(user.attributes.family_name)
                setPicture(user.attributes.picture)
                setAbout(user.attributes["custom:about"])
                setLocation(user.attributes["custom:location"])
                setEmployer(user.attributes["custom:employer"])
                setCurrentPosition(user.attributes["custom:currentPosition"])
                setHighSchool(user.attributes["custom:highSchool"])
                setHighSchoolStartYear(
                    user.attributes["custom:highSchoolStartYear"]
                )
                setHighSchoolEndYear(
                    user.attributes["custom:highSchoolEndYear"]
                )

                setCollege(user.attributes["custom:college"])
                setCollegeStartYear(user.attributes["custom:collegeStartYear"])
                setCollegeEndYear(user.attributes["custom:collegeEndYear"])
                setDegree(user.attributes["custom:degree"])

                setJobOneTitle(user.attributes["custom:jobOneTitle"])
                setJobOneCompany(user.attributes["custom:jobOneCompany"])
                setJobOneDescription(
                    user.attributes["custom:jobOneDescription"]
                )
                setJobOneStartDate(user.attributes["custom:jobOneStartDate"])
                setJobOneEndDate(user.attributes["custom:jobOneEndDate"])

                setJobTwoTitle(user.attributes["custom:jobTwoTitle"])
                setJobTwoCompany(user.attributes["custom:jobTwoCompany"])
                setJobTwoDescription(
                    user.attributes["custom:jobTwoDescription"]
                )
                setJobTwoStartDate(user.attributes["custom:jobTwoStartDate"])
                setJobTwoEndDate(user.attributes["custom:jobTwoEndDate"])

                setJobThreeTitle(user.attributes["custom:jobThreeTitle"])
                setJobThreeCompany(user.attributes["custom:jobThreeCompany"])
                setJobThreeDescription(
                    user.attributes["custom:jobThreeDescription"]
                )
                setJobThreeStartDate(
                    user.attributes["custom:jobThreeStartDate"]
                )
                setJobThreeEndDate(user.attributes["custom:jobThreeEndDate"])

                setSkillOne(user.attributes["custom:skillOne"])
                setSkillTwo(user.attributes["custom:skillTwo"])
                setSkillThree(user.attributes["custom:skillThree"])
                setSkillFour(user.attributes["custom:skillFour"])
                setSkillFive(user.attributes["custom:skillFive"])

                setAccomplishmentOne(
                    user.attributes["custom:accomplishmentOne"]
                )
                setAccomplishmentTwo(
                    user.attributes["custom:accomplishmentTwo"]
                )
                setAccomplishmentThree(
                    user.attributes["custom:accomplishmentThree"]
                )
            } catch {
                setAuthStatus(false)
                router.push("/auth/signin?redirect=profile")
            }
        }
        ionViewCanEnter()
    }, [])

    const handleSignOut = async () => {
        try {
            await Auth.signOut()
            setAuthStatus(false)
            router.push("/auth/signin?redirect=profile")
        } catch (error) {
            console.log("error signing out: ", error)
        }
    }

    async function updateUser() {
        setIsLoading(true)
        let user = await Auth.currentAuthenticatedUser()
        await Auth.updateUserAttributes(user, {
            name: name,
            family_name: familyName,
            picture: picture,
            "custom:about": about,
            "custom:location": location,
            "custom:employer": employer,
            "custom:currentPosition": currentPosition,
            "custom:highSchool": highSchool,
            "custom:highSchoolStartYear": highSchoolStartYear,
            "custom:highSchoolEndYear": highSchoolEndYear,
            "custom:college": college,
            "custom:collegeStartYear": collegeStartYear,
            "custom:collegeEndYear": collegeEndYear,
            "custom:degree": degree,
            "custom:jobOneTitle": jobOneTitle,
            "custom:jobOneCompany": jobOneCompany,
            "custom:jobOneDescription": jobOneDescription,
            "custom:jobOneStartDate": jobOneStartDate,
            "custom:jobOneEndDate": jobOneEndDate,
            "custom:jobTwoTitle": jobTwoTitle,
            "custom:jobTwoCompany": jobTwoCompany,
            "custom:jobTwoDescription": jobTwoDescription,
            "custom:jobTwoStartDate": jobTwoStartDate,
            "custom:jobTwoEndDate": jobTwoEndDate,
            "custom:jobThreeTitle": jobThreeTitle,
            "custom:jobThreeCompany": jobThreeCompany,
            "custom:jobThreeDescription": jobThreeDescription,
            "custom:jobThreeStartDate": jobThreeStartDate,
            "custom:jobThreeEndDate": jobThreeEndDate,
            "custom:skillOne": skillOne,
            "custom:skillTwo": skillTwo,
            "custom:skillThree": skillThree,
            "custom:skillFour": skillFour,
            "custom:skillFive": skillFive,
            "custom:accomplishmentOne": accomplishmentOne,
            "custom:accomplishmentTwo": accomplishmentTwo,
            "custom:accomplishmentThree": accomplishmentThree,
        })
        user = await Auth.currentAuthenticatedUser()
        setUserData(user)
        setIsLoading(false)
    }

    const {
        isOpen: isOpenSectionOne,
        onOpen: onOpenSectionOne,
        onClose: onCloseSectionOne,
    } = useDisclosure()

    const {
        isOpen: isOpenSectionTwo,
        onOpen: onOpenSectionTwo,
        onClose: onCloseSectionTwo,
    } = useDisclosure()

    const {
        isOpen: isOpenSectionThree,
        onOpen: onOpenSectionThree,
        onClose: onCloseSectionThree,
    } = useDisclosure()

    const {
        isOpen: isOpenSectionFour,
        onOpen: onOpenSectionFour,
        onClose: onCloseSectionFour,
    } = useDisclosure()

    const {
        isOpen: isOpenSectionFive,
        onOpen: onOpenSectionFive,
        onClose: onCloseSectionFive,
    } = useDisclosure()


    if (authStatus) {
        return (
            <>
                <Container maxW="4xl" px={8} py={16} mx="auto">
                    <Grid
                        templateColumns={{ base: "1fr", md: "1fr 1fr" }}
                        gap={8}
                        shadow="lg"
                        rounded="lg"
                        bg={useColorModeValue("teal.200", "teal.600")}
                        border="1px"
                        borderColor={useColorModeValue("teal.600", "teal.200")}
                        mb={8}
                    >
                        <Modal
                            isCentered
                            onClose={onCloseSectionOne}
                            isOpen={isOpenSectionOne}
                            motionPreset="slideInBottom"
                            scrollBehavior="inside"
                        >
                            <ModalOverlay
                                bg={useColorModeValue(
                                    "whiteAlpha.500",
                                    "blackAlpha.500"
                                )}
                                backdropFilter="blur(10px)"
                            />
                            <ModalOverlay />
                            <ModalContent
                                bg={useColorModeValue("teal.200", "teal.600")}
                            >
                                <ModalHeader>Edit Section 1</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody>
                                    <Text
                                        fontSize="md"
                                        color={useColorModeValue(
                                            "black",
                                            "white"
                                        )}
                                        mt={2}
                                        mb={2}
                                    >
                                        First Name
                                    </Text>
                                    <Input
                                        value={name}
                                        placeholder="First Name"
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                        mt={2}
                                        mb={2}
                                    />
                                    <Text
                                        fontSize="md"
                                        color={useColorModeValue(
                                            "black",
                                            "white"
                                        )}
                                        mt={2}
                                        mb={2}
                                    >
                                        Last Name
                                    </Text>
                                    <Input
                                        value={familyName}
                                        placeholder="Last Name"
                                        onChange={(e) =>
                                            setFamilyName(e.target.value)
                                        }
                                    />
                                    <Text
                                        fontSize="md"
                                        color={useColorModeValue(
                                            "black",
                                            "white"
                                        )}
                                        mt={2}
                                        mb={2}
                                    >
                                        Profile Picture
                                    </Text>
                                    <Input
                                        value={picture}
                                        placeholder="Profile Picture URL"
                                        onChange={(e) =>
                                            setPicture(e.target.value)
                                        }
                                    />
                                    <Text
                                        fontSize="md"
                                        color={useColorModeValue(
                                            "black",
                                            "white"
                                        )}
                                        mt={2}
                                        mb={2}
                                    >
                                        About
                                    </Text>
                                    <Textarea
                                        value={about}
                                        placeholder="About"
                                        onChange={(e) =>
                                            setAbout(e.target.value)
                                        }
                                    />
                                    <Text
                                        fontSize="md"
                                        color={useColorModeValue(
                                            "black",
                                            "white"
                                        )}
                                        mt={2}
                                        mb={2}
                                    >
                                        Location
                                    </Text>
                                    <Input
                                        value={location}
                                        placeholder="Location"
                                        onChange={(e) =>
                                            setLocation(e.target.value)
                                        }
                                    />
                                    <Text
                                        fontSize="md"
                                        color={useColorModeValue(
                                            "black",
                                            "white"
                                        )}
                                        mt={2}
                                        mb={2}
                                    >
                                        Current Position
                                    </Text>
                                    <Input
                                        value={currentPosition}
                                        placeholder="Current Position"
                                        onChange={(e) =>
                                            setCurrentPosition(e.target.value)
                                        }
                                    />
                                </ModalBody>
                                <ModalFooter>
                                    <Button
                                        colorScheme="brand"
                                        mr={3}
                                        onClick={onCloseSectionOne}
                                        variant="ghost"
                                    >
                                        Close
                                    </Button>
                                    <Button
                                        onClick={async () => {
                                            await updateUser()
                                            onCloseSectionOne()
                                        }}
                                        isLoading={isLoading}
                                        colorScheme="brand"
                                    >
                                        Update
                                    </Button>
                                </ModalFooter>
                            </ModalContent>
                        </Modal>
                        <Box
                            gridColumn="span 10"
                            textAlign="center"
                            bg={useColorModeValue("teal.200", "teal.600")}
                            backgroundImage="profile-bg.jpg"
                            backgroundSize="cover"
                            backgroundPosition="center"
                            backgroundRepeat="no-repeat"
                            height="100%"
                            width="100%"
                            borderRadius="lg"
                            p={8}
                        >
                            <Box display="flex" justifyContent="right">
                                <IconButton
                                    icon={<FaPencilAlt />}
                                    aria-label={" "}
                                    onClick={onOpenSectionOne}
                                    colorScheme="brand"
                                    shadow="md"
                                />
                            </Box>
                            <Image
                                src={userData.attributes.picture}
                                alt="Profile Picture"
                                borderRadius="full"
                                boxSize="150px"
                                shadow="lg"
                                border="5px solid"
                                borderColor={useColorModeValue(
                                    "teal.600",
                                    "teal.200"
                                )}
                            />
                        </Box>
                        <Box gridColumn="span 8" p={8}>
                            <Text fontSize="4xl" fontWeight="bold">
                                {userData.attributes.name}{" "}
                                {userData.attributes.family_name}
                            </Text>
                            <Text fontSize="2xl">
                                {userData.attributes["custom:currentPosition"]}
                            </Text>
                            <Text fontSize="xl">
                                {userData.attributes["custom:location"]}
                            </Text>
                            <Text fontSize="xl">
                                {userData.attributes["custom:about"]}
                            </Text>
                        </Box>
                    </Grid>
                    <Grid
                        templateColumns={{ base: "1fr", md: "1fr 1fr" }}
                        gap={8}
                        shadow="lg"
                        rounded="lg"
                        bg={useColorModeValue("teal.200", "teal.600")}
                        border="1px"
                        borderColor={useColorModeValue("teal.600", "teal.200")}
                        mb={8}
                    >
                        <Modal
                            isCentered
                            onClose={onCloseSectionTwo}
                            isOpen={isOpenSectionTwo}
                            motionPreset="slideInBottom"
                            scrollBehavior="inside"
                        >
                            <ModalOverlay
                                bg={useColorModeValue(
                                    "whiteAlpha.500",
                                    "blackAlpha.500"
                                )}
                                backdropFilter="blur(10px)"
                            />
                            <ModalOverlay />
                            <ModalContent
                                bg={useColorModeValue("teal.200", "teal.600")}
                            >
                                <ModalHeader>Edit Section 2</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody>
                                    <Tabs
                                        isFitted
                                        variant="solid-rounded"
                                        colorScheme="brand"
                                    >
                                        <TabList
                                            mb="1em"
                                            bg={useColorModeValue(
                                                "teal.200",
                                                "teal.600"
                                            )}
                                        >
                                            <Tab>High School</Tab>
                                            <Tab>College</Tab>
                                        </TabList>
                                        <TabPanels>
                                            <TabPanel>
                                                <Text
                                                    fontSize="md"
                                                    color={useColorModeValue(
                                                        "black",
                                                        "white"
                                                    )}
                                                    mt={2}
                                                    mb={2}
                                                >
                                                    High School
                                                </Text>
                                                <Input
                                                    value={highSchool}
                                                    placeholder="High School"
                                                    onChange={(e) =>
                                                        setHighSchool(
                                                            e.target.value
                                                        )
                                                    }
                                                    mt={2}
                                                    mb={2}
                                                />
                                                <Text
                                                    fontSize="md"
                                                    color={useColorModeValue(
                                                        "black",
                                                        "white"
                                                    )}
                                                    mt={2}
                                                    mb={2}
                                                >
                                                    High School Start Year
                                                </Text>
                                                <Input
                                                    value={highSchoolStartYear}
                                                    placeholder="High School Start Year"
                                                    onChange={(e) =>
                                                        setHighSchoolStartYear(
                                                            e.target.value
                                                        )
                                                    }
                                                    mt={2}
                                                    mb={2}
                                                />
                                                <Text
                                                    fontSize="md"
                                                    color={useColorModeValue(
                                                        "black",
                                                        "white"
                                                    )}
                                                    mt={2}
                                                    mb={2}
                                                >
                                                    High School End Year
                                                </Text>
                                                <Input
                                                    value={highSchoolEndYear}
                                                    placeholder="High School End Year"
                                                    onChange={(e) =>
                                                        setHighSchoolEndYear(
                                                            e.target.value
                                                        )
                                                    }
                                                    mt={2}
                                                    mb={2}
                                                />
                                            </TabPanel>

                                            <TabPanel>
                                                <Text
                                                    fontSize="md"
                                                    color={useColorModeValue(
                                                        "black",
                                                        "white"
                                                    )}
                                                    mt={2}
                                                    mb={2}
                                                >
                                                    College
                                                </Text>
                                                <Input
                                                    value={college}
                                                    placeholder="College"
                                                    onChange={(e) =>
                                                        setCollege(
                                                            e.target.value
                                                        )
                                                    }
                                                    mt={2}
                                                    mb={2}
                                                />
                                                <Text
                                                    fontSize="md"
                                                    color={useColorModeValue(
                                                        "black",
                                                        "white"
                                                    )}
                                                    mt={2}
                                                    mb={2}
                                                >
                                                    College Start Year
                                                </Text>
                                                <Input
                                                    value={collegeStartYear}
                                                    placeholder="College Start Year"
                                                    onChange={(e) =>
                                                        setCollegeStartYear(
                                                            e.target.value
                                                        )
                                                    }
                                                    mt={2}
                                                    mb={2}
                                                />
                                                <Text
                                                    fontSize="md"
                                                    color={useColorModeValue(
                                                        "black",
                                                        "white"
                                                    )}
                                                    mt={2}
                                                    mb={2}
                                                >
                                                    College End Year
                                                </Text>
                                                <Input
                                                    value={collegeEndYear}
                                                    placeholder="College End Year"
                                                    onChange={(e) =>
                                                        setCollegeEndYear(
                                                            e.target.value
                                                        )
                                                    }
                                                    mt={2}
                                                    mb={2}
                                                />
                                            </TabPanel>
                                        </TabPanels>
                                    </Tabs>
                                </ModalBody>
                                <ModalFooter>
                                    <Button
                                        colorScheme="brand"
                                        mr={3}
                                        onClick={onCloseSectionTwo}
                                        variant="ghost"
                                    >
                                        Close
                                    </Button>
                                    <Button
                                        onClick={async () => {
                                            await updateUser()
                                            onCloseSectionTwo()
                                        }}
                                        isLoading={isLoading}
                                        colorScheme="brand"
                                    >
                                        Update
                                    </Button>
                                </ModalFooter>
                            </ModalContent>
                        </Modal>

                        <Box gridColumn="span 8" p={8}>
                            <Box display="flex" justifyContent="right">
                                <IconButton
                                    icon={<FaPencilAlt />}
                                    aria-label={" "}
                                    onClick={onOpenSectionTwo}
                                    colorScheme="brand"
                                    shadow="md"
                                />
                            </Box>
                            <Text fontSize="4xl" fontWeight="bold">
                                Education
                            </Text>
                            <Text fontSize="2xl" fontWeight="semibold">
                                High School
                            </Text>
                            <Text fontSize="xl">
                                {userData.attributes["custom:highSchool"]} -{" "}
                                {
                                    userData.attributes[
                                        "custom:highSchoolStartYear"
                                    ]
                                }{" "}
                                -{" "}
                                {
                                    userData.attributes[
                                        "custom:highSchoolEndYear"
                                    ]
                                }
                            </Text>
                            <Text fontSize="2xl" fontWeight="semibold">
                                College
                            </Text>
                            <Text fontSize="xl">
                                {userData.attributes["custom:college"]} -{" "}
                                {userData.attributes["custom:collegeStartYear"]}{" "}
                                - {userData.attributes["custom:collegeEndYear"]}
                            </Text>
                        </Box>
                    </Grid>
                    <Grid
                        templateColumns={{ base: "1fr", md: "1fr 1fr" }}
                        gap={8}
                        shadow="lg"
                        rounded="lg"
                        bg={useColorModeValue("teal.200", "teal.600")}
                        border="1px"
                        borderColor={useColorModeValue("teal.600", "teal.200")}
                        mb={8}
                    >
                        <Modal
                            isCentered
                            onClose={onCloseSectionThree}
                            isOpen={isOpenSectionThree}
                            motionPreset="slideInBottom"
                            scrollBehavior="inside"
                        >
                            <ModalOverlay
                                bg={useColorModeValue(
                                    "whiteAlpha.500",
                                    "blackAlpha.500"
                                )}
                                backdropFilter="blur(10px)"
                            />
                            <ModalOverlay />
                            <ModalContent
                                bg={useColorModeValue("teal.200", "teal.600")}
                            >
                                <ModalHeader>Edit Section 3</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody>
                                    <Text
                                        fontSize="md"
                                        color={useColorModeValue(
                                            "black",
                                            "white"
                                        )}
                                        mt={2}
                                        mb={2}
                                    >
                                        Skill One
                                    </Text>
                                    <Input
                                        value={skillOne}
                                        placeholder="Skill One"
                                        onChange={(e) =>
                                            setSkillOne(e.target.value)
                                        }
                                        mt={2}
                                        mb={2}
                                    />
                                    <Text
                                        fontSize="md"
                                        color={useColorModeValue(
                                            "black",
                                            "white"
                                        )}
                                        mt={2}
                                        mb={2}
                                    >
                                        Skill Two
                                    </Text>
                                    <Input
                                        value={skillTwo}
                                        placeholder="Skill Two"
                                        onChange={(e) =>
                                            setSkillTwo(e.target.value)
                                        }
                                    />
                                    <Text
                                        fontSize="md"
                                        color={useColorModeValue(
                                            "black",
                                            "white"
                                        )}
                                        mt={2}
                                        mb={2}
                                    >
                                        Skill Three
                                    </Text>
                                    <Input
                                        value={skillThree}
                                        placeholder="Skill Three"
                                        onChange={(e) =>
                                            setSkillThree(e.target.value)
                                        }
                                    />
                                    <Text
                                        fontSize="md"
                                        color={useColorModeValue(
                                            "black",
                                            "white"
                                        )}
                                        mt={2}
                                        mb={2}
                                    >
                                        Skill Four
                                    </Text>
                                    <Input
                                        value={skillFour}
                                        placeholder="Skill Four"
                                        onChange={(e) =>
                                            setSkillFour(e.target.value)
                                        }
                                    />
                                    <Text
                                        fontSize="md"
                                        color={useColorModeValue(
                                            "black",
                                            "white"
                                        )}
                                        mt={2}
                                        mb={2}
                                    >
                                        Skill Five
                                    </Text>
                                    <Input
                                        value={skillFive}
                                        placeholder="Skill Five"
                                        onChange={(e) =>
                                            setSkillFive(e.target.value)
                                        }
                                    />
                                </ModalBody>
                                <ModalFooter>
                                    <Button
                                        colorScheme="brand"
                                        mr={3}
                                        onClick={onCloseSectionThree}
                                        variant="ghost"
                                    >
                                        Close
                                    </Button>
                                    <Button
                                        onClick={async () => {
                                            await updateUser()
                                            onCloseSectionThree()
                                        }}
                                        isLoading={isLoading}
                                        colorScheme="brand"
                                    >
                                        Update
                                    </Button>
                                </ModalFooter>
                            </ModalContent>
                        </Modal>
                        <Box gridColumn="span 4" p={8}>
                            <Box display="flex" justifyContent="right">
                                <IconButton
                                    icon={<FaPencilAlt />}
                                    aria-label={" "}
                                    onClick={onOpenSectionThree}
                                    colorScheme="brand"
                                    shadow="md"
                                />
                            </Box>
                            <Text fontSize="4xl" fontWeight="bold">
                                Skills
                            </Text>
                            <Text fontSize="2xl">
                                - {userData.attributes["custom:skillOne"]}
                            </Text>
                            <Text fontSize="2xl">
                                - {userData.attributes["custom:skillTwo"]}
                            </Text>
                            <Text fontSize="2xl">
                                - {userData.attributes["custom:skillThree"]}
                            </Text>
                            <Text fontSize="2xl">
                                - {userData.attributes["custom:skillFour"]}
                            </Text>
                            <Text fontSize="2xl">
                                - {userData.attributes["custom:skillFive"]}
                            </Text>
                        </Box>
                    </Grid>
                    <Grid
                        templateColumns={{ base: "1fr", md: "1fr 1fr" }}
                        gap={8}
                        shadow="lg"
                        rounded="lg"
                        bg={useColorModeValue("teal.200", "teal.600")}
                        border="1px"
                        borderColor={useColorModeValue("teal.600", "teal.200")}
                        mb={8}
                    >
                        <Modal
                            isCentered
                            onClose={onCloseSectionFour}
                            isOpen={isOpenSectionFour}
                            motionPreset="slideInBottom"
                            scrollBehavior="inside"
                        >
                            <ModalOverlay
                                bg={useColorModeValue(
                                    "whiteAlpha.500",
                                    "blackAlpha.500"
                                )}
                                backdropFilter="blur(10px)"
                            />
                            <ModalOverlay />
                            <ModalContent
                                bg={useColorModeValue("teal.200", "teal.600")}
                            >
                                <ModalHeader>Edit Section 2</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody>
                                    <Tabs
                                        isFitted
                                        variant="solid-rounded"
                                        colorScheme="brand"
                                    >
                                        <TabList
                                            mb="1em"
                                            bg={useColorModeValue(
                                                "teal.200",
                                                "teal.600"
                                            )}
                                        >
                                            <Tab>High School</Tab>
                                            <Tab>College</Tab>
                                        </TabList>
                                        <TabPanels>
                                            <TabPanel>
                                                <Text
                                                    fontSize="md"
                                                    color={useColorModeValue(
                                                        "black",
                                                        "white"
                                                    )}
                                                    mt={2}
                                                    mb={2}
                                                >
                                                    High School
                                                </Text>
                                                <Input
                                                    value={highSchool}
                                                    placeholder="High School"
                                                    onChange={(e) =>
                                                        setHighSchool(
                                                            e.target.value
                                                        )
                                                    }
                                                    mt={2}
                                                    mb={2}
                                                />
                                                <Text
                                                    fontSize="md"
                                                    color={useColorModeValue(
                                                        "black",
                                                        "white"
                                                    )}
                                                    mt={2}
                                                    mb={2}
                                                >
                                                    High School Start Year
                                                </Text>
                                                <Input
                                                    value={highSchoolStartYear}
                                                    placeholder="High School Start Year"
                                                    onChange={(e) =>
                                                        setHighSchoolStartYear(
                                                            e.target.value
                                                        )
                                                    }
                                                    mt={2}
                                                    mb={2}
                                                />
                                                <Text
                                                    fontSize="md"
                                                    color={useColorModeValue(
                                                        "black",
                                                        "white"
                                                    )}
                                                    mt={2}
                                                    mb={2}
                                                >
                                                    High School End Year
                                                </Text>
                                                <Input
                                                    value={highSchoolEndYear}
                                                    placeholder="High School End Year"
                                                    onChange={(e) =>
                                                        setHighSchoolEndYear(
                                                            e.target.value
                                                        )
                                                    }
                                                    mt={2}
                                                    mb={2}
                                                />
                                            </TabPanel>

                                            <TabPanel>
                                                <Text
                                                    fontSize="md"
                                                    color={useColorModeValue(
                                                        "black",
                                                        "white"
                                                    )}
                                                    mt={2}
                                                    mb={2}
                                                >
                                                    College
                                                </Text>
                                                <Input
                                                    value={college}
                                                    placeholder="College"
                                                    onChange={(e) =>
                                                        setCollege(
                                                            e.target.value
                                                        )
                                                    }
                                                    mt={2}
                                                    mb={2}
                                                />
                                                <Text
                                                    fontSize="md"
                                                    color={useColorModeValue(
                                                        "black",
                                                        "white"
                                                    )}
                                                    mt={2}
                                                    mb={2}
                                                >
                                                    College Start Year
                                                </Text>
                                                <Input
                                                    value={collegeStartYear}
                                                    placeholder="College Start Year"
                                                    onChange={(e) =>
                                                        setCollegeStartYear(
                                                            e.target.value
                                                        )
                                                    }
                                                    mt={2}
                                                    mb={2}
                                                />
                                                <Text
                                                    fontSize="md"
                                                    color={useColorModeValue(
                                                        "black",
                                                        "white"
                                                    )}
                                                    mt={2}
                                                    mb={2}
                                                >
                                                    College End Year
                                                </Text>
                                                <Input
                                                    value={collegeEndYear}
                                                    placeholder="College End Year"
                                                    onChange={(e) =>
                                                        setCollegeEndYear(
                                                            e.target.value
                                                        )
                                                    }
                                                    mt={2}
                                                    mb={2}
                                                />
                                            </TabPanel>
                                        </TabPanels>
                                    </Tabs>
                                </ModalBody>
                                <ModalFooter>
                                    <Button
                                        colorScheme="brand"
                                        mr={3}
                                        onClick={onCloseSectionFour}
                                        variant="ghost"
                                    >
                                        Close
                                    </Button>
                                    <Button
                                        onClick={async () => {
                                            await updateUser()
                                            onCloseSectionFour()
                                           
                                        }}
                                        isLoading={isLoading}
                                        colorScheme="brand"
                                    >
                                        Update
                                    </Button>
                                </ModalFooter>
                            </ModalContent>
                        </Modal>

                        <Box gridColumn="span 8" p={8}>
                            <Box display="flex" justifyContent="right">
                                <IconButton
                                    icon={<FaPencilAlt />}
                                    aria-label={" "}
                                    onClick={onOpenSectionTwo}
                                    colorScheme="brand"
                                    shadow="md"
                                />
                            </Box>
                            <Text fontSize="4xl" fontWeight="bold">
                                Work Experience
                            </Text>
                            <Text fontSize="2xl" fontWeight="semibold">
                                Job 1
                            </Text>
                            <Text fontSize="xl">
                                {userData.attributes["custom:jobOneTitle"]} -{" "}
                                {
                                    userData.attributes[
                                        "custom:highSchoolStartYear"
                                    ]
                                }{" "}
                                -{" "}
                                {
                                    userData.attributes[
                                        "custom:highSchoolEndYear"
                                    ]
                                }
                            </Text>
                            <Text fontSize="2xl" fontWeight="semibold">
                                College
                            </Text>
                            <Text fontSize="xl">
                                {userData.attributes["custom:college"]} -{" "}
                                {userData.attributes["custom:collegeStartYear"]}{" "}
                                - {userData.attributes["custom:collegeEndYear"]}
                            </Text>
                        </Box>
                    </Grid>
                </Container>
            </>
        )
    }
}

export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
    const auth = withSSRContext(ctx).Auth as typeof Auth

    let user: any
    try {
        user = await auth.currentAuthenticatedUser()

        console.log("user is authenticated:", user)
        return { props: { user: JSON.parse(JSON.stringify(user)) } }
    } catch (err) {
        console.log("error: no authenticated user")
        return { props: { user: null } }
    }
}

export default Profile
