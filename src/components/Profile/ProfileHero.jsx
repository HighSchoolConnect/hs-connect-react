import React, { useEffect, useState } from "react";
import hero from "../../images/hero-bg.png";
// import Joe from "../../images/JOEMAMA.jpeg";

import { Bg, BgImage } from "../../components/GeneralPurpose/GPElements";

import {
  ProfileContainer,
  ProfileContent,
  TextP,
  Cover,
} from "./ProfileElements";

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

  const [displayName, setDisplayName] = useState("");
  const [currentPosition, setCurrentPosition] = useState("");
  const [location, setLocation] = useState("");
  const [education, setEducation] = useState("");
  const [phone, setPhone] = useState("");
  const [photoURL, setPhotoURL] = useState("");

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

  return (
    <>
      <ProfileContainer id="profile">
        <Bg>
          <BgImage src={hero} type="image/jpg" />
        </Bg>
        <ProfileContent>
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
                <Button colorScheme="teal" onClick={onOpenEdit}>
                  <HStack spacing={2}>
                    <EditIcon color="white" />
                    <Text fontSize="sm" color="white">
                      Edit Profile
                    </Text>
                    <Modal isOpen={isOpenEdit} onClose={onCloseEdit} isCentered>
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
                                  Education
                                </Text>
                                <Input
                                  placeholder="Education"
                                  color="white"
                                  value={education}
                                  onChange={handleChangeEducation}
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
                </Button>
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
              <VStack>
                <TextP>{users.education}</TextP>
              </VStack>
            </HStack>
          </Box>
        </ProfileContent>
      </ProfileContainer>
    </>
  );
};

export default ProfileHero;
