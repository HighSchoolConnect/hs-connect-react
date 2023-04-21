import React, { useEffect } from "react"
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
import { useRouter } from "next/router"
import { FaPencilAlt } from "react-icons/fa"
import { UserAuth } from "@/context/AuthContext"
import { doc, updateDoc } from "@firebase/firestore"
import { auth, db } from "@/lib/Firebase"
import Head from "next/head"

const Profile = () => {
    const { user } = UserAuth()
    const [isLoading, setIsLoading] = React.useState(false)

    const [displayName, setDisplayName] = React.useState(user?.displayName)
    const [photoURL, setPhotoURL] = React.useState(user?.photoURL)
    const [about, setAbout] = React.useState(user?.about)
    const [location, setLocation] = React.useState(user?.location)
    // const [employer, setEmployer] = React.useState(user?.employer)
    const [currentPosition, setCurrentPosition] = React.useState(
        user?.currentPosition
    )
    const [highSchool, setHighSchool] = React.useState(user?.education)
    const [highSchoolStartYear, setHighSchoolStartYear] = React.useState(
        user?.HSGradMonth
    )
    const [highSchoolEndYear, setHighSchoolEndYear] = React.useState(
        user?.HSGradYear
    )
    const [college, setCollege] = React.useState(user?.undergradCollege)
    const [collegeStartYear, setCollegeStartYear] = React.useState(
        user?.UStartYear
    )
    const [collegeEndYear, setCollegeEndYear] = React.useState(user?.UEndYear)
    const [degree, setDegree] = React.useState(user?.degree)
    const [jobOneTitle, setJobOneTitle] = React.useState(user?.jobTitle1)
    const [jobOneCompany, setJobOneCompany] = React.useState(user?.jobComp1)
    const [jobOneDescription, setJobOneDescription] = React.useState(
        user?.jobDescription1
    )
    const [jobOneStartDate, setJobOneStartDate] = React.useState(
        user?.jobStart1
    )
    const [jobOneEndDate, setJobOneEndDate] = React.useState(user?.jobEnd1)
    const [jobTwoTitle, setJobTwoTitle] = React.useState(user?.jobTitle2)
    const [jobTwoCompany, setJobTwoCompany] = React.useState(user?.jobComp2)
    const [jobTwoDescription, setJobTwoDescription] = React.useState(
        user?.jobDescription2
    )
    const [jobTwoStartDate, setJobTwoStartDate] = React.useState(
        user?.jobStart2
    )
    const [jobTwoEndDate, setJobTwoEndDate] = React.useState(user?.jobEnd2)
    const [jobThreeTitle, setJobThreeTitle] = React.useState(user?.jobTitle3)
    const [jobThreeCompany, setJobThreeCompany] = React.useState(user?.jobComp3)
    const [jobThreeDescription, setJobThreeDescription] = React.useState(
        user?.jobDescription3
    )
    const [jobThreeStartDate, setJobThreeStartDate] = React.useState(
        user?.jobStart3
    )
    const [jobThreeEndDate, setJobThreeEndDate] = React.useState(user?.jobEnd3)
    const [skillOne, setSkillOne] = React.useState(user?.skill1)
    const [skillTwo, setSkillTwo] = React.useState(user?.skill2)
    const [skillThree, setSkillThree] = React.useState(user?.skill3)
    const [skillFour, setSkillFour] = React.useState(user?.skill4)
    const [skillFive, setSkillFive] = React.useState(user?.skill5)
    const [accomplishmentOne, setAccomplishmentOne] = React.useState(user?.ac1)
    const [accomplishmentTwo, setAccomplishmentTwo] = React.useState(user?.ac2)
    const [accomplishmentThree, setAccomplishmentThree] = React.useState(
        user?.ac3
    )

    useEffect(() => {
        if (user) {
            setDisplayName(user.displayName)
            setPhotoURL(user.photoURL)
            setAbout(user.about)
            setLocation(user.location)
            setCurrentPosition(user.currentPosition)
            setHighSchool(user.education)
            setHighSchoolStartYear(user.HSGradMonth)
            setHighSchoolEndYear(user.HSGradYear)
            setCollege(user.undergradCollege)
            setCollegeStartYear(user.UStartYear)
            setCollegeEndYear(user.UEndYear)
            setDegree(user.degree)
            setJobOneTitle(user.jobTitle1)
            setJobOneCompany(user.jobComp1)
            setJobOneDescription(user.jobDescription1)
            setJobOneStartDate(user.jobStart1)
            setJobOneEndDate(user.jobEnd1)
            setJobTwoTitle(user.jobTitle2)
            setJobTwoCompany(user.jobComp2)
            setJobTwoDescription(user.jobDescription2)
            setJobTwoStartDate(user.jobStart2)
            setJobTwoEndDate(user.jobEnd2)
            setJobThreeTitle(user.jobTitle3)
            setJobThreeCompany(user.jobComp3)
            setJobThreeDescription(user.jobDescription3)
            setJobThreeStartDate(user.jobStart3)
            setJobThreeEndDate(user.jobEnd3)
            setSkillOne(user.skill1)
            setSkillTwo(user.skill2)
            setSkillThree(user.skill3)
            setSkillFour(user.skill4)
            setSkillFive(user.skill5)
            setAccomplishmentOne(user.ac1)
            setAccomplishmentTwo(user.ac2)
            setAccomplishmentThree(user.ac3)
        } else {
        }
    }, [user])

    const updateUser = async () => {
        setIsLoading(true)
        //@ts-ignore
        const userCollectionRef = await doc(db, "users", auth?.currentUser?.uid)
        const user = {
            displayName,
            photoURL,
            about,
            location,
            currentPosition,
            education: highSchool,
            HSGradMonth: highSchoolStartYear,
            HSGradYear: highSchoolEndYear,
            undergradCollege: college,
            UStartYear: collegeStartYear,
            UEndYear: collegeEndYear,
            degree,
            jobTitle1: jobOneTitle,
            jobComp1: jobOneCompany,
            jobDescription1: jobOneDescription,
            jobStart1: jobOneStartDate,
            jobEnd1: jobOneEndDate,
            jobTitle2: jobTwoTitle,
            jobComp2: jobTwoCompany,
            jobDescription2: jobTwoDescription,
            jobStart2: jobTwoStartDate,
            jobEnd2: jobTwoEndDate,
            jobTitle3: jobThreeTitle,
            jobComp3: jobThreeCompany,
            jobDescription3: jobThreeDescription,
            jobStart3: jobThreeStartDate,
            jobEnd3: jobThreeEndDate,
            skill1: skillOne,
            skill2: skillTwo,
            skill3: skillThree,
            skill4: skillFour,
            skill5: skillFive,
            ac1: accomplishmentOne,
            ac2: accomplishmentTwo,
            ac3: accomplishmentThree,
        }
        await updateDoc(userCollectionRef, user)
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

    const teal200tTo600 = useColorModeValue("teal.200", "teal.600")
    const teal600To200 = useColorModeValue("teal.600", "teal.200")
    const overlayBackground = useColorModeValue(
        "whiteAlpha.500",
        "blackAlpha.500"
    )
    const blackToWhite = useColorModeValue("black", "white")

    return (
        <>
            <Head>
                <title> {user?.displayName} | HS Connect</title>
            </Head>
            <Container maxW="4xl" px={8} py={16} mx="auto">
                <Grid
                    templateColumns={{ base: "1fr", md: "1fr 1fr" }}
                    gap={8}
                    shadow="lg"
                    rounded="lg"
                    bg={teal200tTo600}
                    border="1px"
                    borderColor={teal600To200}
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
                            bg={overlayBackground}
                            backdropFilter="blur(10px)"
                        />
                        <ModalOverlay />
                        <ModalContent bg={teal200tTo600}>
                            <ModalHeader>Edit Section 1</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                <Text
                                    fontSize="md"
                                    color={blackToWhite}
                                    mt={2}
                                    mb={2}
                                >
                                    Name
                                </Text>
                                <Input
                                    value={displayName}
                                    placeholder="Name"
                                    onChange={(e) =>
                                        setDisplayName(e.target.value)
                                    }
                                    mt={2}
                                    mb={2}
                                />
                                <Text
                                    fontSize="md"
                                    color={blackToWhite}
                                    mt={2}
                                    mb={2}
                                >
                                    Profile Picture
                                </Text>
                                <Input
                                    value={photoURL}
                                    placeholder="Profile Picture URL"
                                    onChange={(e) =>
                                        setPhotoURL(e.target.value)
                                    }
                                />
                                <Text
                                    fontSize="md"
                                    color={blackToWhite}
                                    mt={2}
                                    mb={2}
                                >
                                    About
                                </Text>
                                <Textarea
                                    value={about}
                                    placeholder="About"
                                    onChange={(e) => setAbout(e.target.value)}
                                />
                                <Text
                                    fontSize="md"
                                    color={blackToWhite}
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
                                    color={blackToWhite}
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
                        bg={teal200tTo600}
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
                            src={photoURL || "/person.svg"}
                            alt="Profile Picture"
                            borderRadius="full"
                            boxSize="150px"
                            shadow="lg"
                            border="5px solid"
                            borderColor={teal600To200}
                        />
                    </Box>
                    <Box gridColumn="span 8" p={8}>
                        <Text fontSize="4xl" fontWeight="bold">
                            {displayName}
                        </Text>
                        <Text fontSize="2xl">{currentPosition}</Text>
                        <Text fontSize="xl">{location}</Text>
                        <Text fontSize="xl">{about}</Text>
                    </Box>
                </Grid>
                <Grid
                    templateColumns={{ base: "1fr", md: "1fr 1fr" }}
                    gap={8}
                    shadow="lg"
                    rounded="lg"
                    bg={teal200tTo600}
                    border="1px"
                    borderColor={teal600To200}
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
                            bg={overlayBackground}
                            backdropFilter="blur(10px)"
                        />
                        <ModalOverlay />
                        <ModalContent bg={teal200tTo600}>
                            <ModalHeader>Edit Section 2</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                <Tabs
                                    isFitted
                                    variant="solid-rounded"
                                    colorScheme="brand"
                                >
                                    <TabList mb="1em" bg={teal200tTo600}>
                                        <Tab>High School</Tab>
                                        <Tab>College</Tab>
                                    </TabList>
                                    <TabPanels>
                                        <TabPanel>
                                            <Text
                                                fontSize="md"
                                                color={blackToWhite}
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
                                                color={blackToWhite}
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
                                                color={blackToWhite}
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
                                                color={blackToWhite}
                                                mt={2}
                                                mb={2}
                                            >
                                                College
                                            </Text>
                                            <Input
                                                value={college}
                                                placeholder="College"
                                                onChange={(e) =>
                                                    setCollege(e.target.value)
                                                }
                                                mt={2}
                                                mb={2}
                                            />
                                            <Text
                                                fontSize="md"
                                                color={blackToWhite}
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
                                                color={blackToWhite}
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
                            {highSchool} - {highSchoolStartYear} -{" "}
                            {highSchoolEndYear}
                        </Text>
                        <Text fontSize="2xl" fontWeight="semibold">
                            College
                        </Text>
                        <Text fontSize="xl">
                            {college} - {collegeStartYear} - {collegeEndYear}
                        </Text>
                    </Box>
                </Grid>
                <Grid
                    templateColumns={{ base: "1fr", md: "1fr 1fr" }}
                    gap={8}
                    shadow="lg"
                    rounded="lg"
                    bg={teal200tTo600}
                    border="1px"
                    borderColor={teal600To200}
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
                            bg={overlayBackground}
                            backdropFilter="blur(10px)"
                        />
                        <ModalOverlay />
                        <ModalContent bg={teal200tTo600}>
                            <ModalHeader>Edit Section 3</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                <Text
                                    fontSize="md"
                                    color={blackToWhite}
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
                                    color={blackToWhite}
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
                                    color={blackToWhite}
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
                                    color={blackToWhite}
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
                                    color={blackToWhite}
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
                        <Text fontSize="2xl">- {skillOne}</Text>
                        <Text fontSize="2xl">- {skillTwo}</Text>
                        <Text fontSize="2xl">- {skillThree}</Text>
                        <Text fontSize="2xl">- {skillFour}</Text>
                        <Text fontSize="2xl">- {skillFive}</Text>
                    </Box>
                </Grid>
                <Grid
                    templateColumns={{ base: "1fr", md: "1fr 1fr" }}
                    gap={8}
                    shadow="lg"
                    rounded="lg"
                    bg={teal200tTo600}
                    border="1px"
                    borderColor={teal600To200}
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
                            bg={overlayBackground}
                            backdropFilter="blur(10px)"
                        />
                        <ModalOverlay />
                        <ModalContent bg={teal200tTo600}>
                            <ModalHeader>Edit Section 4</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                <Tabs
                                    isFitted
                                    variant="solid-rounded"
                                    colorScheme="brand"
                                >
                                    <TabList mb="1em" bg={teal200tTo600}>
                                        <Tab>Job One</Tab>
                                        <Tab>Job Two</Tab>
                                        <Tab>Job Three</Tab>
                                    </TabList>
                                    <TabPanels>
                                        <TabPanel>
                                            <Text
                                                fontSize="md"
                                                color={blackToWhite}
                                                mt={2}
                                                mb={2}
                                            >
                                                Job One Title
                                            </Text>
                                            <Input
                                                value={jobOneTitle}
                                                placeholder="Job One Title"
                                                onChange={(e) =>
                                                    setJobOneTitle(
                                                        e.target.value
                                                    )
                                                }
                                                mt={2}
                                                mb={2}
                                            />
                                            <Text
                                                fontSize="md"
                                                color={blackToWhite}
                                                mt={2}
                                                mb={2}
                                            >
                                                Job One Company
                                            </Text>
                                            <Input
                                                value={jobOneCompany}
                                                placeholder="Job One Company"
                                                onChange={(e) =>
                                                    setJobOneCompany(
                                                        e.target.value
                                                    )
                                                }
                                                mt={2}
                                                mb={2}
                                            />
                                            <Text
                                                fontSize="md"
                                                color={blackToWhite}
                                                mt={2}
                                                mb={2}
                                            >
                                                Job One Start Date
                                            </Text>
                                            <Input
                                                value={jobOneStartDate}
                                                placeholder="Job One Start Date"
                                                onChange={(e) =>
                                                    setJobOneStartDate(
                                                        e.target.value
                                                    )
                                                }
                                                mt={2}
                                                mb={2}
                                            />
                                            <Text
                                                fontSize="md"
                                                color={blackToWhite}
                                                mt={2}
                                                mb={2}
                                            >
                                                Job One End Date
                                            </Text>
                                            <Input
                                                value={jobOneEndDate}
                                                placeholder="Job One End Date"
                                                onChange={(e) =>
                                                    setJobOneEndDate(
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
                                                color={blackToWhite}
                                                mt={2}
                                                mb={2}
                                            >
                                                Job Two Title
                                            </Text>
                                            <Input
                                                value={jobTwoTitle}
                                                placeholder="Job Two Title"
                                                onChange={(e) =>
                                                    setJobTwoTitle(
                                                        e.target.value
                                                    )
                                                }
                                                mt={2}
                                                mb={2}
                                            />
                                            <Text
                                                fontSize="md"
                                                color={blackToWhite}
                                                mt={2}
                                                mb={2}
                                            >
                                                Job Two Company
                                            </Text>
                                            <Input
                                                value={jobTwoCompany}
                                                placeholder="Job Two Company"
                                                onChange={(e) =>
                                                    setJobTwoCompany(
                                                        e.target.value
                                                    )
                                                }
                                                mt={2}
                                                mb={2}
                                            />
                                            <Text
                                                fontSize="md"
                                                color={blackToWhite}
                                                mt={2}
                                                mb={2}
                                            >
                                                Job Two Start Date
                                            </Text>
                                            <Input
                                                value={jobTwoStartDate}
                                                placeholder="Job Two Start Date"
                                                onChange={(e) =>
                                                    setJobTwoStartDate(
                                                        e.target.value
                                                    )
                                                }
                                                mt={2}
                                                mb={2}
                                            />
                                            <Text
                                                fontSize="md"
                                                color={blackToWhite}
                                                mt={2}
                                                mb={2}
                                            >
                                                Job Two End Date
                                            </Text>
                                            <Input
                                                value={jobTwoEndDate}
                                                placeholder="Job Two End Date"
                                                onChange={(e) =>
                                                    setJobTwoEndDate(
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
                                                color={blackToWhite}
                                                mt={2}
                                                mb={2}
                                            >
                                                Job Three Title
                                            </Text>
                                            <Input
                                                value={jobThreeTitle}
                                                placeholder="Job Three Title"
                                                onChange={(e) =>
                                                    setJobThreeTitle(
                                                        e.target.value
                                                    )
                                                }
                                                mt={2}
                                                mb={2}
                                            />
                                            <Text
                                                fontSize="md"
                                                color={blackToWhite}
                                                mt={2}
                                                mb={2}
                                            >
                                                Job Three Company
                                            </Text>
                                            <Input
                                                value={jobThreeCompany}
                                                placeholder="Job Three Company"
                                                onChange={(e) =>
                                                    setJobThreeCompany(
                                                        e.target.value
                                                    )
                                                }
                                                mt={2}
                                                mb={2}
                                            />
                                            <Text
                                                fontSize="md"
                                                color={blackToWhite}
                                                mt={2}
                                                mb={2}
                                            >
                                                Job Three Start Date
                                            </Text>
                                            <Input
                                                value={jobThreeStartDate}
                                                placeholder="Job Three Start Date"
                                                onChange={(e) =>
                                                    setJobThreeStartDate(
                                                        e.target.value
                                                    )
                                                }
                                                mt={2}
                                                mb={2}
                                            />
                                            <Text
                                                fontSize="md"
                                                color={blackToWhite}
                                                mt={2}
                                                mb={2}
                                            >
                                                Job Three End Date
                                            </Text>
                                            <Input
                                                value={jobThreeEndDate}
                                                placeholder="Job Three End Date"
                                                onChange={(e) =>
                                                    setJobThreeEndDate(
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
                                onClick={onOpenSectionFour}
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
                            {jobOneTitle} - {jobOneCompany} <br />{" "}
                            {jobOneStartDate} - {jobOneEndDate}
                        </Text>
                        <Text fontSize="2xl" fontWeight="semibold">
                            Job 2
                        </Text>
                        <Text fontSize="xl">
                            {jobTwoTitle} - {jobTwoCompany} <br />{" "}
                            {jobTwoStartDate} - {jobTwoEndDate}
                        </Text>
                        <Text fontSize="2xl" fontWeight="semibold">
                            Job 3
                        </Text>
                        <Text fontSize="xl">
                            {jobThreeTitle} - {jobThreeCompany} <br />{" "}
                            {jobThreeStartDate} - {jobThreeEndDate}
                        </Text>
                    </Box>
                </Grid>
                <Grid
                    templateColumns={{ base: "1fr", md: "1fr 1fr" }}
                    gap={8}
                    shadow="lg"
                    rounded="lg"
                    bg={teal200tTo600}
                    border="1px"
                    borderColor={teal600To200}
                    mb={8}
                >
                    <Modal
                        isCentered
                        onClose={onCloseSectionFive}
                        isOpen={isOpenSectionFive}
                        motionPreset="slideInBottom"
                        scrollBehavior="inside"
                    >
                        <ModalOverlay
                            bg={overlayBackground}
                            backdropFilter="blur(10px)"
                        />
                        <ModalOverlay />
                        <ModalContent bg={teal200tTo600}>
                            <ModalHeader>Edit Section 6</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                <Text
                                    fontSize="md"
                                    color={blackToWhite}
                                    mt={2}
                                    mb={2}
                                >
                                    Accomplishment One
                                </Text>
                                <Input
                                    value={accomplishmentOne}
                                    placeholder="Accomplishment One"
                                    onChange={(e) =>
                                        setAccomplishmentOne(e.target.value)
                                    }
                                    mt={2}
                                    mb={2}
                                />
                                <Text
                                    fontSize="md"
                                    color={blackToWhite}
                                    mt={2}
                                    mb={2}
                                >
                                    Accomplishment Two
                                </Text>
                                <Input
                                    value={accomplishmentTwo}
                                    placeholder="Accomplishment Two"
                                    onChange={(e) =>
                                        setAccomplishmentTwo(e.target.value)
                                    }
                                    mt={2}
                                    mb={2}
                                />
                                <Text
                                    fontSize="md"
                                    color={blackToWhite}
                                    mt={2}
                                    mb={2}
                                >
                                    Accomplishment Three
                                </Text>
                                <Input
                                    value={accomplishmentThree}
                                    placeholder="Accomplishment Three"
                                    onChange={(e) =>
                                        setAccomplishmentThree(e.target.value)
                                    }
                                    mt={2}
                                    mb={2}
                                />
                            </ModalBody>
                            <ModalFooter>
                                <Button
                                    colorScheme="brand"
                                    mr={3}
                                    onClick={onCloseSectionFive}
                                    variant="ghost"
                                >
                                    Close
                                </Button>
                                <Button
                                    onClick={async () => {
                                        await updateUser()
                                        onCloseSectionFive()
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
                                onClick={onOpenSectionFive}
                                colorScheme="brand"
                                shadow="md"
                            />
                        </Box>
                        <Text fontSize="4xl" fontWeight="bold">
                            Accomplishments
                        </Text>
                        <Text fontSize="2xl" fontWeight="semibold">
                            - {accomplishmentOne}
                        </Text>
                        <Text fontSize="2xl" fontWeight="semibold">
                            - {accomplishmentTwo}
                        </Text>
                        <Text fontSize="2xl" fontWeight="semibold">
                            - {accomplishmentThree}
                        </Text>
                    </Box>
                </Grid>
            </Container>
        </>
    )
}

export default Profile
