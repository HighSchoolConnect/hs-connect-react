import styled from "styled-components";

export const SignupContainer = styled.div`
  height: 1000px;

  background-color: #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    height: 700px;
  }
`;
export const SignupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 25px;
  color: #fff;
  background-color: #1cc97e;
  border-radius: 10px;
  box-shadow: 0px 0px 10px #000;
  gap: 20px;
  text-shadow: 0px 0px 10px #000;

  width: 500px;
  height: 600px;

  @media (max-width: 600px) {
    width: 600px;
    height: 600px;
  }
`;

export const SignupTitle = styled.h1`
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 20px;
`;

export const SignupForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    gap: 10px;
`;

