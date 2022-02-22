import React from "react";
import hero from "../../images/hero-bg.png";
// import Joe from "../../images/JOEMAMA.jpeg";

import { Bg, BgImage } from "../../components/GeneralPurpose/GPElements";

import {
  ProfileContainer,
  ProfileContent,
  TextP,
  TextH1,
  TextH3,
  TextH4,
} from "./ProfileElements";

import { useAuth } from "../../components/Signup/Firebase";
import {
  Box,
  HStack,
  VStack,
  Image,
  Divider,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverCloseButton,
  Text,
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
        <Box bg="#000000" borderRadius="15px" w="auto" maxW="1000px" p={10}>
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
                  <TextP>Current Position: Cool Kid</TextP>
                  <TextP>Location: Austin, TX</TextP>
                </HStack>
              </VStack>
            </HStack>
            <HStack>
              <TextH3 align="left">Experience</TextH3>
              <TextP>Click Positions for More Info</TextP>
            </HStack>
            <HStack spacing={10}>
              <VStack>
                <HStack>
                  <Popover>
                    <PopoverTrigger>
                      <TextH4>Software Engineer</TextH4>
                    </PopoverTrigger>
                    <PopoverContent zIndex={1}>
                      <PopoverHeader>Software Engineer</PopoverHeader>
                      <PopoverBody>
                        <VStack>
                          <Text>Location: Microsoft</Text>
                          <Text>Date: January 2010 - February 2015</Text>
                        </VStack>
                      </PopoverBody>
                      <PopoverFooter>
                        <PopoverCloseButton />
                      </PopoverFooter>
                    </PopoverContent>
                  </Popover>
                  <Divider orientation="horizontal" borderWidth={2}></Divider>
                  <Popover>
                    <PopoverTrigger>
                      <TextH4>Full Stack Developer</TextH4>
                    </PopoverTrigger>
                    <PopoverContent zIndex={1}>
                      <PopoverHeader>Full Stack Developer</PopoverHeader>
                      <PopoverBody>
                        <VStack>
                          <Text>Location: Samsung</Text>
                          <Text>Date: February 2015 - March 2017</Text>
                        </VStack>
                      </PopoverBody>
                      <PopoverFooter>
                        <PopoverCloseButton />
                      </PopoverFooter>
                    </PopoverContent>
                  </Popover>
                  <Divider orientation="horizontal" borderWidth={2}></Divider>
                  <Popover>
                    <PopoverTrigger>
                      <TextH4>Data Analyst</TextH4>
                    </PopoverTrigger>
                    <PopoverContent zIndex={1}>
                      <PopoverHeader>Data Analyst</PopoverHeader>
                      <PopoverBody>
                        <VStack>
                          <Text>Location: Google</Text>
                          <Text>Date: March 2017 - Present</Text>
                        </VStack>
                      </PopoverBody>
                      <PopoverFooter>
                        <PopoverCloseButton />
                      </PopoverFooter>
                    </PopoverContent>
                  </Popover>
                </HStack>
              </VStack>
            </HStack>
            <HStack>
              <TextH3 align="left">Education</TextH3>
              <TextP>Click School for More Info</TextP>
            </HStack>
            <HStack spacing={10}>
              <VStack>
                <HStack spacing={200}>
                  <Popover>
                    <PopoverTrigger>
                      <TextH4>Coppell High School</TextH4>
                    </PopoverTrigger>
                    <PopoverContent zIndex={1}>
                      <PopoverHeader>Coppell High School</PopoverHeader>
                      <PopoverBody>
                        <VStack>
                          <Text>Location: Coppell, TX</Text>
                          <Text>Degree Earned: High School Diploma</Text>
                          <Text>Graduation Date: May 2006</Text>
                        </VStack>
                      </PopoverBody>
                      <PopoverFooter>
                        <PopoverCloseButton />
                      </PopoverFooter>
                    </PopoverContent>
                  </Popover>
                  <Divider orientation="horizontal" borderWidth={2}></Divider>
                  <Popover>
                    <PopoverTrigger>
                      <TextH4>MIT</TextH4>
                    </PopoverTrigger>
                    <PopoverContent zIndex={1}>
                      <PopoverHeader>MIT</PopoverHeader>
                      <PopoverBody>
                        <VStack>
                          <Text>Location: Cambridge, Massachussetts</Text>
                          <Text>Degree Earned: BS Computer Science</Text>
                          <Text>Graduation Date: May 2010</Text>
                        </VStack>
                      </PopoverBody>
                      <PopoverFooter>
                        <PopoverCloseButton />
                      </PopoverFooter>
                    </PopoverContent>
                  </Popover>
                </HStack>
              </VStack>
            </HStack>
          </VStack>
        </Box>
      </ProfileContent>
    </ProfileContainer>
  );
};

export default ProfileHero;
