import React, { useState } from "react";
import styled from "styled-components";
import { Bg, BgImage, TextH1 } from "../GeneralPurpose/GPElements";
import hero from "../../images/hero-bg.png";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  Button,
  Spinner,
  Link,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Flex,
  VStack,
  Text,
  Input,
} from "@chakra-ui/react";
import { auth, db } from "../Signup/Firebase";
import { useEffect } from "react";
import { addDoc, collection, getDocs } from "firebase/firestore";
const EmployerDashboard = () => {
  const [applicants, setApplicants] = useState([]);
  const [loading, setLoading] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [company, setCompany] = useState("");
  const [address, setAddress] = useState("");
  const [location, setLocation] = useState("");
  const [salaryLow, setSalaryLow] = useState(0);
  const [salaryHigh, setSalaryHigh] = useState(0);
  const [logoURL, setLogoURL] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const unsub = auth.onAuthStateChanged((authObj) => {
      unsub();
      if (authObj) {
        const getApplicants = async () => {
          setLoading(true);
          const userCollectionRef = await collection(
            db,
            "applicants",
            auth.currentUser.uid,
            "applications"
          );
          const applicantsData = await getDocs(userCollectionRef);
          //   console.log(applicantsData.docs.map((applicant) => applicant));
          setApplicants(
            applicantsData.docs.map((applicant) => ({
              ...applicant.data(),
              id: applicant.id,
            }))
          );
          console.log(applicants);
        };
        getApplicants();
        setLoading(false);
      } else {
        // not logged in
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = async (e) => {
    setIsLoading(true);
    const jobRef = collection(db, "jobs");
    await addDoc(jobRef, {
      title,
      company,
      address,
      location,
      salaryLow,
      salaryHigh,
      logoURL,
      employerID: auth.currentUser.uid,
    });
    setIsLoading(false);
    onClose();
  };

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleChangeType = (e) => {
    setType(e.target.value);
  };

  const handleChangeCompany = (e) => {
    setCompany(e.target.value);
  };
  const handleChangeAddress = (e) => {
    setAddress(e.target.value);
  };
  const handleChangeLocation = (e) => {
    setLocation(e.target.value);
  };
  const handleChangeSalaryLow = (e) => {
    setSalaryLow(e.target.value);
  };
  const handleChangeSalaryHigh = (e) => {
    setSalaryHigh(e.target.value);
  };
  const handleChangeLogoURL = (e) => {
    setLogoURL(e.target.value);
  };

  let applicantsList;
  if (loading) {
    applicantsList = (
      <Tr>
        <Td>
          <Spinner colorScheme="teal" />
        </Td>
        <Td>
          <Spinner colorScheme="teal" />
        </Td>
        <Td>
          <Spinner colorScheme="teal" />
        </Td>
        <Td>
          <Spinner colorScheme="teal" />
        </Td>
        <Td>
          <Spinner colorScheme="teal" />
        </Td>
      </Tr>
    );
  } else {
    applicantsList = applicants.map((applicant) => {
      return (
        <Tr key={applicant.id}>
          <Td>{applicant.name}</Td>
          <Td>{applicant.status}</Td>
          <Td>{applicant.experience}</Td>
          <Td>{applicant.currentPosition}</Td>
          <Td>
            <Button colorScheme="teal">
              <Link href={applicant.resumeURL} isExternal>
                View
              </Link>
            </Button>
          </Td>
        </Tr>
      );
    });
  }

  return (
    <EmployerDashboardContainer>
      <Bg>
        <BgImage src={hero} />
      </Bg>

      <EmployerDashboardContent>
        <TextH1>Dashboard</TextH1>
        <Button onClick={onOpen} m={10} colorScheme="teal">
          Post a Job
        </Button>

        <Modal isOpen={isOpen} onClose={onClose} isCentered>
          <ModalOverlay />
          <ModalContent bg="teal" color="white">
            <ModalHeader>Post a Job</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Flex align="left">
                <VStack align="left" spacing={5} width="100%">
                  <VStack spacing={2} align="left">
                    <Text fontSize="sm" color="white">
                      Title
                    </Text>
                    <Input
                      placeholder="Title"
                      value={title}
                      color="white"
                      onChange={handleChangeTitle}
                    />
                  </VStack>
                  <VStack spacing={2} align="left">
                    <Text fontSize="sm" color="white">
                      Type
                    </Text>
                    <Input
                      placeholder="Type"
                      value={type}
                      color="white"
                      onChange={handleChangeType}
                    />
                  </VStack>

                  <VStack spacing={2} align="left">
                    <Text fontSize="sm" color="white">
                      Company
                    </Text>
                    <Input
                      placeholder="Company"
                      value={company}
                      color="white"
                      onChange={handleChangeCompany}
                    />
                  </VStack>
                  <VStack spacing={2} align="left">
                    <Text fontSize="sm" color="white">
                      Address
                    </Text>
                    <Input
                      placeholder="Address"
                      value={address}
                      color="white"
                      onChange={handleChangeAddress}
                    />
                  </VStack>
                  <VStack spacing={2} align="left">
                    <Text fontSize="sm" color="white">
                      Location
                    </Text>
                    <Input
                      placeholder="Location"
                      value={location}
                      color="white"
                      onChange={handleChangeLocation}
                    />
                  </VStack>
                  <VStack spacing={2} align="left">
                    <Text fontSize="sm" color="white">
                      Salary Low
                    </Text>
                    <Input
                      placeholder="Salary Low"
                      value={salaryLow}
                      color="white"
                      onChange={handleChangeSalaryLow}
                    />
                  </VStack>
                  <VStack spacing={2} align="left">
                    <Text fontSize="sm" color="white">
                      Salary High
                    </Text>
                    <Input
                      placeholder="Salary High"
                      value={salaryHigh}
                      color="white"
                      onChange={handleChangeSalaryHigh}
                    />
                  </VStack>
                  <VStack spacing={2} align="left">
                    <Text fontSize="sm" color="white">
                      Logo URL
                    </Text>
                    <Input
                      placeholder="Logo URL"
                      value={logoURL}
                      color="white"
                      onChange={handleChangeLogoURL}
                    />
                  </VStack>
                </VStack>
              </Flex>
            </ModalBody>

            <ModalFooter>
              <Button
                colorScheme="teal"
                mr={4}
                onClick={handleSubmit}
                isLoading={isLoading}
              >
                Save
              </Button>
              <Button onClick={onClose} colorScheme="teal">
                Cancel
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <Table variant="striped" size="lg" bg="white" borderRadius={12}>
          {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Status</Th>
              <Th>Matches to Job Post</Th>
              <Th>Current Experience</Th>
              <Th>Resume</Th>
            </Tr>
          </Thead>
          <Tbody>{applicantsList}</Tbody>
          <Tfoot>
            <Tr>
              <Th>Name</Th>
              <Th>Status</Th>
              <Th>Matches to Job Post</Th>
              <Th>Current Experience</Th>
              <Th>Resume</Th>
            </Tr>
          </Tfoot>
        </Table>
      </EmployerDashboardContent>
    </EmployerDashboardContainer>
  );
};

export const EmployerDashboardContainer = styled.div`
  background-color: hsl(0, 0%, 0%);
  background-color: clear;
  display: flex;
  justify-content: center;
  padding: 60px 30px;
  height: fit-content;
  position: relative;
  z-index: 1;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;

export const EmployerDashboardContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 30px;
`;

export default EmployerDashboard;
