import React, { useEffect, useState } from "react";
import hero from "../../images/hero-bg.png";
// import Joe from "../../images/JOEMAMA.jpeg";

import { Bg, BgImage } from "../../components/GeneralPurpose/GPElements";

import { ProfileContainer, ProfileContent, Cover } from "./ProfileElements";

import { auth, db } from "../../components/Signup/Firebase";
import {
  Box,
  HStack,
  VStack,
  Image,
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Link,
  Button,
  Flex,
  Input,
  IconButton,
  Divider,
} from "@chakra-ui/react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { EditIcon } from "@chakra-ui/icons";

const ProfileHero = () => {
  // const currentUser = useAuth();
  const [users, setUsers] = useState({});

  const {
    isOpen: isOpenContact,
    onOpen: onOpenContact,
    onClose: onCloseContact,
  } = useDisclosure();

  const {
    isOpen: isOpenEdit,
    onOpen: onOpenEdit,
    onClose: onCloseEdit,
  } = useDisclosure();

  const {
    isOpen: isOpenEdu,
    onOpen: onOpenEdu,
    onClose: onCloseEdu,
  } = useDisclosure();

  const {
    isOpen: isOpenAbout,
    onOpen: onOpenAbout,
    onClose: onCloseAbout,
  } = useDisclosure();

  const {
    isOpen: isOpenWE,
    onOpen: onOpenWE,
    onClose: onCloseWE,
  } = useDisclosure();

  const [displayName, setDisplayName] = useState("");
  const [currentPosition, setCurrentPosition] = useState("");
  const [location, setLocation] = useState("");
  const [education, setEducation] = useState("");
  const [phone, setPhone] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [about, setAbout] = useState("");

  const [HSGradMonth, setHSGradMonth] = useState("");
  const [HSGradYear, setHSGradYear] = useState("");
  const [degree, setDegree] = useState("");
  const [undergradCollege, setUndergradCollege] = useState("");
  const [UStartYear, setUStartYear] = useState("");
  const [UEndYear, setUEndYear] = useState("");

  const [jobTitle1, setJobTitle1] = useState("");
  const [jobComp1, setJobComp1] = useState("");
  const [jobDescription1, setJobDescription1] = useState("");
  const [jobStart1, setJobStart1] = useState("");
  const [jobEnd1, setJobEnd1] = useState("");
  const [jobTitle2, setJobTitle2] = useState("");
  const [jobComp2, setJobComp2] = useState("");
  const [jobDescription2, setJobDescription2] = useState("");
  const [jobStart2, setJobStart2] = useState("");
  const [jobEnd2, setJobEnd2] = useState("");
  const [jobTitle3, setJobTitle3] = useState("");
  const [jobComp3, setJobComp3] = useState("");
  const [jobDescription3, setJobDescription3] = useState("");
  const [jobStart3, setJobStart3] = useState("");
  const [jobEnd3, setJobEnd3] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((authObj) => {
      unsub();
      if (authObj) {
        const getUserData = async () => {
          const userCollectionRef = await doc(
            db,
            "users",
            auth.currentUser.uid
          );
          const userData = await getDoc(userCollectionRef);
          console.log(userData.data());
          setUsers(userData.data());
          setDisplayName(users.displayName);
          setCurrentPosition(users.currentPosition);
          setLocation(users.location);
          setEducation(users.education);
          setPhone(users.phone);
          setPhotoURL(users.photoURL);
          setAbout(users.about);
          setHSGradMonth(users.HSGradMonth);
          setHSGradYear(users.HSGradYear);
          setDegree(users.degree);
          setUndergradCollege(users.undergradCollege);
          setUStartYear(users.UStartYear);
          setUEndYear(users.UEndYear);
          setJobTitle1(users.jobTitle1);
          setJobComp1(users.jobComp1);
          setJobDescription1(users.jobDescription1);
          setJobStart1(users.jobStart1);
          setJobEnd1(users.jobEnd1);
          setJobTitle2(users.jobTitle2);
          setJobComp2(users.jobComp2);
          setJobDescription2(users.jobDescription2);
          setJobStart2(users.jobStart2);
          setJobEnd2(users.jobEnd2);
          setJobTitle3(users.jobTitle3);
          setJobComp3(users.jobComp3);
          setJobDescription3(users.jobDescription3);
          setJobStart3(users.jobStart3);
          setJobEnd3(users.jobEnd3);
        };
        getUserData();
      } else {
        // not logged in
      }
    });
  }, [
    users.displayName,
    users.currentPosition,
    users.location,
    users.education,
    users.phone,
    users.photoURL,
    users.about,
    users.HSGradMonth,
    users.HSGradYear,
    users.degree,
    users.undergradCollege,
    users.UStartYear,
    users.UEndYear,
    users.jobTitle1,
    users.jobComp1,
    users.jobDescription1,
    users.jobStart1,
    users.jobEnd1,
    users.jobTitle2,
    users.jobComp2,
    users.jobDescription2,
    users.jobStart2,
    users.jobEnd2,
    users.jobTitle3,
    users.jobComp3,
    users.jobDescription3,
    users.jobStart3,
    users.jobEnd3,
  ]);

  const handleEdit = async () => {
    setIsLoading(true);
    const userCollectionRef = await doc(db, "users", auth.currentUser.uid);
    await updateDoc(userCollectionRef, {
      displayName: displayName,
      currentPosition: currentPosition,
      location: location,
      education: education,
      phone: phone,
      photoURL: photoURL,
      about: about,
      HSGradMonth: HSGradMonth,
      HSGradYear: HSGradYear,
      degree: degree,
      undergradCollege: undergradCollege,
      UStartYear: UStartYear,
      UEndYear: UEndYear,
      jobTitle1: jobTitle1,
      jobComp1: jobComp1,
      jobDescription1: jobDescription1,
      jobStart1: jobStart1,
      jobEnd1: jobEnd1,
      jobTitle2: jobTitle2,
      jobComp2: jobComp2,
      jobDescription2: jobDescription2,
      jobStart2: jobStart2,
      jobEnd2: jobEnd2,
      jobTitle3: jobTitle3,
      jobComp3: jobComp3,
      jobDescription3: jobDescription3,
      jobStart3: jobStart3,
      jobEnd3: jobEnd3,
    });
    const userData = await getDoc(userCollectionRef);
    console.log(userData.data());
    setUsers(userData.data());
    setIsLoading(false);
    onCloseEdit();
  };

  const handleChangeDisplayName = (event) => setDisplayName(event.target.value);
  const handleChangeCurrentPosition = (event) =>
    setCurrentPosition(event.target.value);
  const handleChangeLocation = (event) => setLocation(event.target.value);
  const handleChangeEducation = (event) => setEducation(event.target.value);
  const handleChangePhone = (event) => setPhone(event.target.value);
  const handleChangePhotoURL = (event) => setPhotoURL(event.target.value);
  const handleChangeAbout = (event) => setAbout(event.target.value);

  const handleChangeHSGradMonth = (event) => setHSGradMonth(event.target.value);
  const handleChangeHSGradYear = (event) => setHSGradYear(event.target.value);
  const handleChangeDegree = (event) => setDegree(event.target.value);
  const handleChangeUndergradCollege = (event) =>
    setUndergradCollege(event.target.value);
  const handleChangeUStartYear = (event) => setUStartYear(event.target.value);
  const handleChangeUEndYear = (event) => setUEndYear(event.target.value);

  const handleChangeJobTitle1 = (event) => setJobTitle1(event.target.value);
  const handleChangeJobComp1 = (event) => setJobComp1(event.target.value);
  const handleChangeJobDescription1 = (event) =>
    setJobDescription1(event.target.value);
  const handleChangeJobStart1 = (event) => setJobStart1(event.target.value);
  const handleChangeJobEnd1 = (event) => setJobEnd1(event.target.value);
  const handleChangeJobTitle2 = (event) => setJobTitle2(event.target.value);
  const handleChangeJobComp2 = (event) => setJobComp2(event.target.value);
  const handleChangeJobDescription2 = (event) =>
    setJobDescription2(event.target.value);
  const handleChangeJobStart2 = (event) => setJobStart2(event.target.value);
  const handleChangeJobEnd2 = (event) => setJobEnd2(event.target.value);
  const handleChangeJobTitle3 = (event) => setJobTitle3(event.target.value);
  const handleChangeJobComp3 = (event) => setJobComp3(event.target.value);
  const handleChangeJobDescription3 = (event) =>
    setJobDescription3(event.target.value);
  const handleChangeJobStart3 = (event) => setJobStart3(event.target.value);
  const handleChangeJobEnd3 = (event) => setJobEnd3(event.target.value);
  return (
    <>
      <ProfileContainer id="profile">
        <Bg>
          <BgImage src={hero} type="image/jpg" />
        </Bg>
        <ProfileContent>
          <VStack spacing={8}>
            <Box bg="#000000" borderRadius="15px" w="auto" maxW="1000px">
              <Cover>
                <Image
                  src={hero}
                  type="image/jpg"
                  height="200px"
                  width="100%"
                  postion="absolute"
                  overflow="hidden"
                />
              </Cover>
              {/* Basic Information */}
              <Flex align="center" justify="right" spacing={5} p={5}>
                <VStack align="center" spacing={5}>
                  <IconButton colorScheme="teal" onClick={onOpenEdit}>
                    <HStack spacing={2}>
                      <EditIcon color="white" />
                      {/* <Text fontSize="sm" color="white">
                      Edit Profile
                    </Text> */}
                      <Modal
                        isOpen={isOpenEdit}
                        onClose={onCloseEdit}
                        isCentered
                      >
                        <ModalOverlay />
                        <ModalContent bg="teal">
                          <ModalHeader color="white">Edit Profile</ModalHeader>
                          <ModalCloseButton />
                          <ModalBody>
                            <Flex align="left">
                              <VStack align="left" spacing={5} width="100%">
                                <VStack spacing={2} align="left">
                                  <Text fontSize="sm" color="white">
                                    Name
                                  </Text>
                                  <Input
                                    placeholder="Name"
                                    color="white"
                                    value={displayName}
                                    onChange={handleChangeDisplayName}
                                  />
                                </VStack>
                                <VStack spacing={2} align="left">
                                  <Text fontSize="sm" color="white">
                                    Position
                                  </Text>
                                  <Input
                                    placeholder="Position"
                                    color="white"
                                    value={currentPosition}
                                    onChange={handleChangeCurrentPosition}
                                  />
                                </VStack>
                                <VStack spacing={2} align="left">
                                  <Text fontSize="sm" color="white">
                                    Location
                                  </Text>
                                  <Input
                                    placeholder="Location"
                                    color="white"
                                    value={location}
                                    onChange={handleChangeLocation}
                                  />
                                </VStack>
                                <VStack spacing={2} align="left">
                                  <Text fontSize="sm" color="white">
                                    Phone
                                  </Text>
                                  <Input
                                    placeholder="Phone"
                                    color="white"
                                    value={phone}
                                    onChange={handleChangePhone}
                                  />
                                </VStack>
                                <VStack spacing={2} align="left">
                                  <Text fontSize="sm" color="white">
                                    Photo URL
                                  </Text>
                                  <Input
                                    placeholder="Photo URL"
                                    color="white"
                                    value={photoURL}
                                    onChange={handleChangePhotoURL}
                                  />
                                </VStack>
                              </VStack>
                            </Flex>
                          </ModalBody>
                          <ModalFooter>
                            <Button
                              onClick={handleEdit}
                              isLoading={isLoading}
                              colorScheme="teal"
                              mr={4}
                            >
                              Save
                            </Button>
                            <Button onClick={onCloseEdit} colorScheme="teal">
                              Cancel
                            </Button>
                          </ModalFooter>
                        </ModalContent>
                      </Modal>
                    </HStack>
                  </IconButton>
                </VStack>
              </Flex>
              <HStack>
                <VStack align="left" spacing={5} mt="-80px" p={10}>
                  <Image
                    src={users.photoURL}
                    type="image/jpg"
                    boxSize="150px"
                    borderRadius="full"
                    border="5px solid teal"
                  />
                  <VStack align="left" spacing={2}>
                    <Text fontSize="xl" fontWeight="semibold" color="#ffffff">
                      {users.displayName}
                    </Text>
                    <Text fontSize="lg" color="#ffffff">
                      {users.currentPosition}
                    </Text>
                    <HStack spacing={5}>
                      <Text fontSize="lg" color="#ffffff">
                        {users.location}
                      </Text>
                      <Link
                        color="teal.500"
                        onClick={onOpenContact}
                        textDecoration="underline"
                      >
                        Contact
                      </Link>
                      <Modal
                        onClose={onCloseContact}
                        isOpen={isOpenContact}
                        isCentered
                      >
                        <ModalOverlay />
                        <ModalContent bg="teal">
                          <ModalHeader color="#fff">Contact</ModalHeader>
                          <ModalCloseButton />
                          <ModalBody>
                            <Link href={"mailto:" + users.email}>
                              <Text fontSize="lg" color="#ffffff">
                                Email: {users.email}
                              </Text>
                            </Link>
                            <Link href={"tel:" + users.phone}>
                              <Text fontSize="lg" color="#ffffff">
                                Phone Number: {users.phone}
                              </Text>
                            </Link>
                          </ModalBody>
                          <ModalFooter>
                            <Button onClick={onCloseContact}>Close</Button>
                          </ModalFooter>
                        </ModalContent>
                      </Modal>
                    </HStack>
                  </VStack>
                </VStack>
              </HStack>
              <Divider />
              {/* About You Section */}
              <Box bg="#000000" borderRadius="15px" w="auto" maxW="1000px">
                <HStack spacing={5} p={10}>
                  <VStack align="left" spacing={5}>
                    <Text fontSize="xl" fontWeight="semibold" color="#ffffff">
                      About
                    </Text>
                    <Text fontSize="lg" color="#ffffff">
                      {users.about}
                    </Text>
                  </VStack>
                </HStack>
                <Flex align="center" justify="right" spacing={5} p={5}>
                  <VStack align="center" spacing={5}>
                    <IconButton colorScheme="teal" onClick={onOpenAbout}>
                      <HStack spacing={2}>
                        <EditIcon color="white" />
                        {/* <Text fontSize="sm" color="white">
                      Edit Profile
                    </Text> */}
                        <Modal
                          isOpen={isOpenAbout}
                          onClose={onCloseAbout}
                          isCentered
                        >
                          <ModalOverlay />
                          <ModalContent bg="teal">
                            <ModalHeader color="white">
                              Add About You
                            </ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                              <Flex align="left">
                                <VStack spacing={2} align="left" width="100%">
                                  <Text fontSize="sm" color="white">
                                    About You
                                  </Text>
                                  <Input
                                    placeholder="About"
                                    color="white"
                                    value={about}
                                    onChange={handleChangeAbout}
                                  />
                                </VStack>
                              </Flex>
                            </ModalBody>
                            <ModalFooter>
                              <Button
                                onClick={handleEdit}
                                isLoading={isLoading}
                                colorScheme="teal"
                                mr={4}
                              >
                                Save
                              </Button>
                              <Button onClick={onCloseAbout} colorScheme="teal">
                                Cancel
                              </Button>
                            </ModalFooter>
                          </ModalContent>
                        </Modal>
                      </HStack>
                    </IconButton>
                  </VStack>
                </Flex>
                <Divider />
                {/* Education Section */}
                <HStack spacing={5} p={10}>
                  <VStack align="left" spacing={5}>
                    <Text fontSize="xl" fontWeight="semibold" color="#ffffff">
                      Education
                    </Text>
                    <VStack spacing={2} align="left">
                      <HStack>
                        <VStack align="left" spacing={-1}>
                          <Text fontWeight="bold" fontSize="lg" color="#ffffff">
                            High School
                          </Text>
                          <Text fontSize="lg" color="#ffffff">
                            {users.education} - {users.HSGradMonth}{" "}
                            {users.HSGradYear}
                          </Text>
                        </VStack>
                      </HStack>
                      <HStack>
                        <VStack align="left" spacing={-1}>
                          <Text fontWeight="bold" fontSize="lg" color="#ffffff">
                            Undergraduate
                          </Text>
                          <Text fontSize="lg" color="#ffffff">
                            {users.degree} at {users.undergradCollege} -{" "}
                            {users.UStartYear} to {users.UEndYear}
                          </Text>
                        </VStack>
                      </HStack>
                    </VStack>
                  </VStack>
                </HStack>
              </Box>
              <Flex align="center" justify="right" spacing={5} p={5}>
                <VStack align="center" spacing={5}>
                  <IconButton colorScheme="teal" onClick={onOpenEdu}>
                    <HStack spacing={2}>
                      <EditIcon color="white" />
                      {/* <Text fontSize="sm" color="white">
                      Edit Profile
                    </Text> */}
                      <Modal isOpen={isOpenEdu} onClose={onCloseEdu} isCentered>
                        <ModalOverlay />
                        <ModalContent bg="teal">
                          <ModalHeader color="white">Add Education</ModalHeader>
                          <ModalCloseButton />
                          <ModalBody>
                            <Flex align="left">
                              <VStack spacing={2} align="left" width="100%">
                                <Text fontSize="sm" color="white">
                                  High School
                                </Text>
                                <Input
                                  placeholder="N/A if N/A"
                                  color="white"
                                  value={education}
                                  onChange={handleChangeEducation}
                                />
                                <Text fontSize="sm" color="white">
                                  High School Graduation Month
                                </Text>
                                <Input
                                  placeholder="Leave Blank if N/A"
                                  color="white"
                                  value={HSGradMonth}
                                  onChange={handleChangeHSGradMonth}
                                />
                                <Text fontSize="sm" color="white">
                                  High School Graduation Year
                                </Text>
                                <Input
                                  placeholder="Leave Blank if N/A"
                                  color="white"
                                  value={HSGradYear}
                                  onChange={handleChangeHSGradYear}
                                />
                                <Text fontSize="sm" color="white">
                                  Undergraduate Degree
                                </Text>
                                <Input
                                  placeholder="N/A if N/A"
                                  color="white"
                                  value={degree}
                                  onChange={handleChangeDegree}
                                />
                                <Text fontSize="sm" color="white">
                                  Undergraduate College
                                </Text>
                                <Input
                                  placeholder="Leave Blank if N/A"
                                  color="white"
                                  value={undergradCollege}
                                  onChange={handleChangeUndergradCollege}
                                />
                                <Text fontSize="sm" color="white">
                                  Undergraduate Start Year
                                </Text>
                                <Input
                                  placeholder="Leave Blank if N/A"
                                  color="white"
                                  value={UStartYear}
                                  onChange={handleChangeUStartYear}
                                />
                                <Text fontSize="sm" color="white">
                                  Undergraduate End Year
                                </Text>
                                <Input
                                  placeholder="Leave Blank if N/A"
                                  color="white"
                                  value={UEndYear}
                                  onChange={handleChangeUEndYear}
                                />
                              </VStack>
                            </Flex>
                          </ModalBody>
                          <ModalFooter>
                            <Button
                              onClick={handleEdit}
                              isLoading={isLoading}
                              colorScheme="teal"
                              mr={4}
                            >
                              Save
                            </Button>
                            <Button onClick={onCloseEdu} colorScheme="teal">
                              Cancel
                            </Button>
                          </ModalFooter>
                        </ModalContent>
                      </Modal>
                    </HStack>
                  </IconButton>
                </VStack>
              </Flex>
              <Divider />
              {/* Work Experience */}
              <Box bg="#000000" borderRadius="15px" w="auto" maxW="1000px">
                <HStack spacing={5} p={10}>
                  <VStack align="left" spacing={5}>
                    <Text fontSize="xl" fontWeight="semibold" color="#ffffff">
                      Work Experience
                    </Text>
                    <VStack spacing={2} align="left">
                      <HStack>
                        <Text
                          fontSize="xl"
                          fontWeight="semibold"
                          color="#ffffff"
                        >
                          {users.jobTitle1}
                        </Text>
                        <Text>
                          {users.jobStart1} - {users.jobEnd1}
                        </Text>
                      </HStack>
                      <Text>{users.jobComp1}</Text>
                      <Text>{users.jobDescription1}</Text>
                    </VStack>
                    <VStack spacing={2} align="left">
                      <HStack>
                        <Text
                          fontSize="xl"
                          fontWeight="semibold"
                          color="#ffffff"
                        >
                          {users.jobTitle2}
                        </Text>
                        <Text>
                          {users.jobStart2} - {users.jobEnd2}
                        </Text>
                      </HStack>
                      <Text>{users.jobComp2}</Text>
                      <Text>{users.jobDescription2}</Text>
                    </VStack>
                    <VStack spacing={2} align="left">
                      <HStack>
                        <Text
                          fontSize="xl"
                          fontWeight="semibold"
                          color="#ffffff"
                        >
                          {users.jobTitle3}
                        </Text>
                        <Text>
                          {users.jobStart3} - {users.jobEnd3}
                        </Text>
                      </HStack>
                      <Text>{users.jobComp3}</Text>
                      <Text>{users.jobDescription3}</Text>
                    </VStack>
                  </VStack>
                </HStack>
                <Flex align="center" justify="right" spacing={5} p={5}>
                  <VStack align="center" spacing={5}>
                    <IconButton colorScheme="teal" onClick={onOpenWE}>
                      <HStack spacing={2}>
                        <EditIcon color="white" />
                        {/* <Text fontSize="sm" color="white">
                      Edit Profile
                    </Text> */}
                        <Modal isOpen={isOpenWE} onClose={onCloseWE} isCentered>
                          <ModalOverlay />
                          <ModalContent bg="teal">
                            <ModalHeader color="white">
                              Add Education
                            </ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                              <Flex align="left">
                                <VStack spacing={2} align="left" width="100%">
                                  <Text
                                    fontSize="xl"
                                    fontWeight="semibold"
                                    color="#ffffff"
                                  >
                                    Job Experience 1
                                  </Text>
                                  <Text fontSize="sm" color="white">
                                    Work Experience 1 Title
                                  </Text>
                                  <Input
                                    placeholder="Leave Blank"
                                    color="white"
                                    value={jobTitle1}
                                    onChange={handleChangeJobTitle1}
                                  />
                                  <Text fontSize="sm" color="white">
                                    Work Experience 1 Company
                                  </Text>
                                  <Input
                                    placeholder="Leave Blank if N/A"
                                    color="white"
                                    value={jobComp1}
                                    onChange={handleChangeJobComp1}
                                  />
                                  <Text fontSize="sm" color="white">
                                    Work Experience 1 Description
                                  </Text>
                                  <Input
                                    placeholder="Leave Blank if N/A"
                                    color="white"
                                    value={jobDescription1}
                                    onChange={handleChangeJobDescription1}
                                  />
                                  <Text fontSize="sm" color="white">
                                    Work Experience 1 Start Date
                                  </Text>
                                  <Input
                                    placeholder="Month Year"
                                    color="white"
                                    value={jobStart1}
                                    onChange={handleChangeJobStart1}
                                  />
                                  <Text fontSize="sm" color="white">
                                    Work Experience 1 End Date
                                  </Text>
                                  <Input
                                    placeholder="Month Year"
                                    color="white"
                                    value={jobEnd1}
                                    onChange={handleChangeJobEnd1}
                                  />
                                  <Text
                                    fontSize="xl"
                                    fontWeight="semibold"
                                    color="#ffffff"
                                  >
                                    Job Experience 2
                                  </Text>
                                  <Text fontSize="sm" color="white">
                                    Work Experience 2 Title
                                  </Text>
                                  <Input
                                    placeholder="Leave Blank"
                                    color="white"
                                    value={jobTitle2}
                                    onChange={handleChangeJobTitle2}
                                  />
                                  <Text fontSize="sm" color="white">
                                    Work Experience 2 Company
                                  </Text>
                                  <Input
                                    placeholder="Leave Blank if N/A"
                                    color="white"
                                    value={jobComp2}
                                    onChange={handleChangeJobComp2}
                                  />
                                  <Text fontSize="sm" color="white">
                                    Work Experience 2 Description
                                  </Text>
                                  <Input
                                    placeholder="Leave Blank if N/A"
                                    color="white"
                                    value={jobDescription2}
                                    onChange={handleChangeJobDescription2}
                                  />
                                  <Text fontSize="sm" color="white">
                                    Work Experience 2 Start Date
                                  </Text>
                                  <Input
                                    placeholder="Month Year"
                                    color="white"
                                    value={jobStart2}
                                    onChange={handleChangeJobStart2}
                                  />
                                  <Text fontSize="sm" color="white">
                                    Work Experience 2 End Date
                                  </Text>
                                  <Input
                                    placeholder="Month Year"
                                    color="white"
                                    value={jobEnd2}
                                    onChange={handleChangeJobEnd2}
                                  />
                                  <Text
                                    fontSize="xl"
                                    fontWeight="semibold"
                                    color="#ffffff"
                                  >
                                    Job Experience 3
                                  </Text>
                                  <Text fontSize="sm" color="white">
                                    Work Experience 3 Title
                                  </Text>
                                  <Input
                                    placeholder="Leave Blank"
                                    color="white"
                                    value={jobTitle3}
                                    onChange={handleChangeJobTitle3}
                                  />
                                  <Text fontSize="sm" color="white">
                                    Work Experience 3 Company
                                  </Text>
                                  <Input
                                    placeholder="Leave Blank if N/A"
                                    color="white"
                                    value={jobComp3}
                                    onChange={handleChangeJobComp3}
                                  />
                                  <Text fontSize="sm" color="white">
                                    Work Experience 3 Description
                                  </Text>
                                  <Input
                                    placeholder="Leave Blank if N/A"
                                    color="white"
                                    value={jobDescription3}
                                    onChange={handleChangeJobDescription3}
                                  />
                                  <Text fontSize="sm" color="white">
                                    Work Experience 3 Start Date
                                  </Text>
                                  <Input
                                    placeholder="Month Year"
                                    color="white"
                                    value={jobStart3}
                                    onChange={handleChangeJobStart3}
                                  />
                                  <Text fontSize="sm" color="white">
                                    Work Experience 3 End Date
                                  </Text>
                                  <Input
                                    placeholder="Month Year"
                                    color="white"
                                    value={jobEnd3}
                                    onChange={handleChangeJobEnd3}
                                  />
                                </VStack>
                              </Flex>
                            </ModalBody>
                            <ModalFooter>
                              <Button
                                onClick={handleEdit}
                                isLoading={isLoading}
                                colorScheme="teal"
                                mr={4}
                              >
                                Save
                              </Button>
                              <Button onClick={onCloseWE} colorScheme="teal">
                                Cancel
                              </Button>
                            </ModalFooter>
                          </ModalContent>
                        </Modal>
                      </HStack>
                    </IconButton>
                  </VStack>
                </Flex>
              </Box>
            </Box>
          </VStack>
        </ProfileContent>
      </ProfileContainer>
    </>
  );
};

export default ProfileHero;
