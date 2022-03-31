import { Link } from "@chakra-ui/react";
import React from "react";
// import { FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";

import { animateScroll as scroll } from "react-scroll";
import { HStack, VStack, Text, Flex } from "@chakra-ui/react";
import {
  FooterContainer,
  FooterWrap,
  // SocialMedia,
  // SocialMediaWrap,
  SocialLogo,
  // WebsiteRights,
  // SocialIcons,
  // SocialIconLink,
  // FooterLinksContainer,
  // FooterLinksWrapper,
  // FooterLinkItem,
  // FooterLinkTitle,
  // FooterLink,
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        {/* <FooterLinksContainer> */}
        <Flex
          align="center"
          justify="center"
          spacing={2}
          p={5}
          textColor="white"
        >
          <VStack spacing={5}>
            <HStack
              align="center"
              spacing={5}
              fontSize="20px"
              fontWeight="bold"
            >
              <SocialLogo
                to="/"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                onClick={toggleHome}
              >
                HS Connect
              </SocialLogo>{" "}
            </HStack>
            <HStack align="center" spacing={5} fontSize="xs">
              <Link href="signin">Post a Job</Link>
              <Link href="FAQ">FAQ</Link>
              <Link href="contactus">Contact Us</Link>
              <Link href="aboutus">About Us</Link>
            </HStack>
            <HStack align="center">
              <Text fontSize="md">
                HS Connect © {new Date().getFullYear()} All Rights Reserved
              </Text>
            </HStack>
          </VStack>
          {/* <FooterLinksWrapper>
              <FooterLinkItem>
                <FooterLinkTitle> */}
          {/* </FooterLinkTitle> */}
          {/* <FooterLinkTitle>Made With:</FooterLinkTitle>
                <FooterLink to="/">React.js,</FooterLink>
                <FooterLink to="/">Styled Components,</FooterLink>
                <FooterLink to="/">Chakra UI.</FooterLink> */}
          {/* </FooterLinkItem>
            </FooterLinksWrapper> */}
        </Flex>
        {/* </FooterLinksContainer> */}
        {/* <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo
              to="/"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              onClick={toggleHome}
            >
              HS Connect
            </SocialLogo>

            <WebsiteRights>
              HS Connect © {new Date().getFullYear()} All Rights Reserved
            </WebsiteRights>
            {/* <SocialIcons>
              <SocialIconLink
                href="https://github.com/hsconnect-react"
                target="_blank"
                aria-label="Github"
              >
                <FaGithub />
              </SocialIconLink>
              <SocialIconLink href="" target="_blank" aria-label="LinkedIn">
                <FaLinkedinIn />
              </SocialIconLink>
              <SocialIconLink href="" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
            </SocialIcons> */}
        {/* </SocialMediaWrap>
        </SocialMedia> */}{" "}
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
