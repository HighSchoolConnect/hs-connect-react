import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  ChakraLink,
  NavLogoLink,
  NavMobile,
} from "./NavbarElements";

import { useAuth, logout, db, auth } from "../Signup/Firebase";
import {
  // Button,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  HStack,
} from "@chakra-ui/react";
import { doc, getDoc } from "firebase/firestore";
import { BellIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const [company, setCompany] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [isApplicant, setIsApplicant] = useState(false);
  const [isEmployer, setIsEmployer] = useState(false);
  const navigate = useNavigate();

  const refresh = () => {
    navigate(0);
  };

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);

    const unsub = auth.onAuthStateChanged((authObj) => {
      unsub();
      if (authObj) {
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
            setIsApplicant(false);
            setIsEmployer(true);
            setPhotoURL("");

            const userCollectionRef = await doc(
              db,
              "employers",
              auth.currentUser.uid
            );
            const userData = await getDoc(userCollectionRef);
            console.log(userData.data().company);
            setCompany(userData.data().company);
          }

          if (userData.data() !== undefined) {
            setPhotoURL(userData.data().photoURL);
            setIsApplicant(true);
            console.log("qqq");
          }
        };
        getUserData();
      } else {
        setPhotoURL("");
      }
    });
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const currentUser = useAuth();

  async function handleLogout() {
    try {
      await logout();
      refresh();
    } catch {
      alert("Error signing out");
    }
  }

  var currentRoute = "/";

  if (isApplicant) {
    currentRoute = "/profile";
  } else if (isEmployer) {
    currentRoute = "/dashboard";
  } else {
    currentRoute = "/signin";
  }

  // var button2 = <Button></Button>;

  if (isApplicant) {
    // button2 = (
    //   <NavLinks
    //     to="/profile"
    //     duration={500}
    //     exact="true"
    //     offset={-80}
    //     onClick={toggleHome}
    //   >
    //     Profile
    //   </NavLinks>
    // );
  } else if (isEmployer) {
    // button2 = (
    //   <NavLinks
    //     to="/dashboard"
    //     duration={500}
    //     exact="true"
    //     offset={-80}
    //     onClick={toggleHome}
    //   >
    //     Dashboard
    //   </NavLinks>
    // );
  } else {
  }

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <HStack spacing={2}>
            <NavLogo to="/" onClick={toggleHome}>
              {isEmployer ? "HS Connect: " + company : "HS Connect"}
            </NavLogo>
            <NavMobile>
              <NavLogoLink
                to="/results"
                duration={500}
                exact="true"
                offset={-80}
                onClick={toggleHome}
              >
                Find Jobs
              </NavLogoLink>
              <NavLogoLink
                to="/signup"
                duration={500}
                exact="true"
                offset={-80}
                onClick={toggleHome}
              >
                Post a Job
              </NavLogoLink>
            </NavMobile>
          </HStack>

          <MobileIcon onClick={toggle}>
            <HamburgerIcon />
          </MobileIcon>
          <NavMenu>
            {isApplicant ? (
              <NavItem>
                <NavLinks
                  to="notification"
                  duration={500}
                  exact="true"
                  offset={-80}
                  onClick={toggleHome}
                >
                  <BellIcon boxSize="2rem" />
                </NavLinks>
              </NavItem>
            ) : (
              <></>
            )}

            <NavItem>
              {!currentUser ? (
                <NavLinks
                  to="/signin"
                  duration={500}
                  exact="true"
                  offset={-80}
                  onClick={toggleHome}
                >
                  Sign In / Sign Up
                </NavLinks>
              ) : (
                <></>
              )}
            </NavItem>
            <Menu>
              <MenuButton>
                <NavItem>
                  {" "}
                  <NavLinks
                    to={currentRoute}
                    duration={500}
                    exact="true"
                    offset={-80}
                    onClick={toggleHome}
                    // onClick={loggedInChecker}
                  >
                    <Image
                      src={
                        photoURL ||
                        "https://firebasestorage.googleapis.com/v0/b/thehsconnect.appspot.com/o/undraw_profile_pic_ic-5-t%20(1).svg?alt=media&token=49609533-c10e-43fd-863d-1de315962adf"
                      }
                      h="45px"
                      w="45px"
                      borderRadius="full"
                      borderColor="teal"
                      borderWidth="1px"
                    />
                  </NavLinks>
                </NavItem>{" "}
              </MenuButton>
              <MenuList>
                {isApplicant ? (
                  <MenuItem>
                    <ChakraLink
                      to="/profile"
                      duration={500}
                      exact="true"
                      offset={-80}
                      onClick={toggleHome}
                    >
                      Profile
                    </ChakraLink>
                  </MenuItem>
                ) : (
                  <></>
                )}
                {isEmployer ? (
                  <MenuItem>
                    <ChakraLink
                      to="/profile"
                      duration={500}
                      exact="true"
                      offset={-80}
                      onClick={toggleHome}
                    >
                      Dashboard
                    </ChakraLink>
                  </MenuItem>
                ) : (
                  <></>
                )}

                {isApplicant ? (
                  <MenuItem>
                    <ChakraLink
                      to="resume"
                      duration={500}
                      exact="true"
                      offset={-80}
                      onClick={toggleHome}
                    >
                      Resume
                    </ChakraLink>
                  </MenuItem>
                ) : null}
                {currentUser ? (
                  <MenuItem>
                    <ChakraLink
                      to="/"
                      duration={500}
                      exact="true"
                      offset={-80}
                      onClick={handleLogout}
                    >
                      Log Out
                    </ChakraLink>
                  </MenuItem>
                ) : null}
                <MenuItem>
                  <ChakraLink
                    to="contactus"
                    duration={500}
                    exact="true"
                    offset={-80}
                    onClick={toggleHome}
                  >
                    Contact Us
                  </ChakraLink>
                </MenuItem>
              </MenuList>
            </Menu>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
