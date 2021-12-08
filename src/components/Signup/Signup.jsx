import React, { useState, useRef } from "react";

import {
  SignupContainer,
  SignupTitle,
  SignupForm,
  SignupWrapper,
} from "./SignupElements";

import { Input, Button } from "@chakra-ui/react";

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
            placeholder="Password Repeat"
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
      </SignupWrapper>
    </SignupContainer>
  );
};

export default Signup;
