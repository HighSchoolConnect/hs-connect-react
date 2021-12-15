import styled from "styled-components";

export const Bg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const BgImage = styled.img`
  background-color: black;
  filter: blur(2px);
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`;

export const TextCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextP = styled.p`
  color: #fff;
  font-size: 16px;
  text-align: center;
  text-shadow: 4px 4px 25px #000000;
  font-weight: 400;

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
  font-size: 50px;
  text-align: center;
  text-shadow: 4px 4px 25px #000000;
  font-weight: 400;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 30px;
  }
`;

export const TextH3 = styled.h3`
  color: #fff;
  font-size: 40px; /*${({ big }) => (big ? "50px" : "30px")};*/
  text-align: center;
  text-shadow: 4px 4px 25px #000000;
  font-weight: 400;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
`;
