import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SideMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SideMenu>
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
            to="Profile"
            onClick={toggle}
            duration={500}
            exact="true"
            offset={-80}
          >
            Profile
          </SidebarLink>
          <SidebarLink
            to="/signup"
            onClick={toggle}
            duration={500}
            exact="true"
            offset={-80}
          >
            Log In / Sign Up
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
        </SideMenu>
        <SideBtnWrap>
          <SidebarRoute to="/joinnow">Join Now</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
