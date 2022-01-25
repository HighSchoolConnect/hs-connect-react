import styled from "styled-components";

export const AboutUsContainer = styled.div`
  background-color: clear;
  display: flex;
  justify-content: center;
  align-items: top;
  padding: 0 30px;
  height: 100vh;
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

export const AboutUsBgImage = styled.img`
  background-color: black;
  filter: blur(2px);
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`;

export const AboutUsBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const AboutUsContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TextCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 3;
  padding: 0 20px;
`;

export const TextP = styled.p`
  color: #fff;
  font-size: 16px;
  text-align: center;
  text-shadow: 4px 4px 25px #000000;
  font-weight: 400;

  padding: 20px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

export const TextH1 = styled.h1`
  color: #fff;
  font-size: 80px;
  text-align: center;
  text-shadow: 4px 4px 25px #000000;
  font-weight: 400;

  @media screen and (max-width: 1500px) {
    font-size: 120px;
  }

  @media screen and (max-width: 768px) {
    font-size: 70px;
  }

  @media screen and (max-width: 480px) {
    font-size: 60px;
  }
`;

export const TextH2 = styled.h2`
  color: #fff;
  font-size: 70px;
  text-align: center;
  text-shadow: 4px 4px 25px #000000;
  font-weight: 400;

  @media screen and (max-width: 1500px) {
    font-size: 100px;
  }

  @media screen and (max-width: 950px) {
    font-size: 70px;
  }

  @media screen and (max-width: 848px) {
    font-size: 50px;
  }

  @media screen and (max-width: 600px) {
    font-size: 40px;
  }
`;

export const TextH3 = styled.h3`
  color: #fff;
  font-size: 40px;
  text-align: center;
  text-shadow: 4px 4px 25px #000000;
  font-weight: 400;

  @media screen and (max-width: 1500px) {
    font-size: 80px;
  }

  @media screen and (max-width: 950px) {
    font-size: 30px;
  }

  @media screen and (max-width: 848px) {
    font-size: 30px;
  }

  @media screen and (max-width: 600px) {
    font-size: 30px;
  }
`;
