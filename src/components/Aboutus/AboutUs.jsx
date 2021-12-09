import React from "react";
import Image from "../../images/hero-bg.png";

import{
    AboutUsContainer,
    AboutUsBgImage,
    AboutUsBg,
    AboutUsContent,
    TextCont,
    TextP,
    TextH1,
    TextH2,
    TextH3,
} from "./AboutUsElements";

const AboutUs = () => {
    return(
        <AboutUsContainer id = "home">
            <AboutUsBg>
                <AboutUsBgImage src={Image} type="image/jpg"/>
            </AboutUsBg>
            <AboutUsContent>
                <TextCont>
                    <TextH1>About Us</TextH1>
                    <TextH2>Welcome to HS Connect</TextH2>
                    <TextH3>Vision</TextH3>
                    <TextP>Create opportunities for all students to gain experience for their future careers</TextP>
                    <TextH3>Who We Are</TextH3>
                    <TextP>HS Connect began with four seniors as a high school project and it has grown into a nationwide business. We have helped countless students gain experience in fields they are passionate in and have no end in sight.</TextP>
                </TextCont>
            </AboutUsContent>
        </AboutUsContainer>
    )
}

export default AboutUs;