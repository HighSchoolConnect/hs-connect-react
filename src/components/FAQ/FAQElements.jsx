import styled from "styled-components";

export const FAQContainer = styled.div`
  background-color: clear;
  display: flex;
  justify-content: center;
  align-items: top;
  padding: 0 30px;
  height: 150vh;
  position: relative;
  z-index: 1;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;

export const FAQContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  width: 100%;
`;

export const FAQAccordions = styled.div`
  z-index: 3;
  max-width: 1200px;
  width: 100%;
  height: fit-content;
  margin-top: 50px;
  padding: 30px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  
`;

export const FAQH1 = styled.h1`
  color: #fff;
  font-size: 60px;
  text-align: center;
  text-shadow: 4px 4px 25px #000000;
  font-weight: 400;

  @media screen and (max-width: 768px) {
    font-size: 70px;
  }

  @media screen and (max-width: 480px) {
    font-size: 60px;
  }
`;
