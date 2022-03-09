import React, { useState } from "react";
import Image from "../../images/hero-bg.jpg";

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
} from "./HeroElements";

import { HStack, Text, VStack } from "@chakra-ui/react";
import { Button } from "../ButtonElement";
import Particles from "react-tsparticles";
import particlesConfig from "./particles.json";

const Hero = () => {
  const [searchTerm, setSearchTerm] = useState("");
  // const particlesInit = (main) => {
  //   console.log(main);

  //   // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  // };

  // const particlesLoaded = (container) => {
  //   console.log(container);
  // };
  return (
    <HeroContainer id="home">
      <HeroBg isDisabled={true}>
        <HeroBgImage src={Image} type="image/jpg" />
      </HeroBg>

      <HeroContent>
        <Particles
          id="tsparticles"
          // init={particlesInit}
          // loaded={particlesLoaded}
          height="50%"
          options={particlesConfig}
        />
        <TextContainer>
          <HeroH1>HS Connect</HeroH1>
          <HeroP>Find Internships, Jobs, and Volunteering</HeroP>
        </TextContainer>

        <VStack m={10}>
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
              <HeroBtn type="button" to={"/results/" + searchTerm}>
                <FaSearch />
              </HeroBtn>
            </HeroForm>
          </VStack>

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
        <HStack align="right">
          <Button to="/Signup">
            <Text>For Employers</Text>
          </Button>
        </HStack>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
