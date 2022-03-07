import React, { useState, useRef } from "react";
import Image from "../../images/hero-bg.png";

import {
  SigninContainer,
  SigninTitle,
  SigninForm,
  SigninWrapper,
  SignInRow,
  Column1,
  Column2,
  ImgWrap,
  Img,
  FormDivider,
} from "./SigninElements";

import {
  Input,
  Button,
  Checkbox,
  Link,
  HStack,
  VStack,
} from "@chakra-ui/react";

import { useAuth, login, db, auth } from "../Signup/Firebase";

import { Navigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";

const Signin = () => {
  const [loading, setLoading] = useState(false);
  const [authDone, setAuthDone] = useState(false);
  const [signup, setSignup] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);
  const currentUser = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();
  const employerCheckboxRef = useRef();

  const [isEmployer, setIsEmployer] = useState(false);

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

  function navigateToSignup() {
    setSignup(true);
  }

  function navigateToForgotPassword() {
    setForgotPassword(true);
  }

  if (authDone === true) {
    if (employerCheckboxRef.current.checked === true) {
      const getUserData = async () => {
        const userCollectionRef = await doc(
          db,
          "employers",
          auth.currentUser.uid
        );

        const userData = await getDoc(userCollectionRef);
        if (userData.data().employer === true) {
          console.log("employer");
          setIsEmployer(true);
        }
      };
      getUserData();

      if (isEmployer === true) {
        window.location.reload(false);

        return <Navigate to="/dashboard" />;
      } else {
        return <Navigate to="/profile" />;
      }
    } else {
      return <Navigate to="/profile" />;
    }
  }

  if (signup === true) {
    return <Navigate to="/signup" />;
  }

  if (forgotPassword === true) {
    return <Navigate to="/forgotpassword" />;
  }
  return (
    <SigninContainer>
      <SigninWrapper>
        <SignInRow imgStart={false}>
          <Column1>
            <SigninTitle>Login</SigninTitle>
            <SigninForm>
              <Input
                placeholder="Email"
                type="email"
                bg="#00c6d3"
                borderColor="#00c6d3"
                color="white"
                _placeholder={{ color: "white" }}
                ref={emailRef}
                width={400}
                size="lg"
              />
              <Input
                placeholder="Password"
                type="password"
                bg="#00c6d3"
                borderColor="#00c6d3"
                color="white"
                _placeholder={{ color: "white" }}
                ref={passwordRef}
                width={400}
                size="lg"
              />
              <HStack spacing={20}>
                <VStack align="left">
                  <Checkbox>Keep me logged in</Checkbox>
                  <Checkbox colorScheme="teal" ref={employerCheckboxRef}>
                    I am an employer
                  </Checkbox>
                </VStack>
                <Link onClick={navigateToForgotPassword}>Forgot Password?</Link>
              </HStack>

              <FormDivider>
                <Button
                  isLoading={loading}
                  isDisabled={currentUser != null}
                  bg="#00c6d3"
                  color="white"
                  _hover={{ bg: "#2C7A7B", color: "white" }}
                  onClick={handleLogin}
                  width={400}
                  size="lg"
                  to="/profile"
                >
                  Sign In
                </Button>
              </FormDivider>
              <Link onClick={navigateToSignup}>
                Don't have an account? Signup Here!
              </Link>
              {/* 
              <Button
                onClick={handleLogout}
                bg="#00c6d3"
                color="white"
                _hover={{ bg: "#00c6d3", color: "white" }}
                disabled={loading || !currentUser}
                width={400}
                height={50}
              >
                LogOut
              </Button> */}
            </SigninForm>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img src={Image} />
            </ImgWrap>
          </Column2>
        </SignInRow>
      </SigninWrapper>
    </SigninContainer>
  );
};

export default Signin;
