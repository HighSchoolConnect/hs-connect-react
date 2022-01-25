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
  HeroForm,
  HeroInput,
  HeroBtn,
  HeroFilter,
} from "./HeroElements";

import { Select } from "@chakra-ui/select";
import { Input } from "@chakra-ui/react";

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
        <HeroForm action="/" method="get">
          <HeroInput
            type="text"
            placeholder="EX: Software Engineer, Medical Assistant"
            name="s"
            autoComplete="off"
          />
          <HeroBtn type="button" to="/results">
            <FaSearch />
          </HeroBtn>
        </HeroForm>
        <HeroFilter>
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
        </HeroFilter>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
