import styled from "styled-components";

export const ProfileContainer = styled.div`
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

export const ProfileContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
