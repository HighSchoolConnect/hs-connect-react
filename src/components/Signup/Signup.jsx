import React, { useState, useRef } from "react";
import Image from "../../images/hero-bg.png";

import {
  SignupContainer,
  SignupTitle,
  SignupForm,
  SignupWrapper,
  SignUpRow,
  Column1,
  Column2,
  ImgWrap,
  Img,
  FormDivider,
} from "./SignupElements";

import { Input, Button, Checkbox, Link } from "@chakra-ui/react";

import { signup, useAuth, logout, login } from "./Firebase.js";

import { Navigate } from "react-router-dom";

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [authDone, setAuthDone] = useState(false);
  const currentUser = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleSignup() {
    setLoading(true);
    try {
      await signup(emailRef.current.value, passwordRef.current.value);
      setAuthDone(true);
    } catch {
      alert("Error signing up");
    }
    setLoading(false);
  }
  async function handleLogin() {
    setLoading(true);
    try {
      await login(emailRef.current.value, passwordRef.current.value);
      setAuthDone(true);
    } catch {
      alert("Error signing up");
    }
    setLoading(false);
  }

  async function handleLogout() {
    setLoading(true);
    try {
      await logout();
      setAuthDone(false);
    } catch {
      alert("Error signing out");
    }
    setLoading(false);
  }

  if (authDone === true) {
    return <Navigate to="/profile" />;
  }

  return (
    <SignupContainer>
      <SignupWrapper>
        <SignUpRow imgStart={true}>
          <Column1>
            <SignupTitle>Create an account</SignupTitle>
            <SignupForm>
              <Input
                placeholder="Email"
                type="email"
                bg="#000000"
                borderColor="#1cc97e"
                color="white"
                _placeholder={{ color: "white" }}
                ref={emailRef}
                width={400}
                size="lg"
              />
              <Input
                placeholder="Password"
                type="password"
                bg="#000000"
                borderColor="#1cc97e"
                color="white"
                _placeholder={{ color: "white" }}
                ref={passwordRef}
                width={400}
                size="lg"
              />
              <Input
                placeholder="Password Repeat"
                type="password"
                bg="#000000"
                borderColor="#1cc97e"
                color="white"
                _placeholder={{ color: "white" }}
                ref={passwordRef}
                width={400}
                size="lg"
              />
              <Checkbox>
                I agree to the <Link color="black" >license</Link> terms
              </Checkbox>
              <FormDivider></FormDivider>
              <Button
                isLoading={loading}
                isDisabled={currentUser != null}
                bg="#000000"
                color="white"
                _hover={{ bg: "#005530", color: "white" }}
                onClick={handleSignup}
                width={400}
                size="lg"
                to="/profile"
              >
                Sign Up
              </Button>
              <Link>Already have an account? Login Here!</Link>
              {/* <Button
                isLoading={loading}
                isDisabled={currentUser != null}
                bg="#000000"
                color="white"
                _hover={{ bg: "#1cc97e", color: "white" }}
                onClick={handleLogin}
                width={400}
                size="lg"
                to="/profile"
              >
                Sign In
              </Button>
              <Button
                onClick={handleLogout}
                bg="#000000"
                color="white"
                _hover={{ bg: "#1cc97e", color: "white" }}
                disabled={loading || !currentUser}
                width={400}
                height={50}
              >
                LogOut
              </Button> */}
            </SignupForm>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img src={Image} />
            </ImgWrap>
          </Column2>
        </SignUpRow>
      </SignupWrapper>
    </SignupContainer>
  );
};

export default Signup;
