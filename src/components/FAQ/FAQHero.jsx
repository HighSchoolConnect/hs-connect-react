import React from "react";
import Image from "../../images/hero-bg.jpg";

import { Bg, BgImage } from "../../components/GeneralPurpose/GPElements";

import { FAQContainer, FAQContent, FAQH1, FAQAccordions } from "./FAQElements";
import FAQAccordion from "./FAQAccordion";
import { questions } from "./Questions";

import { Accordion } from "@chakra-ui/react";

const FAQHero = () => {
  return (
    <FAQContainer>
      <Bg>
        <BgImage src={Image} type="image/jpg" />
      </Bg>
      <FAQContent>
        <FAQH1>Frequently Asked Questions</FAQH1>
        <FAQAccordions>
          <Accordion
            allowToggle
            bg="teal"
            color="white"
            border="white"
            borderRadius={5}
            padding={5}
          >
            {questions.map((question) => {
              return (
                <FAQAccordion
                  key={question.id}
                  id={question.id}
                  question={question.question}
                  answer={question.answer}
                />
              );
            })}
          </Accordion>
        </FAQAccordions>
      </FAQContent>
    </FAQContainer>
  );
};

export default FAQHero;
