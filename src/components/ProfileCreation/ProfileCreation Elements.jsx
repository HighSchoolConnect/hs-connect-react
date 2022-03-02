import styled from "styled-components";

export const ProfileContainer = styled.div`
  background-color: hsl(0, 0%, 0%);
  background-color: clear;
  display: flex;
  justify-content: center;
  padding: 60px 30px;
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
  height: fit-content;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 30px;
`;