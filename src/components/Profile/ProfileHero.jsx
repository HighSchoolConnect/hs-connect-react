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
          setUEndYear(users.setUEndYear);
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
    users.setUEndYear,
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
                                <VStack spacing={2} align="left">
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
                <Divider />
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
            </Box>
          </VStack>
        </ProfileContent>
      </ProfileContainer>
    </>
  );
};

export default ProfileHero;
