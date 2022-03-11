import React, { useEffect, useState } from "react";
import hero from "../../images/hero-bg.jpg";
// import Joe from "../../images/JOEMAMA.jpeg";

import { Bg, BgImage } from "../../components/GeneralPurpose/GPElements";

import {
  ApplicationPageContainer,
  ApplicationPageContent,
} from "./ApplicationPageElements";
import {
  Box,
  VStack,
  Image,
  Flex,
  chakra,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Chakra } from "../ButtonElement";
import { getDoc, setDoc, doc, updateDoc } from "firebase/firestore";
import { auth, db } from "../Signup/Firebase";
import Confetti from "react-confetti";

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

const ApplicationPage = () => {
  const { width, height } = useWindowSize();
  const toast = useToast();

  const { id, title } = useParams();
  const [result, setResult] = useState({});
  const [isloading, setIsLoading] = useState(false);
  const [user, setUser] = useState({});
  const [applied, setApplied] = useState(false);
  useEffect(() => {
    console.log(id, title);

    const fetchData = async () => {
      const response = await axios.get(
        "https://server.hsc.geethg.com/jobs/application?" +
          "id=" +
          id +
          "&title=" +
          title
      );
      setResult(response.data);
    };
    fetchData();

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
          setUser(userData.data());
        };
        getUserData();
      } else {
      }
    });
  }, [id, title]);

  const handleSubmit = async (e) => {
    setIsLoading(true);
    const jobRef = doc(
      db,
      "applicants",
      id,
      "applications",
      auth.currentUser.uid
    );
    await setDoc(jobRef, {
      id: auth.currentUser.uid,
      jobTitle: title,
      name: user.displayName,
      email: user.email,
      currentPosition: user.currentPosition,
      status: "Awaiting Review",
      experience: "null",
    });
    const userCollectionRef = await doc(db, "users", auth.currentUser.uid);

    await updateDoc(userCollectionRef, {
      appliedTo: {
        id: id,
        title: title,
      },
    });
    setIsLoading(false);
    setApplied(true);
    toast({
      title: "Congratulations, Your Application has been submitted",
      description:
        "You will be notified when the company reviews your application",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };
  let confet;
  let appliedText;
  if (applied) {
    confet = (
      <Confetti
        width={width - 25}
        height={height - 50}
        numberOfPieces={500}
        recycle={false}
      />
    );

    // appliedText = (
    //   <Text fontSize="xl" fontWeight="bold" color="green.500">
    //     Applied Successfully <br />
    //     <Text fontSize="sm" color="gray.500">
    //       You will be notified when the company reviews your application
    //     </Text>
    //   </Text>
    // );
  }

  return (
    <ApplicationPageContainer>
      <Bg>
        <BgImage src={hero} type="image/jpg" />
      </Bg>
      <ApplicationPageContent>
        {confet}
        <VStack spacing={8}>
          <Box bg="#000000" borderRadius="15px" w="auto" maxW="1000px">
            <Flex align="center" justify="center" spacing={5} p={5}>
              <VStack spacing={2}>
                <Box
                  w="md"
                  mx="auto"
                  py={4}
                  px={8}
                  bg="teal"
                  color="white"
                  shadow="lg"
                  rounded="lg"
                >
                  <Flex justifyContent={{ base: "center", md: "end" }} mt={-16}>
                    <Image
                      w={20}
                      h={20}
                      fit="cover"
                      rounded="full"
                      borderStyle="solid"
                      bg="black"
                      alt="Logo"
                      src={result.logo}
                    />
                  </Flex>

                  <chakra.h2
                    color="white"
                    fontSize={{ base: "2xl", md: "3xl" }}
                    mt={{ base: 2, md: 0 }}
                    fontWeight="bold"
                  >
                    {result.title}
                  </chakra.h2>
                  <chakra.h3
                    color="white"
                    fontSize={{ base: "md", md: "lg" }}
                    mt={2}
                    fontWeight="bold"
                  >
                    {result.company}
                  </chakra.h3>
                  <chakra.h3
                    color="white"
                    fontSize={{ base: "md", md: "lg" }}
                    mt={2}
                  >
                    {result.location}
                  </chakra.h3>
                  <chakra.h3
                    color="white"
                    fontSize={{ base: "md", md: "lg" }}
                    mt={2}
                  >
                    {result.address}
                  </chakra.h3>
                  <chakra.h4
                    color="white"
                    fontSize={{ base: "md", md: "lg" }}
                    mt={2}
                  >
                    {result.salaryLow} - {result.salaryHigh}
                  </chakra.h4>

                  <chakra.p mt={2} color="white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quae dolores deserunt ea doloremque natus error, rerum quas
                    odio quaerat nam ex commodi hic, suscipit in a veritatis
                    pariatur minus consequuntur!
                  </chakra.p>
                </Box>
                <Box
                  w="md"
                  mx="auto"
                  py={4}
                  px={8}
                  bg="teal"
                  color="white"
                  shadow="lg"
                  rounded="lg"
                >
                  <chakra.h2
                    color="white"
                    fontSize={{ base: "2xl", md: "3xl" }}
                    mt={{ base: 2, md: 0 }}
                    fontWeight="bold"
                  >
                    Step 1: Edit your Profile
                  </chakra.h2>

                  <Chakra to="/profile">
                    <Button colorScheme="teal">Edit Profile</Button>
                  </Chakra>
                </Box>
                <Box
                  w="md"
                  mx="auto"
                  py={4}
                  px={8}
                  bg="teal"
                  color="white"
                  shadow="lg"
                  rounded="lg"
                >
                  <chakra.h2
                    color="white"
                    fontSize={{ base: "2xl", md: "3xl" }}
                    mt={{ base: 2, md: 0 }}
                    fontWeight="bold"
                  >
                    Step 2: Check your generated Resume
                  </chakra.h2>

                  <Chakra to="/resume">
                    <Button colorScheme="teal">Check Resume</Button>
                  </Chakra>
                </Box>
                <Box
                  w="md"
                  mx="auto"
                  py={4}
                  px={8}
                  bg="teal"
                  color="white"
                  shadow="lg"
                  rounded="lg"
                >
                  <chakra.h2
                    color="white"
                    fontSize={{ base: "2xl", md: "3xl" }}
                    mt={{ base: 2, md: 0 }}
                    fontWeight="bold"
                  >
                    Step 3: Apply!
                    {appliedText}
                  </chakra.h2>

                  <Button
                    colorScheme="teal"
                    isLoading={isloading}
                    onClick={handleSubmit}
                    isDisabled={user?.appliedTo?.title === title}
                  >
                    {user?.appliedTo?.title === title ? "Applied" : "Apply"}
                  </Button>
                </Box>
              </VStack>
            </Flex>
          </Box>
        </VStack>
      </ApplicationPageContent>
    </ApplicationPageContainer>
  );
};

export default ApplicationPage;
