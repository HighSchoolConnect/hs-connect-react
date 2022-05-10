import React, { useState, useRef } from "react";
import Image from "../../images/hero-bg.jpg";

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

import {
  createEmployerDocument,
  createUserDocument,
  signup,
  useAuth,
} from "./Firebase.js";

import { Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [authDone, setAuthDone] = useState(false);
  const [signin, setSignin] = useState(false);
  const [isEmployer, setIsEmployer] = useState(false);
  const currentUser = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();
  const displayNameRef = useRef();
  const toast = useToast();
  const checkboxRef = useRef();
  const companyRef = useRef();

  const employerCheckboxRef = useRef();
  const { id, title } = useParams();
  console.log(id, title);
  async function handleSignup() {
    setLoading(true);
    if (checkboxRef.current.checked === false) {
      toast({
        title: "Please accept the terms and conditions",
        description: "",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } else {
      if (
        emailRef &&
        passwordRef &&
        employerCheckboxRef.current.checked === true
      ) {
        try {
          await signup(emailRef.current.value, passwordRef.current.value);
          await createEmployerDocument(
            currentUser,
            displayNameRef.current.value,
            companyRef.current.value
          );
          setAuthDone(true);
          setIsEmployer(true);
          toast({
            title: "Account created.",
            description: "We've created your account for you.",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
        } catch (error) {
          toast({
            title: "Please check all the fields",
            description: error.message,
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        }
      } else if (
        emailRef &&
        passwordRef &&
        employerCheckboxRef.current.checked === false
      ) {
        try {
          await signup(emailRef.current.value, passwordRef.current.value);
          await createUserDocument(currentUser, displayNameRef.current.value);
          setAuthDone(true);
          toast({
            title: "Account created.",
            description: "We've created your account for you.",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
        } catch (error) {
          toast({
            title: "Please check all the fields",
            description: error.message,
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        }
      }
    }
    setLoading(false);
  }

  function navigateToSignin() {
    setSignin(true);
  }

  if (authDone === true) {
    if (isEmployer === true) {
      return <Navigate to="/dashboard" />;
    } else {
      if (id === undefined) {
        return <Navigate to="/profile" />;
      } else {
        return <Navigate to={"/apply/" + id + "/" + title} />;
      }
    }
  }

  if (signin === true) {
    if (id === undefined) {
      return <Navigate to="/signin" />;
    } else {
      return <Navigate to={"/signin/" + id + "/" + title} />;
    }
  }

  return (
    <SignupContainer>
      <SignupWrapper>
        <SignUpRow imgStart={true}>
          <Column1>
            <SignupTitle>Create an account</SignupTitle>
            <SignupForm>
              <Input
                placeholder="Name"
                type="text"
                bg="#00c6d3"
                borderColor="#00c6d3"
                color="white"
                _placeholder={{ color: "white" }}
                ref={displayNameRef}
                width={400}
                size="lg"
              />
              <Input
                placeholder="Company"
                type="text"
                bg="#00c6d3"
                borderColor="#00c6d3"
                color="white"
                _placeholder={{ color: "white" }}
                ref={companyRef}
                width={400}
                size="lg"
              />
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
              <Checkbox colorScheme="teal" ref={employerCheckboxRef}>
                I am an employer
              </Checkbox>
              <Checkbox colorScheme="teal" ref={checkboxRef}>
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
      </SignupWrapper>
    </SignupContainer>
  );
};

export default Signup;
