import styled from "styled-components";

export const ContactContainer = styled.div`
  height: 1000px;
  background-color: #010024;
  background-image: linear-gradient(#00c6d3, #000000);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    height: 700px;
  }
`;

export const ContactFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 500px;
  padding: 25px;
  color: #fff;
  background-color: #005b61;
  border-radius: 10px;
  box-shadow: 0px 0px 10px #000;
  gap: 20px;
  text-shadow: 0px 0px 10px #000;

  @media (max-width: 600px) {
    width: 300px;
    height: 600px;
  }
`;
export const ContactH1 = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin: 0;
  padding: 0;
  color: #fff;
  text-shadow: 0px 0px 10px #000;
  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;
