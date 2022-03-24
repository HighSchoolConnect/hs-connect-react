import React, { useState, useRef } from "react";
import Image from "../../images/hero-bg.jpg";

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

import { Input, Button, Link, HStack } from "@chakra-ui/react";

import { useAuth, login, db, auth } from "../Signup/Firebase";

import { Navigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";

const Signin = () => {
  const [loading, setLoading] = useState(false);
  const [authDone, setAuthDone] = useState(false);
  const [signup, setSignup] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);
  const currentUser = useAuth();
  const [userData, setUserData] = useState({});

  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleLogin() {
    setLoading(true);
    try {
      await login(emailRef.current.value, passwordRef.current.value);
      const getUserData = async () => {
        const userCollectionRef = await doc(db, "users", auth.currentUser.uid);
        const userData = await getDoc(userCollectionRef);
        console.log(userData.data());
        // setUser(userData.data());

        if (userData.data() === undefined) {
          const userCollectionRef = await doc(
            db,
            "employers",
            auth.currentUser.uid
          );
          const userData = await getDoc(userCollectionRef);
          setUserData(userData.data());
        }

        if (userData.data() !== undefined) {
          setUserData(userData.data());
        }
      };
      await getUserData();

      setAuthDone(true);
    } catch (error) {
      alert(error.message);
    }
    setLoading(false);
  }

  function navigateToSignup() {
    setSignup(true);
  }

  function navigateToForgotPassword() {
    setForgotPassword(true);
  }

  if (currentUser && authDone && userData.employer) {
    return <Navigate to="/dashboard" />;
  } else if (currentUser && authDone && userData.employer === false) {
    return <Navigate to="/profile" />;
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
