import { Button, Image } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useAuth, logout, db, auth } from "../Signup/Firebase";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SideMenu,
  SidebarLink,
} from "./SidebarElements";
import { doc, getDoc } from "firebase/firestore";

const Sidebar = ({ isOpen, toggle }) => {
  const [photoURL, setPhotoURL] = useState("");
  const [isApplicant, setIsApplicant] = useState(false);
  const [isEmployer, setIsEmployer] = useState(false);
  useEffect(() => {
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

            // const userCollectionRef = await doc(
            //   db,
            //   "employers",
            //   auth.currentUser.uid
            // );
            // const userData = await getDoc(userCollectionRef);
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
  const currentUser = useAuth();

  var button = <Button></Button>;
  if (currentUser != null) {
    button = (
      <SidebarLink
        to="/"
        duration={500}
        exact="true"
        offset={-80}
        onClick={handleLogout}
      >
        Log Out
      </SidebarLink>
    );
  } else {
    button = (
      <SidebarLink to="signup" duration={500} exact="true" offset={-80}>
        Log In / Sign Up
      </SidebarLink>
    );
  }

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
    currentRoute = "/signup";
  }

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SideMenu>
          <SidebarLink
            to={currentRoute}
            onClick={toggle}
            duration={500}
            exact="true"
            offset={-80}
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
          </SidebarLink>
          <SidebarLink
            to="/"
            onClick={toggle}
            duration={500}
            exact="true"
            offset={-80}
          >
            Home
          </SidebarLink>
          <SidebarLink
            to="aboutus"
            onClick={toggle}
            duration={500}
            exact="true"
            offset={-80}
          >
            About Us
          </SidebarLink>

          <SidebarLink
            to="faq"
            onClick={toggle}
            duration={500}
            exact="true"
            offset={-80}
          >
            FAQ
          </SidebarLink>
          <SidebarLink
            to="contactus"
            onClick={toggle}
            duration={500}
            exact="true"
            offset={-80}
          >
            Contact Us
          </SidebarLink>
          {button}
        </SideMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
