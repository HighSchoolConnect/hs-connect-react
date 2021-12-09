import styled from "styled-components";

export const SigninContainer = styled.div`
  background-color: #000;
  color: #fff;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;
export const SigninWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 660px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;

  justify-content: center;
  background-color: #1cc97e;
`;

export const SignInRow = styled.div`
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

export const SigninTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  text-shadow: 4px 4px 25px #000000;
  display: flex;

  flex-direction: column;
  align-items: center;
`;

export const SigninForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 20px;
`;

export const FormDivider = styled.div`
  height: 50px;
`;

export const ImgWrap = styled.div`
  max-width: 1000px;
  height: 660px;
`;

export const Img = styled.img`
  width: 100%;
  height: 660px;
  margin: 0 0 10px 0;
`;
