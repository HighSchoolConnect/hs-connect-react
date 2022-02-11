import React from "react";
import Google from "../../images/google.svg";
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
  Slide,
} from "@chakra-ui/react";
//import {results} from "./SampleResults";
import { FaArrowCircleRight } from "react-icons/fa";

const ResultItem = ({ id, title, company, location, salary, logo }) => {
  const btnRef = React.useRef();
  const {
    isOpen: isOpenReportModal,
    onOpen: onOpenReportModal,
    onClose: onCloseReportModal,
  } = useDisclosure();
  //const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box bg="black" w={500}  p={4} color="white" borderRadius={15}>
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
          onClick={onOpenReportModal}
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
        <Slide
          direction="bottom"
          in={isOpenReportModal}
          style={{ zIndex: 10 }}
          finalFocusRef={btnRef}
        >
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
                <chakra.span
                  fontSize="xs"
                  textTransform="uppercase"
                  bg="teal"
                  color="white"
                >
                  Mountain View, CA
                </chakra.span>
                <Link
                  display="block"
                  color="white"
                  fontWeight="bold"
                  fontSize="2xl"
                  mt={2}
                  _hover={{
                    color: "gray.600",
                    textDecor: "underline",
                  }}
                >
                  Software Intern
                </Link>
                <chakra.p mt={2} fontSize="sm" color="white">
                  The Software Engineering Intern will be a passionate,
                  opinionated and creative individual who can develop web
                  applications from the ground up. You will understand web
                  strengths and constraints and build pixel perfect solutions.
                  You should be capable, and willing, to assist in developing
                  responsive single-page web applications.
                </chakra.p>
              </Box>

              <Box mt={4}>
                <Flex alignItems="center">
                  <Flex alignItems="center">
                    <Box bg="white" rounded="full" p={2} mx={2}>
                      <Image
                        h={10}
                        fit="cover"
                        rounded="full"
                        src={Google}
                        alt="Avatar"
                      />
                    </Box>
                    <Link mx={2} fontWeight="bold" color="white">
                      Google LLC
                    </Link>
                  </Flex>
                  <chakra.span mx={1} fontSize="sm" color="white">
                    21 SEP 2022
                  </chakra.span>
                </Flex>
              </Box>
            </Box>
            <Flex justifyContent="right" mt={4} p={2}>
              <Button onClick={onCloseReportModal} colorScheme="Teal">
                Close
              </Button>
            </Flex>
          </Box>
        </Slide>
      </HStack>
    </Box>
  );
};

export default ResultItem;
