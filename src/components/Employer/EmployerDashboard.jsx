import React, { useState } from "react";
import styled from "styled-components";
import { Bg, BgImage, TextH1 } from "../GeneralPurpose/GPElements";

import hero from "../../images/hero-bg.jpg";
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
  Text,
} from "@chakra-ui/react";
import { auth, db } from "../Signup/Firebase";
import { useEffect } from "react";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
const EmployerDashboard = () => {
  const [applicants, setApplicants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
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
        const getUserData = async () => {
          const userCollectionRef = await doc(
            db,
            "employers",
            auth.currentUser.uid
          );
          const userData = await getDoc(userCollectionRef);
          console.log(userData.data());
          setUser(userData.data());
        };
        getApplicants();
        getUserData();
        setLoading(false);
      } else {
        // not logged in
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
  } else if (user.verified) {
    applicantsList = applicants.map((applicant) => {
      return (
        <Tr key={applicant.id}>
          <Td>{applicant.name}</Td>
          <Td>{applicant.status}</Td>
          <Td>{applicant.jobTitle}</Td>
          <Td>
            <Button colorScheme="teal">
              <Link href={"/resume/" + applicant.id} isExternal>
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

        {user.verified && !loading ? (
          <Table
            m={10}
            variant="striped"
            sx={{
              "@media screen and (max-width: 768px)": {
                tableLayout: "fixed",
                size: "sm",
                fontSize: "xs",
              },
              "@media screen and (min-width: 1280px)": {
                tableLayout: "fixed",
                size: "md",
              },
              "@media screen and (min-width: 1920px)": {
                tableLayout: "fixed",
                size: "lg",
              },
            }}
            borderColor="teal.500"
            bg="white"
            borderRadius={12}
          >
            {/* <TableCaption>Applications</TableCaption> */}
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Status</Th>
                <Th>Applied To</Th>
                <Th>Resume</Th>
              </Tr>
            </Thead>
            <Tbody>{applicantsList}</Tbody>
            <Tfoot>
              <Tr>
                <Th>Name</Th>
                <Th>Status</Th>
                <Th>Applied To</Th>
                <Th>Resume</Th>
              </Tr>
            </Tfoot>
          </Table>
        ) : !user.verified && !loading ? (
          <Text fontSize="xl" color="white">
            Please wait until we verify your account
          </Text>
        ) : (
          <Spinner colorScheme="teal" />
        )}
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
export const JobPictureUploadLabel = styled.label`
  display: flex;
  align-items: center;
  padding: 10px;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 7px;
  border: 1px solid white;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  :hover {
    background-color: #00c6d3;
    color: white;
  }
`;

export const JobPictureUploadInput = styled.input`
  display: none;
`;

export default EmployerDashboard;
