import styled from "styled-components";
import Image from "../../images/hero-bg.jpg";

export const SignupContainer = styled.div`
  background-color: #010024;
  background-image: linear-gradient(#00c6d3, #000000);
  color: #fff;
  background-image: url(${Image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;
export const SignupWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 670px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);

  justify-content: center;
  align-items: center;
  background-color: #000;
`;

export const SignUpRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart
      ? `'col2 
    col1'`
      : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart
        ? `'col1' 
        'col2'`
        : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 px;
  grid-area: col1;
  text-shadow: 4px 4px 25px #000000;
`;

export const Column2 = styled.div`
  grid-area: col2;
`;

export const SignupTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  text-shadow: 4px 4px 25px #000000;
  display: flex;

  flex-direction: column;
  align-items: center;
`;

export const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 20px;
`;

export const FormDivider = styled.div`
  height: 0px;
`;

export const ImgWrap = styled.div`
  max-width: 1000px;
  height: 660px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 670px;
  margin-right: auto;
  margin-left: auto;
  margin-top: -10px;
  margin-bottom: 20px;
`;
