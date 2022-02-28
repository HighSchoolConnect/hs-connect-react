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
} from "@chakra-ui/react";
import { doc, getDoc } from "firebase/firestore";
import { EditIcon } from "@chakra-ui/icons";

const ProfileHero = () => {
  // const currentUser = useAuth();
  const [users, setUsers] = useState({});
  const { isOpen, onOpen, onClose } = useDisclosure();

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
        };
        getUserData();
      } else {
        // not logged in
      }
    });
  }, []);

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
                <Button colorScheme="teal">
                  <HStack spacing={2}>
                    <EditIcon color="white" />
                    <Text fontSize="sm" color="white">
                      Edit Profile
                    </Text>
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
                      onClick={onOpen}
                      textDecoration="underline"
                    >
                      Contact
                    </Link>
                    <Modal onClose={onClose} isOpen={isOpen} isCentered>
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
                          <Button onClick={onClose}>Close</Button>
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
