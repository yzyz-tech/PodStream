import React from "react";
import styled from "styled-components";
import { CircularProgress, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import HeadphonesIcon from "@mui/icons-material/Headphones";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
  padding-bottom: 200px; // 底部留白
  height: 100%;
  overflow-y: scroll;
  gap: 20px;
`;

// 加载动画
const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

// 图标按钮
const Favourite = styled(IconButton)`
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.text_secondary + 95} !important;
  color: ${({ theme }) => theme.text_primary} !important;
`;

// 顶部播客详细信息
const Top = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

// 播客封面
const CardImage = styled.img`
  object-fit: cover;
  width: 250px;
  height: 250px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.text_secondary};
  // 图片加载失败或包含透明区域时显示背景色
`;

// 播客主体信息（从标题到创作者信息）
const MainDetails = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 10px;
`;

// 标题
const Title = styled.div`
  display: flex;
  font-size: 32px;
  font-weight: 800;
  color: ${({ theme }) => theme.text_primary};
  width: 100%;
  justify-content: space-between;
`;

// 描述
const Description = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
`;

// 标签行
const Tags = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  flex-wrap: wrap; // 自动换行
`;

// 小标签
const Tag = styled.div`
  background-color: ${({ theme }) => theme.text_secondary + 50}; // 背景色
  color: ${({ theme }) => theme.text_primary}; // 文本颜色
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
`;

// 创作者容器
const CreatorContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

// 包含头像及名称
const CreatorsInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
`;

//  创作者名称
const CreatorName = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.text_secondary};
`;

// 播放次数
const Views = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.text_secondary};
  width: max-content;
  margin-left: 20px; // 距离CreatorName之间留白
`;

// 播放按钮
const PlayIcon = styled.div`
  display: flex;
  color: white !important;
  background: #9000ff !important;
  font-size: 12px;
  margin-left: 20px;
  padding: 6px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
`;
const PodcastDetails = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [favourite, setFavourite] = useState(true);

  return (
    <Container>
      {loading ? (
        <Loader>
          <CircularProgress />
        </Loader>
      ) : (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              width: "100%",
            }}
          >
            {/* 外层容器div负责布局，Favorite负责自身样式 */}
            <Favourite>
              {favourite ? (
                <FavoriteIcon
                  style={{ color: "cyan", width: "16px", height: "16px" }}
                ></FavoriteIcon>
              ) : (
                <FavoriteIcon
                  style={{ width: "16px", height: "16px" }}
                ></FavoriteIcon>
              )}
            </Favourite>
          </div>
          <Top>
            <CardImage src="https://png.pngtree.com/png-vector/20220617/ourmid/pngtree-personal-assistant-and-voice-recognition-concept-home-concept-illustration-vector-png-image_47175710.jpg" />
            {/* <CardImage /> */}
            <MainDetails>
              <Title>ESL PodCast</Title>
              <Description>
                {""}Daily English lessons are dialogues and stories using
                conversational American English. You get detailed explanations
                of how to use each of the key expressions and idioms.
                <br /> Cultural English lessons contain information to help you
                understand the United States and American culture. Learn English
                as you learn about the U.S. and its customs and culture.
              </Description>
              <Tags>
                <Tag>LearnEnglish</Tag>
                <Tag>Basic</Tag>
              </Tags>
              <CreatorContainer>
                <CreatorsInfo>
                  <Avatar style={{ width: "26px", height: "26px" }}>Y</Avatar>
                  <CreatorName>yz</CreatorName>
                </CreatorsInfo>
                <Views>• 12 Views</Views>
                <Views>• 7 months ago</Views>
                <PlayIcon>
                  {"audio" === "audio" ? <HeadphonesIcon /> : <PlayArrowIcon />}
                </PlayIcon>
              </CreatorContainer>
            </MainDetails>
          </Top>
        </>
      )}
    </Container>
  );
};

export default PodcastDetails;
