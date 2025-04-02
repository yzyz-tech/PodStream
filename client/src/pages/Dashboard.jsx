import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PodcastCard from "../components/PodcastCard";

const DashboardMain = styled.div`
  padding: 20px 30px;
  padding-bottom: 200px;
  height: 100%;
  /* overflow-x: hidden; */
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 768px) {
    // 响应较小的屏幕，比如手机尺寸
    padding: 6px 10px;
  }
`;
const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
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
const Span = styled.div`
  color: ${({ theme }) => theme.primary};
  font-size: 16px;
  font-weight: 400;
  @media (max-width: 768px) {
    font-size: 14px;
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

// const Card = styled.div``;
//好像没有也不影响啊

const Dashboard = () => {
  return (
    <DashboardMain>
      Dashboard
      <FilterContainer>
        <Topic>
          Most Popular
          <Link
            to={"/showpodcasts/mostpopular"}
            style={{ textDecoration: "none" }}
          >
            <Span>Show All</Span>
          </Link>
        </Topic>
        <Podcasts>
          <PodcastCard />
          <PodcastCard />
          <PodcastCard />
        </Podcasts>
      </FilterContainer>
      <FilterContainer>
        <Topic>
          Comedy
          <Link to={"/showpodcasts/comedy"} style={{ textDecoration: "none" }}>
            <Span>Show All</Span>
          </Link>
        </Topic>
        <Podcasts>
          <PodcastCard />
          <PodcastCard />
          <PodcastCard />
        </Podcasts>
      </FilterContainer>
      <FilterContainer>
        <Topic>
          News
          <Link to={"/showpodcasts/news"} style={{ textDecoration: "none" }}>
            <Span>Show All</Span>
          </Link>
        </Topic>
        <Podcasts>
          <PodcastCard />
          <PodcastCard />
          <PodcastCard />
        </Podcasts>
      </FilterContainer>
      <FilterContainer>
        <Topic>
          Crime
          <Link to={"/showpodcasts/crime"} style={{ textDecoration: "none" }}>
            <Span>Show All</Span>
          </Link>
        </Topic>
        <Podcasts>
          <PodcastCard />
          <PodcastCard />
          <PodcastCard />
        </Podcasts>
      </FilterContainer>
      <FilterContainer>
        <Topic>
          Sports
          <Link to={"/showpodcasts/sports"} style={{ textDecoration: "none" }}>
            <Span>Show All</Span>
          </Link>
        </Topic>
        <Podcasts>
          <PodcastCard />
          <PodcastCard />
          <PodcastCard />
        </Podcasts>
      </FilterContainer>
    </DashboardMain>
  );
};

export default Dashboard;
