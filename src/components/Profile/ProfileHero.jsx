import React from "react";
import Image from "../../images/hero-bg.png";

import {
  Bg,
  BgImage,
  TextCont,
  TextH3,
} from "../../components/GeneralPurpose/GPElements";

import { ProfileContainer } from "./ProfileElements";

import { ProfileContent } from "./ProfileElements";

import { useAuth } from "../../components/Signup/Firebase";

const ProfileHero = () => {
  const currentUser = useAuth();
  return (
    <ProfileContainer id="profile">
      <Bg>
        <BgImage src={Image} type="image/jpg" />
      </Bg>
      <ProfileContent>
        <TextCont>
          <TextH3> {currentUser?.email}</TextH3>
        </TextCont>
      </ProfileContent>
    </ProfileContainer>
  );
};

export default ProfileHero;
