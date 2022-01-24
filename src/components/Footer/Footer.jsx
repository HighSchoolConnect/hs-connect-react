import React from "react";
import { FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";

import { animateScroll as scroll } from "react-scroll";

import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItem,
  FooterLinkTitle,
  FooterLink,
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItem>
              <FooterLinkTitle>Made With:</FooterLinkTitle>
              <FooterLink to="/">React.js,</FooterLink>
              <FooterLink to="/">Styled Components,</FooterLink>
              <FooterLink to="/">Chakra UI.</FooterLink>
            </FooterLinkItem>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
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
            <SocialIcons>
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
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
