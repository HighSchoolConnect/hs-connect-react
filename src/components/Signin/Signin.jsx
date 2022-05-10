import React, { useState, useRef, useEffect } from "react";
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

import { Input, Button, Link, HStack, useToast } from "@chakra-ui/react";

import { useAuth, login, db, auth } from "../Signup/Firebase";

import { Navigate, useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";

const Signin = () => {
  const [loading, setLoading] = useState(false);
  const [authDone, setAuthDone] = useState(false);
  const [signup, setSignup] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);
  const currentUser = useAuth();
  const [userData, setUserData] = useState({});
  const [check, setCheck] = useState(false);

  const emailRef = useRef();
  const passwordRef = useRef();

  const toast = useToast();

  const navigate = useNavigate();
  const { id, title } = useParams();
  console.log(id, title);
  const refresh = () => {
    navigate(0);
  };

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((authObj) => {
      unsub();
      if (authObj) {
        const data = async () => {
          const getUserData = async () => {
            const userCollectionRef = await doc(
              db,
              "users",
              auth.currentUser.uid
            );
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
          setCheck(true);
        };
        data();
      }
    });
  }, []);

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
          toast({
            title: "Login Successful",
            description: "Welcome back!",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
        }

        if (userData.data() !== undefined) {
          setUserData(userData.data());
          toast({
            title: "Login Successful",
            description: "Welcome back!",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
        }
      };
      refresh();

      await getUserData();

      setAuthDone(true);
    } catch (error) {
      toast({
        title: "Error",
        description: error.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
    setLoading(false);
  }

  function navigateToSignup() {
    setSignup(true);
  }

  function navigateToForgotPassword() {
    setForgotPassword(true);
  }

  if (
    (currentUser && userData.employer && check) ||
    (authDone && userData.employer && check)
  ) {
    return <Navigate to="/dashboard" />;
  } else if (
    (currentUser !== userData.employer && check) ||
    (authDone && userData.employer === false && check)
  ) {
    if (id === undefined) {
      return <Navigate to="/profile" />;
    } else {
      return <Navigate to={"/apply/" + id + "/" + title} />;
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
