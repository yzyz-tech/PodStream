import React from "react";
import styled from "styled-components";
import PodcastCard from "../components/PodcastCard";
import { Avatar } from "@mui/material";

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 768px) {
    align-items: center;
  }
`;
const ProfileMain = styled.div`
  padding: 20px 30px;
  padding-bottom: 200px;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const UserDetails = styled.div`
  display: flex;
  gap: 120px;
  @media (max-width: 768px) {
    width: fit-content;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${({ box, theme }) =>
    box &&
    `
  background-color: ${theme.bg};
    border-radius: 10px;
    padding: 20px 30px;
  `}
  background-color: ${({ theme }) => theme.bg};
  border-radius: 10px;
  padding: 20px 30px;
`;

const Topic = styled.div`
  color: ${({ theme }) => theme.text_primary};
  font-size: 24px;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const Podcasts = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  padding: 18px 6px;
  @media (max-width: 550px) {
    justify-content: center;
  }
`;

const ProfileAvatar = styled.div`
  padding-left: 3rem;
  @media (max-width: 768px) {
    padding-left: 0rem;
  }
`;

const ProfileName = styled.div`
  color: ${({ theme }) => theme.text_primary};
  font-size: 34px;
  font-weight: 500;
`;

const ProfileEmail = styled.div`
  color: #2b6fc2;
  font-size: 14px;
  font-weight: 400;
`;
const Profile = () => {
  return (
    <ProfileMain>
      <UserDetails>
        <ProfileAvatar>
          <Avatar sx={{ height: 165, width: 165, fontSize: "24px" }}></Avatar>
        </ProfileAvatar>

        <ProfileContainer>
          <ProfileName>yz</ProfileName>
          <ProfileEmail>yangzhuo@111.com</ProfileEmail>
        </ProfileContainer>
      </UserDetails>

      <FilterContainer>
        <Topic>Your Favourites</Topic>
        <Podcasts>
          <PodcastCard />
          <PodcastCard />
          <PodcastCard />
        </Podcasts>
      </FilterContainer>
    </ProfileMain>
  );
};

export default Profile;
