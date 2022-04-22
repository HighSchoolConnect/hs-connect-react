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
  Spinner,
  Radio,
  RadioGroup,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Grid,
  useMediaQuery,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import BG from "../../images/hero-bg.jpg";

import {
  ResultsContainer,
  ResultsWrapper,
  ResultsBg,
  ResultsImage,
  ResultsColumn,
} from "./ResultsElements";
import ResultItem from "./ResultItem";

import { HeroForm, HeroInput, HeroBtn } from "../Hero/HeroElements";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Search2Icon } from "@chakra-ui/icons";

const ResultsHero = ({ title }) => {
  const [isLargerThan1080] = useMediaQuery("(min-width: 1080px)");

  const { id } = useParams();
  // const {
  //   isOpen: isOpenReportModal,
  //   onOpen: onOpenReportModal,
  //   onClose: onCloseReportModal,
  // } = useDisclosure();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [loading, setLoading] = useState(false);
  const [value, setValue] = React.useState("1");

  const [sliderValue, setSliderValue] = useState(50);

  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (id !== undefined) {
      setSearchTerm(id);
    } else {
      setSearchTerm("");
    }

    const fetchData = async () => {
      setLoading(true);
      const response = await axios.get("https://server.hsc.geethg.com/jobs/");

      setResults(response.data);
      setLoading(false);
    };

    fetchData();
  }, [title, id]);

  let loadingDiv;
  let noResultsDiv;

  if (loading) {
    loadingDiv = (
      <div>
        <Spinner color="white" />
      </div>
    );
  } else {
  }

  return (
    <ResultsContainer>
      <ResultsBg>
        <ResultsImage src={BG} type="image/jpg" />
      </ResultsBg>
      <ResultsWrapper>
        <VStack>
          <HeroForm action="/" method="get">
            <HeroInput
              type="text"
              placeholder="EX: Software Engineer, Medical Assistant"
              name="s"
              autoComplete="off"
              onChange={(e) => setSearchTerm(e.target.value)}
              value={searchTerm}
            />
            <HeroBtn type="button" to="/results">
              <Search2Icon />
            </HeroBtn>
          </HeroForm>
        </VStack>

        <ResultsColumn>
          <VStack>
            <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
              All Filters
            </Button>
            {loadingDiv}

            <Drawer
              isOpen={isOpen}
              placement="left"
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
            {noResultsDiv}
            <Grid
              templateColumns={
                isLargerThan1080 ? "repeat(2, 1fr)" : "repeat(1, 1fr)"
              }
              gap={6}
            >
              {results
                .filter((val) => {
                  if (searchTerm.length > 0) {
                    return val.title
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase());
                  }
                  return true;
                })
                .map((item, index) => {
                  return (
                    <ResultItem
                      key={index}
                      id={item.employerID}
                      title={item.title}
                      company={item.company}
                      location={item.location}
                      salaryLow={item.salaryLow}
                      salaryHigh={item.salaryHigh}
                      address={item.address}
                      logo={item.logo}
                      type={item.type}
                      description={item.description}
                    />
                  );
                })}
            </Grid>
          </VStack>
        </ResultsColumn>
      </ResultsWrapper>
    </ResultsContainer>
  );
};

export default ResultsHero;
