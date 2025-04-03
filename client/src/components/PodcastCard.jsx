import React from "react";
import styled from "styled-components";
import Avatar from "@mui/material/Avatar";
import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

// 播放按钮
const PlayIcon = styled.div`
  padding: 10px;
  border-radius: 50%;
  z-index: 100;
  display: flex;
  align-items: center;
  background: #9000ff !important;
  color: white !important;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  position: absolute !important;
  top: 45%;
  right: 10%;
  display: none;
  transition: all 0.4 ease-in-out;
  box-shadow: 0 0 16px 4px #9000ff50 !important;
`;

// 每个播客卡片
const Card = styled(Link)`
  position: relative;
  text-decoration: none;
  background-color: ${({ theme }) => theme.card};
  max-width: 220px;
  height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 16px;
  border-radius: 6px;
  box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.1);
  &:hover {
    cursor: pointer;
    transform: translateY(-8px);
    transition: all 0.4s ease-in-out;
    box-shadow: 0 0 18px 0 rgba(0, 0, 0, 0.3);
    filter: brightness(1.3);
  } // 简单悬停效果
  &:hover ${PlayIcon} {
    display: flex;
  }
`;

const Top = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  position: relative;
`;

// 收藏按钮
const Favorite = styled(IconButton)`
  color: white;
  top: 8px;
  right: 6px;
  padding: 6px !important;
  border-radius: 50%;
  z-index: 100;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.text_secondary + 95} !important;
  color: white !important;
  position: absolute !important;
  backdrop-filter: blur(4px);
  box-shadow: 0 0 16px 6px #222423 !important;
`;

// 播客封面
const CardImage = styled.img`
  object-fit: cover;
  width: 220px;
  height: 140px;
  border-radius: 6px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
  &:hover {
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
  }
`;

const CardInformation = styled.div`
  display: flex;
  align-items: flex-end;
  font-weight: 450;
  padding: 14px 0px 0px 0px;
  width: 100%;
`;

const MainInfo = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  gap: 4px;
`;

// 标题
const Title = styled.div`
  overflow: hidden;
  display: -webkit-box; // 多行文本
  max-width: 100%;
  -webkit-line-clamp: 2; // 最多显示两行
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis; // 超出部分显示省略号
  color: ${({ theme }) => theme.text_primary};
`;

// 播客文字描述
const Description = styled.div`
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.text_secondary};
  font-size: 12px;
`;

// 作者信息
const CreatorsInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-top: 6px;
`;

const Creator = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

// 作者名
const CreatorName = styled.div`
  font-size: 12px;
  overflow: hidden;
  white-space: nowrap; // 不换行
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.text_secondary};
`;

// 播放次数
const Views = styled.div`
  font-size: 10px;
  color: ${({ theme }) => theme.text_secondary};
  width: max-content;
`;

const PodcastCard = () => {
  return (
    <Card>
      <div>
        <Top>
          <Favorite>
            <FavoriteIcon style={{ width: "16px", height: "16px" }} />
          </Favorite>
          <CardImage src="https://png.pngtree.com/png-vector/20220617/ourmid/pngtree-personal-assistant-and-voice-recognition-concept-home-concept-illustration-vector-png-image_47175710.jpg" />
        </Top>

        <CardInformation>
          <MainInfo>
            <Title>ESL PodCast</Title>
            <Description>
              {""}Daily English lessons are dialogues and stories using
              conversational American English. You get detailed explanations of
              how to use each of the key expressions and idioms.
            </Description>
            <CreatorsInfo>
              <Creator>
                <Avatar style={{ width: "26px", height: "26px" }}>Y</Avatar>
                <CreatorName>yz</CreatorName>
              </Creator>
              <Views>• 12 Views</Views>
            </CreatorsInfo>
          </MainInfo>
        </CardInformation>
      </div>
      <PlayIcon>
        {"video" === "video" ? (
          <PlayArrowIcon style={{ width: "28px", height: "28px" }} />
        ) : (
          <HeadphonesIcon style={{ width: "28px", height: "28px" }} />
        )}
      </PlayIcon>
    </Card>
  );
};
export default PodcastCard;
