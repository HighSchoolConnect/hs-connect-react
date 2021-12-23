import React from "react";
import Image from "../../images/hero-bg.png";

import {
  AboutUsContainer,
  AboutUsBgImage,
  AboutUsBg,
  AboutUsContent,
  TextCont,
  TextP,
  TextH2,
} from "./AboutUsElements";

import { TextH3 } from "../GeneralPurpose/GPElements";

const AboutUs = () => {
  return (
    <AboutUsContainer id="aboutus">
      <AboutUsBg>
        <AboutUsBgImage src={Image} type="image/jpg" />
      </AboutUsBg>
      <AboutUsContent>
        <TextCont>
          <TextH2>ABOUT HS CONNECT</TextH2>
          <TextH3>Vision</TextH3>
          <TextP>
            Create opportunities for all students to gain experience for their
            future careers
          </TextP>
          <TextH3>Who We Are</TextH3>
          <TextP>
            HS Connect began with four seniors as a high school project and it
            has grown into a nationwide business. We have helped countless
            students gain experience in fields they are passionate in and have
            no end in sight.
          </TextP>
        </TextCont>
      </AboutUsContent>
    </AboutUsContainer>
  );
};

export default AboutUs;
