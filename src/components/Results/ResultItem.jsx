import React from "react";
import {
  Box,
  useDisclosure,
  Button,
  HStack,
  VStack,
  Image,
  Text,
  Divider,
  Center,
  Flex,
  chakra,
  Link,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
//import {results} from "./SampleResults";
import { FaArrowCircleRight } from "react-icons/fa";

import { Button as RouteBtn } from "../ButtonElement";

const ResultItem = ({ id, title, company, location, salary, logo, type }) => {
  const btnRef = React.useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box bg="black" p={4} color="white" borderRadius={15}>
      <HStack>
        <Image src={logo} type="image/svg" boxSize="75px" />
        <Text fontSize="xl" fontWeight="bold" ml={4} noOfLines={3}>
          {title}
        </Text>
        <Center height="50px">
          <Divider orientation="vertical" />
        </Center>
        <VStack>
          <Text fontSize="sm" ml={4}>
            {company}
          </Text>
          <Text fontSize="sm" ml={4}>
            {location}
          </Text>
          <Text fontSize="sm" ml={4}>
            {salary}
          </Text>
        </VStack>
        <Center height="50px">
          <Divider orientation="vertical" />
        </Center>

        <Button
          ref={btnRef}
          colorScheme="clear"
          onClick={onOpen}
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: 100,
            height: 100,
            backgroundColor: "#0000000",
            borderRadius: 100,
          }}
        >
          <FaArrowCircleRight size={100} color="#00c6d3" />
        </Button>

        <Modal isOpen={isOpen} onClose={onClose} isCentered>
          <ModalOverlay />
          <ModalContent bg="#00c6d3">
            <ModalHeader color="white">{title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Box mx="auto" rounded="lg" shadow="md" bg="teal" maxW="2xl">
                <Image
                  roundedTop="lg"
                  w="full"
                  h={64}
                  fit="cover"
                  src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                  alt="Article"
                />
                <Box p={6}>
                  <Box>
                    <VStack align="left">
                      <Link fontWeight="bold" color="white">
                        {company}
                      </Link>
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
                        {salary}
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

                    <chakra.p mt={2} fontSize="sm" color="white">
                      The Software Engineering Intern will be a passionate,
                      opinionated and creative individual who can develop web
                      applications from the ground up. You will understand web
                      strengths and constraints and build pixel perfect
                      solutions. You should be capable, and willing, to assist
                      in developing responsive single-page web applications.
                    </chakra.p>
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

            <ModalFooter>
              <RouteBtn
                to={
                  "/apply/" +
                  "company=" +
                  company +
                  "&" +
                  "title=" +
                  "&" +
                  title +
                  "location=" +
                  "&" +
                  location
                }
              >
                <HStack>
                  <Text>Apply</Text>
                </HStack>
              </RouteBtn>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </HStack>
    </Box>
  );
};

export default ResultItem;
