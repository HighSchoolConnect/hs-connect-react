import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
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

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  // const [users, setUsers] = useState({});
  const [photoURL, setPhotoURL] = useState("");

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
          // setUsers(userData.data());
          setPhotoURL(userData.data().photoURL);
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

  if (currentUser != null) {
    currentRoute = "/profile";
  } else {
    currentRoute = "/signup";
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
      <NavLinks to="signup" duration={500} exact="true" offset={-80}>
        Log In / Sign Up
      </NavLinks>
    );
  }

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              {" "}
              HS Connect
            </NavLogo>

            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks to="/" duration={500} exact="true" offset={-80}>
                  Home
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="aboutus" duration={500} exact="true" offset={-80}>
                  About Us
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks to="faq" duration={500} exact="true" offset={-80}>
                  FAQ
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="contactus"
                  duration={500}
                  exact="true"
                  offset={-80}
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
                  // onClick={loggedInChecker}
                >
                  <Image
                    src={
                      photoURL ||
                      "https://firebasestorage.googleapis.com/v0/b/thehsconnect.appspot.com/o/undraw_profile_pic_ic-5-t%20(1).svg?alt=media&token=49609533-c10e-43fd-863d-1de315962adf"
                    }
                    h="45px"
                    borderRadius="full"
                    borderColor="teal"
                    borderWidth="1px"
                  />
                </NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
