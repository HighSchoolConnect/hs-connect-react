import React from "react";
import Image from "../../images/hero-bg.png";

import { Bg, BgImage } from "../../components/GeneralPurpose/GPElements";

import { FAQContainer, FAQContent } from "./FAQElements";

const FAQHero = () => {
  return (
    <FAQContainer>
      <Bg>
        <BgImage src={Image} type="image/jpg" />
      </Bg>
      <FAQContent>FAQ</FAQContent>
    </FAQContainer>
  );
};

export default FAQHero;
