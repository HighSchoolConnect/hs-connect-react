import {
  VStack,
  HStack,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  Heading,
  Select,
  Text,
  Input,
  Radio,
  RadioGroup,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Box,
  Flex,
} from "@chakra-ui/react";
import React, { useState } from "react";
import BG from "../../images/hero-bg.png";

import {
  ResultsContainer,
  ResultsWrapper,
  ResultsTitle,
  ResultsBg,
  ResultsImage,
  ResultsRow,
  Column1,
  Column2,
} from "./ResultsElements";
import ResultItem from "./ResultItem";

import { results } from "./SampleResults";

const ResultsHero = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const [value, setValue] = React.useState("1");

  const [sliderValue, setSliderValue] = useState(50);

  return (
    <ResultsContainer>
      <ResultsBg>
        <ResultsImage src={BG} type="image/jpg" />
      </ResultsBg>
      <ResultsWrapper>
        <ResultsTitle>Results</ResultsTitle>

        <ResultsRow>
          <Column1>
            <VStack>
              <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
                All Filters
              </Button>
              <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}
              >
                <DrawerOverlay />
                <DrawerContent bg="teal">
                  <DrawerCloseButton />
                  <DrawerHeader>
                    <Heading color="#ffffff" fontWeight="bold">
                      All Filters
                    </Heading>
                  </DrawerHeader>

                  <DrawerBody>
                    <VStack align="left" spacing="3">
                      <Text color="#ffffff" fontWeight="bold">
                        Search Type
                      </Text>
                      <Select color="#002326" bg="#00c6d3" border={false}>
                        <option>Internships</option>
                        <option>Jobs</option>
                        <option>Volunteering</option>
                      </Select>
                      <Text color="#ffffff" fontWeight="bold">
                        Location
                      </Text>
                      <Input
                        color="#000000"
                        bg="#00c6d3"
                        placeholder="Zip Code or City"
                        _placeholder={{ color: "#002326" }}
                        border={false}
                      />
                      <Text color="#ffffff" fontWeight="bold">
                        Radius of search
                      </Text>
                      <RadioGroup
                        onChange={setValue}
                        value={value}
                        colorScheme="white"
                        color="white"
                      >
                        <VStack direction="row" align="left">
                          <Radio value="1">0-10 Miles</Radio>
                          <Radio value="2">10-25 Miles</Radio>
                          <Radio value="3">25+ Miles</Radio>
                        </VStack>
                      </RadioGroup>
                      <Text color="#ffffff" fontWeight="bold">
                        Experience Level
                      </Text>
                      <Select color="#002326" bg="#00c6d3" border={false}>
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option>Expert</option>
                      </Select>
                      <Text color="#ffffff" fontWeight="bold">
                        Salary Range
                      </Text>
                      <RangeSlider
                        defaultValue={[1000, 3000]}
                        onChange={(val) => setSliderValue([val[0], val[1]])}
                        colorScheme="white"
                        min={0}
                        max={10000}
                      >
                        <RangeSliderTrack>
                          <RangeSliderFilledTrack />
                        </RangeSliderTrack>
                        <RangeSliderThumb index={0} bg="#00c6d3" />
                        <RangeSliderThumb index={1} bg="#00c6d3" />
                      </RangeSlider>
                      <VStack>
                        <HStack>
                          <VStack>
                            <Text color="#ffffff" fontWeight="bold">
                              Min Salary
                            </Text>
                            <Text color="#ffffff">${sliderValue[0]}</Text>
                          </VStack>
                          <VStack>
                            <Text color="#ffffff" fontWeight="bold">
                              Max Salary
                            </Text>
                            <Text color="#ffffff">${sliderValue[1]}</Text>
                          </VStack>
                        </HStack>
                      </VStack>
                    </VStack>
                  </DrawerBody>

                  <DrawerFooter>
                    <Button
                      colorScheme="teal"
                      color="white"
                      bg="#00c6d3"
                      onClick={onClose}
                    >
                      Save
                    </Button>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
              {results.map((item) => {
                return (
                  <ResultItem
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    company={item.company}
                    location={item.location}
                    salary={item.salary}
                    logo={item.logo}
                  />
                );
              })}
            </VStack>
          </Column1>
          <Column2>
            <Box height="400px" bg="teal" p={10}>
              <Flex justify="center" align="center">
                <VStack>
                  <Heading color="#ffffff" fontWeight="bold">
                    Software Intern
                  </Heading>
                  <Text color="#ffffff">Google</Text>
                  <Text color="#ffffff">Mountain View, CA</Text>
                  <Text color="#ffffff">
                    The Software Engineering Intern will be a passionate,
                    opinionated and creative individual who can develop web
                    applications from the ground up. You will understand web
                    strengths and constraints and build pixel perfect solutions.
                    You should be capable, and willing, to assist in developing
                    responsive single-page web applications.
                  </Text>
                </VStack>
              </Flex>
            </Box>
          </Column2>
        </ResultsRow>
      </ResultsWrapper>
    </ResultsContainer>
  );
};

export default ResultsHero;
