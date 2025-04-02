import React from "react";
import styled from "styled-components";
import { Link } from "@mui/material";

const Results = styled(Link)`
  background-color: ${({ theme }) => theme.bgLight};
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 6px;
  gap: 20px;
  &:hover {
    cursor: pointer;
    transform: translateY(-8px);
    transition: all 0.4s ease-in-out;
    box-shadow: 0 0 18px 0 rgba(0, 0, 0, 0.3);
    filter: brightness(1.3);
  }
`;

const PodcastImage = styled.img`
  height: 80px;
  border-radius: 8px;
  width: 150px;
  object-fit: cover;
  @media (max-width: 768px) {
    height: 60px;
    width: 100px;
  }
`;

const PodcastInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const PodcastName = styled.div`
  color: ${({ theme }) => theme.text_primary};
`;

const Description = styled.div`
  display: flex;
  gap: 8px;
`;

const Creator = styled.div`
  color: ${({ theme }) => theme.text_secondary};
  font-size: 12px;
  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

const Time = styled.div`
  color: ${({ theme }) => theme.text_secondary};
  font-size: 12px;
  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

const MoreResult = ({ podcast }) => {
  return (
    <Results to={`/podcast/jhgjfhgdsf`} style={{ textDecoration: "none" }}>
      <PodcastImage src="https://png.pngtree.com/png-vector/20220617/ourmid/pngtree-personal-assistant-and-voice-recognition-concept-home-concept-illustration-vector-png-image_47175710.jpg" />
      <PodcastInfo>
        <PodcastName>ESL PodCast</PodcastName>
        <Description>
          <Creator style={{ marginRight: "12px" }}>yz</Creator>
          <Time>• 12 Views</Time>
          <Time>• 12 days ago</Time>
        </Description>
      </PodcastInfo>
    </Results>
  );
};

export default MoreResult;
