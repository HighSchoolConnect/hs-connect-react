import React, { useState, useRef } from "react";
import Image from "../../../images/hero-bg.png";

import {
  ForgotPasswordContainer,
  ForgotPasswordTitle,
  ForgotPasswordForm,
  ForgotPasswordWrapper,
  ForgotPasswordRow,
  Column1,
  Column2,
  ImgWrap,
  Img,
  FormDivider,
} from "./ForgotPasswordElements";

import { Input, Button, Link } from "@chakra-ui/react";

import { useAuth, resetPassword } from "../../Signup/Firebase";

import { Navigate } from "react-router-dom";

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  const [signin, setSignin] = useState(false);
  const currentUser = useAuth();

  const emailRef = useRef();

  async function handleLogin() {
    setLoading(true);
    try {
      await resetPassword(emailRef.current.value);
      setSignin(true);
    } catch {
      alert("Error sending email");
    }
    setLoading(false);
  }

  function navigateToSignin() {
    setSignin(true);
  }

  if (signin === true) {
    return <Navigate to="/signin" />;
  }

  return (
    <ForgotPasswordContainer>
      <ForgotPasswordWrapper>
        <ForgotPasswordRow imgStart={false}>
          <Column1>
            <ForgotPasswordTitle>Reset</ForgotPasswordTitle>
            <ForgotPasswordForm>
              <Input
                placeholder="Email"
                type="email"
                bg="#000000"
                borderColor="#00c6d3"
                color="white"
                _placeholder={{ color: "white" }}
                ref={emailRef}
                width={400}
                size="lg"
              />

              <FormDivider>
                <Button
                  isLoading={loading}
                  isDisabled={currentUser != null}
                  bg="#000000"
                  color="white"
                  _hover={{ bg: "#005530", color: "white" }}
                  onClick={handleLogin}
                  width={400}
                  size="lg"
                >
                  Send Reset Link
                </Button>
              </FormDivider>

              <Link onClick={navigateToSignin}>
                Remember your password? Login Here!
              </Link>
            </ForgotPasswordForm>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img src={Image} />
            </ImgWrap>
          </Column2>
        </ForgotPasswordRow>
      </ForgotPasswordWrapper>
    </ForgotPasswordContainer>
  );
};

export default ForgotPassword;
