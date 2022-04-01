import { Button, Text, VStack } from "@chakra-ui/react";
import React from "react";
import {
  Column1,
  Column2,
  Img,
  ImgWrap,
  InfoContainer,
  InfoRow,
  InfoWrapper,
} from "./InfoElements";
import info1 from "../../images/info1.svg";
import info2 from "../../images/info2.svg";
import info3 from "../../images/info3.svg";
import info4 from "../../images/info4.svg";
import { motion } from "framer-motion";
import { Chakra } from "../ButtonElement";

const Info = () => {
  return (
    <>
      {/* Student? */}
      <InfoContainer
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <InfoWrapper>
          <InfoRow imgStart={true}>
            <Column1>
              <VStack spacing={4} alignItems="left">
                <Text fontSize="55px" fontWeight="bold">
                  Student?
                </Text>
                <Text fontSize="lg">
                  Finding a job using LinkedIn, ZipRecruiter or other job search
                  sites as a student can be a hassle. HS Connect is a platform
                  that helps students find a job and get hired. You can find the
                  right job or internship, connect and strengthen professional
                  relationships, and learn the skills you need to build your
                  resume.
                </Text>
                <Chakra to="/results">
                  <Button colorScheme="teal">Find a Job</Button>
                </Chakra>
              </VStack>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={info1} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
      {/* No Resume? */}
      <InfoContainer
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <InfoWrapper>
          <InfoRow>
            <Column1>
              <VStack spacing={4} alignItems="left">
                <Text fontSize="55px" fontWeight="bold">
                  No Resume?
                </Text>
                <Text fontSize="lg">
                  Worried that you don't have a resume? Don't worry, You can use
                  the resume builder to create a resume in just a few minutes.
                </Text>
                <Chakra to="/signup">
                  <Button colorScheme="teal">Get Started</Button>
                </Chakra>
              </VStack>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={info2} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
      {/* Employer? */}
      <InfoContainer
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <InfoWrapper>
          <InfoRow imgStart={true}>
            <Column1>
              <VStack spacing={4} alignItems="left">
                <Text fontSize="55px" fontWeight="bold">
                  Employer?
                </Text>
                <Text fontSize="lg">
                  Help high school students find the right job they need to
                  build their resume. You can post a job here and get matched
                  with students who are looking for the job. You can also
                  connect with students and build professional relationships.
                </Text>
                <Chakra to="/signup">
                  <Button colorScheme="teal">Post a Job</Button>
                </Chakra>
              </VStack>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={info3} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
      {/* Need Help? */}
      <InfoContainer
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <InfoWrapper>
          <InfoRow>
            <Column1>
              <VStack spacing={4} alignItems="left">
                <Text fontSize="55px" fontWeight="bold">
                  Need Help?
                </Text>
                <Text fontSize="lg">
                  If you have any questions or concerns, feel free to contact
                  us. We are here to help.
                </Text>
                <Chakra to="/contactus">
                  <Button colorScheme="teal">Contact us</Button>
                </Chakra>
              </VStack>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={info4} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default Info;
