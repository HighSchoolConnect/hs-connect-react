import React from "react";
import hero from "../../images/hero-bg.jpg";
// import Joe from "../../images/JOEMAMA.jpeg";

import { Bg, BgImage } from "../../components/GeneralPurpose/GPElements";

import {
  ApplicationPageContainer,
  ApplicationPageContent,
  Cover,
} from "./ApplicationPageElements";
import { Box, VStack, Image, Text, Flex } from "@chakra-ui/react";
const ApplicationPage = () => {
  return (
    <ApplicationPageContainer>
      <Bg>
        <BgImage src={hero} type="image/jpg" />
      </Bg>
      <ApplicationPageContent>
        <VStack spacing={8}>
          <Box bg="#000000" borderRadius="15px" w="auto" maxW="1000px">
            <Cover>
              <Image
                src={hero}
                type="image/jpg"
                height="50px"
                width="100%"
                postion="absolute"
                overflow="hidden"
              />
            </Cover>
            <Flex align="center" justify="center" spacing={5} p={5}>
              <VStack spacing={2}>
                <Text fontSize="lg" color="white">
                  Application Page
                </Text>
                <Text fontSize="sm" color="white">
                  Step 1: Finish Profile
                </Text>
              </VStack>
            </Flex>
          </Box>
        </VStack>
      </ApplicationPageContent>
    </ApplicationPageContainer>
  );
};

export default ApplicationPage;
