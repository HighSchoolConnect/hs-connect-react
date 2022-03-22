import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeroContainer = styled.div`
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 80vh;
  position: relative;
  z-index: 1;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    /* background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%); */
    z-index: 2;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const HeroBgImage = styled.img`
  background-color: black;
  filter: blur(5px);
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  -khtml-user-select: none;
  -o-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  /* padding: 8px 24px; */
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 106px;
  text-align: center;
  text-shadow: 4px 4px 15px #000000;
  font-weight: 400;
  font-style: italic;

  @media screen and (max-width: 768px) {
    font-size: 86px;
  }

  @media screen and (max-width: 480px) {
    font-size: 78px;
  }

  @media screen and (max-width: 580px) {
    font-size: 55px;
  }
`;

export const HeroP = styled.p`
  color: #fff;
  font-size: 24px;
  text-align: center;
  text-shadow: 4px 4px 15px #000000;
  font-weight: 400;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 24px;
  }

  @media screen and (max-width: 580px) {
    font-size: 12px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroForm = styled.div`
  margin: 20px;
  height: 60px;

  background-color: #000000;
  box-shadow: 4px 4px 15px #000000;

  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 580px) {
    height: 50px;
    margin: 10px;
  }
`;

export const HeroInput = styled.input`
  height: 60px;
  background-color: #161616;
  font-size: 16px;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 450px;
  color: #00c6d3;
  border: 0;
  outline: 0;
  background: none;
  padding: 0 10px;
  caret-color: #00c6d3;
  line-height: 40px;
  border-radius: 30px;
  text-align: center;

  @media screen and (max-width: 768px) {
    width: 450px;
  }

  @media screen and (max-width: 580px) {
    width: 270px;
    font-size: 10px;
  }
`;

export const HeroBtn = styled(Link)`
  height: 40px;
  width: 40px;
  float: right;
  display: flex;
  padding-right: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: #00c6d3;
  text-decoration: none;
  background-color: #000000;
  border: 0;
  cursor: pointer;

  @media screen and (max-width: 580px) {
    height: 20px;
    width: 20px;
  }
`;

export const HeroFilter = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  align-items: center;
  margin-top: 20px;
  border-radius: 30px;

  @media screen and (max-width: 768px) {
    grid-gap: 20px:;
  }

  @media screen and (max-width: 580px) {
    grid-gap: 10px;
  }
`;
