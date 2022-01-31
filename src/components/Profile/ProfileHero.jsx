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
} from "./ProfileElements";

import { useAuth } from "../../components/Signup/Firebase";
import { Box, HStack, VStack, Text, Image, Flex } from "@chakra-ui/react";

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
          <HStack spacing={10}>
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
            <TextP>
              Blurb about Elon: Elon musk is the most amazing person to ever
              exist. Born at a young age, he was the prodigal son for the
              long-forgotten inhabitants of Mars. After feeding him Martian
              Mashed Potatoes(Patent pending), they took full control over
              Elon's body. Now, he works tirelessly to send humans to his
              "parents" on Mars for consumption.
            </TextP>
          </HStack>
        </Box>
      </ProfileContent>
    </ProfileContainer>
  );
};

export default ProfileHero;
