import React from "react";
import PodcastCard from "../components/PodcastCard";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px 30px;
  padding-bottom: 200px;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

// 以下均类似Dashboard.jsx里的样式

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

const FavouritesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  padding: 18px 6px;
  @media (max-width: 550px) {
    justify-content: center;
  }
`;
const Favourites = () => {
  return (
    <Container>
      <Topic>Favourites</Topic>
      <FavouritesContainer>
        <PodcastCard />
        <PodcastCard />
        <PodcastCard />
      </FavouritesContainer>
    </Container>
  );
};

export default Favourites;
