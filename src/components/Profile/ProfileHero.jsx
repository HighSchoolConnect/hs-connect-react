import React from "react";
import hero from "../../images/hero-bg.png";
// import Joe from "../../images/JOEMAMA.jpeg";

import {
  Bg,
  BgImage,
  TextCont,
} from "../../components/GeneralPurpose/GPElements";

import {
  ProfileContainer,
  ProfileContent,
  TextP,
  TextH1,
  TextH2,
  TextH3,
  TextH4,
} from "./ProfileElements";

import { useAuth } from "../../components/Signup/Firebase";
import {
  Box,
  HStack,
  VStack,
  Text,
  Image,
  Flex,
  Divider,
} from "@chakra-ui/react";

const ProfileHero = () => {
  const currentUser = useAuth();
  return (
    <ProfileContainer id="profile">
      <Bg>
        <BgImage src={hero} type="image/jpg" />
      </Bg>
      <ProfileContent>
        {/* <TextCont><TextP> Email: {currentUser?.email}</TextP></TextCont> */}
        {/* <Box bg="#000000" borderRadius="15px" w="100%" p={10}>
          <Flex justifyContent="left" align="left">
            <VStack align="left">
              <HStack>
                <Flex align="left">
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg"
                    type="image/jpg"
                    boxSize="95px"
                    padding="px"
                  />
                </Flex>
                <VStack>
                  <TextH1>Elon Musk</TextH1>
                  <TextP fontSize="sm">Software Engineer</TextP>
                </VStack>
              </HStack>
            </VStack>
          </Flex>
        </Box> */}
        <Box bg="#000000" borderRadius="15px" w="1000px" p={10}>
          <VStack align="left" spacing={10}>
            <HStack align="center" spacing={20}>
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg"
                type="image/jpg"
                boxSize="200px"
                padding="px"
              />
              <VStack spacing={-5}>
                <TextH1>Elon Musk</TextH1>
                <HStack>
                  <TextP>Email: {currentUser?.email}</TextP>
                  <TextP>Phone: 214-214-2142</TextP>
                </HStack>
                <HStack>
                  <TextP>Current Position: Jesus</TextP>
                  <TextP>Location: Wakanda</TextP>
                </HStack>
              </VStack>
            </HStack>
            <HStack>
              <TextH3 align="left">Experience:</TextH3>
            </HStack>
            <HStack spacing={20}>
              <VStack spacing={-6}>
                <TextH4>Software Engineer</TextH4>
                <VStack spacing={-10}>
                  <TextP>Location: Microsoft</TextP>
                  <TextP>January 2010-February 2015</TextP>
                </VStack>
              </VStack>
              <Divider orientation="horizontal" borderWidth={2}></Divider>
              <VStack spacing={-6}>
                <TextH4>Full Stack Developer(iOS)</TextH4>
                <VStack spacing={-10}>
                  <TextP>Location: Samsung</TextP>
                  <TextP>February 2015-March 2017</TextP>
                </VStack>
              </VStack>
              <Divider orientation="horizontal" borderWidth={2}></Divider>
              <VStack spacing={-6}>
                <TextH4>Data Analyst</TextH4>
                <VStack spacing={-10}>
                  <TextP>Location: Google</TextP>
                  <TextP>March 2017-Present</TextP>
                </VStack>
              </VStack>
            </HStack>
          </VStack>
        </Box>
      </ProfileContent>
    </ProfileContainer>
  );
};

export default ProfileHero;
