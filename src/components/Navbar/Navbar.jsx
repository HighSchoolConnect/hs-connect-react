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
} from "./NavbarElements";

import { useAuth, logout, db, auth } from "../Signup/Firebase";
import { Button, Image } from "@chakra-ui/react";
import { doc, getDoc } from "firebase/firestore";
import { HamburgerIcon } from "@chakra-ui/icons";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const [company, setCompany] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [isApplicant, setIsApplicant] = useState(false);
  const [isEmployer, setIsEmployer] = useState(false);

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

  var button = <Button></Button>;
  if (currentUser != null) {
    button = (
      <NavLinks
        to="/"
        duration={500}
        exact="true"
        offset={-80}
        onClick={handleLogout}
      >
        Log Out
      </NavLinks>
    );
  } else {
    button = (
      <NavLinks to="signin" duration={500} exact="true" offset={-80}>
        Log In / Sign Up
      </NavLinks>
    );
  }

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            {isEmployer ? "HS Connect: " + company : "HS Connect"}
          </NavLogo>

          <MobileIcon onClick={toggle}>
            <HamburgerIcon />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="/"
                duration={500}
                exact="true"
                offset={-80}
                onClick={toggleHome}
              >
                Home
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="aboutus"
                duration={500}
                exact="true"
                offset={-80}
                onClick={toggleHome}
              >
                About Us
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks
                to="faq"
                duration={500}
                exact="true"
                offset={-80}
                onClick={toggleHome}
              >
                FAQ
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="contactus"
                duration={500}
                exact="true"
                offset={-80}
                onClick={toggleHome}
              >
                Contact Us
              </NavLinks>
            </NavItem>

            <NavItem>{button}</NavItem>
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
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
