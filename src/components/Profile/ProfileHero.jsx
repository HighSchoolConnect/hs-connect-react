import React from "react";
import hero from "../../images/hero-bg.png";
import Joe from "../../images/JOEMAMA.jpeg";

import {
  Bg,
  BgImage,
  TextCont,
  TextH3,
} from "../../components/GeneralPurpose/GPElements";

import { ProfileContainer } from "./ProfileElements";

import { ProfileContent } from "./ProfileElements";

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
        <TextCont>
          <TextH3> {currentUser?.email}</TextH3>
        </TextCont>

        <Box bg="#00c6d3" borderRadius="15px" w="100%" p={10}>
          <Flex justifyContent="left" align="left">
            <VStack align="left">
              <HStack>
                <Flex align="left">
                  <Image
                    src={Joe}
                    type="image/jpg"
                    boxSize="75px"
                    padding="px"
                  />
                </Flex>
                <VStack>
                  <Text fontSize="2xl" fontWeight="bold">
                    Joe Mama
                  </Text>
                  <Text fontSize="sm">Software Engineer</Text>
                </VStack>
              </HStack>
            </VStack>
          </Flex>
        </Box>
      </ProfileContent>
    </ProfileContainer>
  );
};

export default ProfileHero;
