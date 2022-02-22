import React from "react";
import Image from "../../images/hero-bg.png";

import { FaSearch } from "react-icons/fa";

import {
  HeroContainer,
  HeroBg,
  HeroBgImage,
  HeroContent,
  HeroH1,
  HeroP,
  TextContainer,
} from "./HeroElements";

import { HStack, Text, VStack } from "@chakra-ui/react";
import { Button } from "../ButtonElement";

const Hero = () => {
  return (
    <HeroContainer id="home">
      <HeroBg>
        <HeroBgImage src={Image} type="image/jpg" />
      </HeroBg>
      <HeroContent>
        <TextContainer>
          <HeroH1>HS Connect</HeroH1>
          <HeroP>Find Internships, Jobs, and Volunteering</HeroP>
        </TextContainer>

        <VStack m={10}>
          <Button to="/results">
            <HStack>
              <Text> Get Started</Text>
              <FaSearch />
            </HStack>
          </Button>
          {/* <HeroBtn to="/results">
            <FaSearch color="#00c6d3" />
          </HeroBtn> */}
        </VStack>
        {/* <HeroFilter>
          <HeroP>Search Type</HeroP>
          <HeroP>Search Type</HeroP>
          <Select
            bg="#00c6d3"
            borderColor="#00c6d3"
            color="black"
            boxShadow=" 4px 4px 15px #000000"
          >
            <option value="option1">Internships</option>
            <option value="option2">Jobs</option>
            <option value="option3">Volunteering</option>
          </Select>
          <Input
            bg="#00c6d3"
            borderColor="#00c6d3"
            color="black"
            placeholder="ZIP Code"
            _placeholder={{ color: "black" }}
            boxShadow=" 4px 4px 15px #000000"
          />
        </HeroFilter> */}
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
