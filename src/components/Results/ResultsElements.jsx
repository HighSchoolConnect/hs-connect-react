import styled from "styled-components";

export const ResultsContainer = styled.div`
  background-color: black;
  display: flex;
  justify-content: center;
  padding: 0 30px;
  height: 100vh;
  position: relative;
  z-index: 1;


`;

export const ResultsWrapper = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ResultsTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #fff;
  text-align: center;
  margin: 0;
  padding: 0;
`;

export const ResultsBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const ResultsImage = styled.img`
  background-color: black;
  filter: blur(2px);
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`;

export const ResultsRow = styled.div`
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