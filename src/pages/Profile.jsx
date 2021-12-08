import React from 'react'
import styled from 'styled-components'
import { useAuth} from "../components/Signup/Firebase";


export const ProfileH1 = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #ffffff;
`;

const Profile = () => {
      const currentUser = useAuth();

    return (
        <ProfileH1 >
            {currentUser?.email}
        </ProfileH1>
    )
}

export default Profile
