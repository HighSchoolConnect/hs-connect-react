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
  TextH3,
} from "./AboutUsElements";

const AboutUs = () => {
  return (
    <AboutUsContainer id="aboutus">
      <AboutUsBg>
        <AboutUsBgImage src={Image} type="image/jpg" />
      </AboutUsBg>
      <AboutUsContent>
        <TextCont>
          <TextH2>About HS Connect</TextH2>
          <TextH3>What is our Vision?</TextH3>
          <TextP>
            Create opportunities for students to find internships and jobs that will help them exel in their future careers.
          </TextP>
          <TextH3>Who We Are</TextH3>
          <TextP>
            HS Connect began with four seniors that had a dream to provide every highschool sudent with an internship. What was first a small project has now grown into a nationwide buisness and has helped countless
            students gain experience in fields they are passionate in.
          </TextP>
          <TextH3>Meet our Team</TextH3>
          <TextP>
            Geeth Gunnampalli - Full Stack Developer 
          </TextP>
          <TextP>
            Adarsh Pullasari - Full Stack Developer
          </TextP>
          <TextP>
           Gana Ventrapragada - Front End Developer
          </TextP>
          <TextP>
            Kamalesh Mohanasundar - I did no work!
          </TextP>
        </TextCont>
      </AboutUsContent>
    </AboutUsContainer>
  );
};

export default AboutUs;
