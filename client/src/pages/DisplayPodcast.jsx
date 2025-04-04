import React, { useState } from "react";
import styled from "styled-components";
import PodcastCard from "../components/PodcastCard";
import { CircularProgress } from "@mui/material";

const DisplayMain = styled.div`
  padding: 30px 30px;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: scroll;
`;

// 标题文字
const Topic = styled.div`
  color: ${({ theme }) => theme.text_primary};
  font-size: 24px;
  font-weight: 540;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

// 加载图标动画
const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const Podcasts = styled.div`
  display: flex;
  height: 100%;
  flex-wrap: wrap; // 容器宽度不足时，元素自动换行
  gap: 10px;
  padding: 30px 0px;
  @media (max-width: 550px) {
    justify-content: center;
  }
`;

// 无元素时显示
const DisplayNo = styled.div`
  color: ${({ theme }) => theme.text_primary};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const DisplayPodcast = () => {
  const [loading, setLoading] = useState(false);
  // const [podcasts, setPodcasts] = useState([]);
  // 初始化一个非空数组
  const [podcasts, setPodcasts] = useState([
    { id: 1, title: "Podcast 1", description: "This is the first podcast." },
    { id: 2, title: "Podcast 2", description: "This is the second podcast." },
    { id: 3, title: "Podcast 3", description: "This is the third podcast." },
  ]);
  const [string, setString] = useState("");

  return (
    <DisplayMain>
      <container>
        <Topic>Most Popular</Topic>
        {/* 根据loading状态判断是否显示加载图标 */}
        {loading ? (
          <Loader>
            <CircularProgress />
          </Loader>
        ) : (
          <Podcasts>
            {/* 若podcasts数组为空，渲染DisplayNo组件 */}
            {podcasts.length === 0 && <DisplayNo>No Podcasts</DisplayNo>}
            {/* 通过.map()方法遍历数组，为每个元素渲染一个PodcastCard组件 */}
            {podcasts.map((podcast) => (
              <PodcastCard podcast={podcast} />
            ))}
          </Podcasts>
        )}
      </container>
    </DisplayMain>
  );
};

export default DisplayPodcast;
