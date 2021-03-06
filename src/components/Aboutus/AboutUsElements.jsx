import styled from "styled-components";

export const AboutUsContainer = styled.div`
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
  }
`;

export const AboutUsBgImage = styled.img`
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
  font-size: 14px;
  text-align: center;
  text-shadow: 4px 4px 25px #000000;
  font-weight: 400;

  padding: 20px;

  @media screen and (max-width: 768px) {
    font-size: 10px;
  }

  @media screen and (max-width: 500px) {
    font-size: 10px;
  }

  @media screen and (max-width: 950px) {
    font-size: 14px;
  }
`;

export const TextH1 = styled.h1`
  color: #fff;
  font-size: 80px;
  text-align: center;
  text-shadow: 4px 4px 25px #000000;
  font-weight: 400;

  @media screen and (max-width: 768px) {
    font-size: 60px;
  }

  @media screen and (max-width: 480px) {
    font-size: 50px;
  }

  @media screen and (max-width: 950px) {
    font-size: 75px;
  }
`;

export const TextH2 = styled.h2`
  color: #fff;
  font-size: 70px;
  text-align: center;
  text-shadow: 4px 4px 25px #000000;
  font-weight: 400;

  @media screen and (max-width: 950px) {
    font-size: 55px;
  }

  @media screen and (max-width: 768px) {
    font-size: 55px;
  }

  @media screen and (max-width: 650px) {
    font-size: 45px;
  }

  @media screen and (max-width: 500px) {
    font-size: 40px;
  }
`;

export const TextH3 = styled.h3`
  color: #fff;
  font-size: 38px;
  text-align: center;
  text-shadow: 4px 4px 25px #000000;
  font-weight: 400;

  @media screen and (max-width: 950px) {
    font-size: 35px;
  }

  @media screen and (max-width: 768px) {
    font-size: 23px;
  }

  @media screen and (max-width: 512px) {
    font-size: 15px;
  }
`;

export const TextTeam = styled.p`
  color: #fff;
  font-size: 16px;
  text-align: center;
  text-shadow: 4px 4px 25px #000000;
  font-weight: 400;
  padding: 10px;

  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
`;
