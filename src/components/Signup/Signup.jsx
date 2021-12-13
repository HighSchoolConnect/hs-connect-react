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

import { Input, Button, Checkbox, Link, useToast } from "@chakra-ui/react";

import { signup, useAuth } from "./Firebase.js";

import { Navigate } from "react-router-dom";

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [authDone, setAuthDone] = useState(false);
  const [signin, setSignin] = useState(false);
  const currentUser = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();
  const toast = useToast();

  async function handleSignup() {
    setLoading(true);
    try {
      await signup(emailRef.current.value, passwordRef.current.value);
      setAuthDone(true);
              toast({
                title: "Account created.",
                description: "We've created your account for you.",
                status: "success",
                duration: 3000,
                isClosable: true,
              });
    } catch {
      toast({
        title: "Please check all the fields",
        description: "Ensure you have entered a valid email and password",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
    setLoading(false);
  }

  function navigateToSignin() {
    setSignin(true);
  }

  if (authDone === true) {
    return <Navigate to="/profile" />;
  }

  if (signin === true) {
    return <Navigate to="/signin" />;
  }

  return (
    <SignupContainer>
      <SignupWrapper>
<<<<<<< HEAD
        <SignupTitle>Create an account</SignupTitle>
        <SignupForm>
          {/* <Input
            placeholder="First Name"
            bg="#000000"
            borderColor="#1cc97e"
            color="white"
            _placeholder={{ color: "white" }}
          />
          <Input
            placeholder="Last Name"
            bg="#000000"
            borderColor="#1cc97e"
            color="white"
            _placeholder={{ color: "white" }}
          /> */}
          <Input
            placeholder="Email"
            type="email"
            bg="#000000"
            borderColor="#1cc97e"
            color="white"
            _placeholder={{ color: "white" }}
            ref={emailRef}
          />
          <Input
            placeholder="Password"
            type="password"
            bg="#000000"
            borderColor="#1cc97e"
            color="white"
            _placeholder={{ color: "white" }}
            ref={passwordRef}
          />
          <Input
            placeholder="Confirm Password"
            type="password"
            bg="#000000"
            borderColor="#1cc97e"
            color="white"
            _placeholder={{ color: "white" }}
            ref={passwordRef}
          />
          <Button
            isLoading={loading}
            isDisabled={currentUser != null}
            bg="#000000"
            color="white"
            _hover={{ bg: "#1cc97e", color: "white" }}
            onClick={handleSignup}
            size="lg"
          >
            Sign Up
          </Button>
          <Button
            isLoading={loading}
            isDisabled={currentUser != null}
            bg="#000000"
            color="white"
            _hover={{ bg: "#1cc97e", color: "white" }}
            onClick={handleLogin}
            size="lg"
            to="/profile"
          >
            Sign In
          </Button>
          <Button
            isLoading={loading}
            isDisabled={currentUser != null}
            bg="#000000"
            color="white"
            _hover={{ bg: "#1cc97e", color: "white" }}
            size="lg"
          >
            Google
          </Button>
          <Button
            onClick={handleLogout}
            bg="#000000"
            color="white"
            _hover={{ bg: "#1cc97e", color: "white" }}
            disabled={loading || !currentUser}
          >
            LogOut
          </Button>
        </SignupForm>
=======
        <SignUpRow imgStart={true}>
          <Column1>
            <SignupTitle>Create an account</SignupTitle>
            <SignupForm>
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
              <Input
                placeholder="Password Repeat"
                type="password"
                bg="#00c6d3"
                borderColor="#00c6d3"
                color="white"
                _placeholder={{ color: "white" }}
                ref={passwordRef}
                width={400}
                size="lg"
              />
              <Checkbox colorScheme="teal">
                I agree to the <Link color="#00c6d3">license</Link> terms
              </Checkbox>
              <FormDivider></FormDivider>
              <Button
                isLoading={loading}
                isDisabled={currentUser != null}
                bg="#00c6d3"
                color="white"
                _hover={{ bg: "#2C7A7B", color: "white" }}
                onClick={handleSignup}
                width={400}
                size="lg"
                to="/profile"
              >
                Sign Up
              </Button>
              <Link onClick={navigateToSignin}>
                Already have an account? Login Here!
              </Link>
              {/* <Button
                isLoading={loading}
                isDisabled={currentUser != null}
                bg="#00c6d3"
                color="white"
                _hover={{ bg: "#00c6d3", color: "white" }}
                onClick={handleLogin}
                width={400}
                size="lg"
                to="/profile"
              >
                Sign In
              </Button>
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
            </SignupForm>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img src={Image} />
            </ImgWrap>
          </Column2>
        </SignUpRow>
>>>>>>> 40308627db0cb6d4b81aa1f74abea4157d7417f8
      </SignupWrapper>
    </SignupContainer>
  );
};

export default Signup;
