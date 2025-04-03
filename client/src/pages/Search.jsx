import React, { useState } from "react";
import styled from "styled-components";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Category } from "../utils/Data.js";
import { CircularProgress, Link } from "@mui/material";
import { DefaultCard } from "../components/DefaultCard.jsx";
import MoreResult from "../components/MoreResult.jsx";
import TopResult from "../components/TopResult.jsx";

// 主搜索页面容器
const SearchMain = styled.div`
  padding: 20px 30px;
  padding-bottom: 200px;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 768px) {
    padding: 20px 9px;
  } /* 响应式设计 */
`;

// 样式化组件
// 搜索栏
const SearchBar = styled.div`
  width: 100%;
  max-width: 700px;
  display: flex;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  border-radius: 30px;
  cursor: pointer;
  padding: 12px 16px;
  justify-content: flex-start;
  align-items: center;
  gap: 6px;
  color: ${({ theme }) => theme.text_secondary};
`;

// 分类容器
const Categories = styled.div`
  margin: 20px 10px;
`;

// 标题
const Heading = styled.div`
  align-items: flex-start;
  color: ${({ theme }) => theme.text_primary};
  font-size: 22px;
  font-weight: 540;
  margin: 10px 14px;
`;

// Browse All 内部的卡片们
const BrowseAll = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 14px;
`;

// 加载器
const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

// 搜索结果中的其他结果（右侧布局）
const OtherResults = styled.div`
  display: flex;
  flex-direction: column;
  height: 700px;
  overflow-y: scroll;
  overflow-x: hidden;
  gap: 6px;
  padding: 4px 4px;
  @media (max-width: 768px) {
    height: 100%;
    padding: 4px 0px;
  }
`;

// 搜索结果容器
const SearchResultContainer = styled.div`
  display: flex;
  gap: 20px;
  /* 
  height: 700px;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 4px 4px; */
  @media (max-width: 768px) {
    flex-direction: column;
    height: 100%;
    padding: 4px 0px;
  }
`;
const Search = () => {
  // 状态管理
  const [searched, setSearched] = useState("");
  const [searchedPodcasts, setSearchedPodcasts] = useState([1, 2, 3, 4, 5, 6]);
  const [loading, setLoading] = useState(false);
  // 处理搜索框输入变化
  const handleChange = async (e) => {
    setSearched(e.target.value);
    // setLoading(true);
  }; // 事件处理

  return (
    <SearchMain>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <SearchBar>
          <SearchOutlinedIcon sx={{ color: "inherit" }} />
          {/* 图标本身的颜色与input 都继承上一层容器(SearchBar)的文字颜色 */}
          <input
            type="text"
            placeholder="Search Artists/Podcasts"
            style={{
              border: "none", // border是始终存在的边框
              outline: "none", // outline是点击才显示的输入框（视觉反馈表明处于聚焦状态）
              width: "100%",
              background: "inherit", //继承背景色
              color: "inherit", // 根据主题动态调整颜色
            }}
            value={searched}
            onChange={(e) => handleChange(e)}
          />
        </SearchBar>
      </div>
      {/* 条件渲染 */}
      {searched === "" ? (
        <Categories>
          <Heading>Browse All</Heading>
          <BrowseAll>
            {/* 列表渲染 */}
            {Category.map((category) => (
              <Link
                to={`/showpodcasts/${category.name.toLowerCase()}`}
                style={{
                  textDecoration: "none",
                }}
              >
                <DefaultCard category={category} />
              </Link>
            ))}
          </BrowseAll>
        </Categories>
      ) : (
        <>
          {loading ? (
            <Loader>
              <CircularProgress />
            </Loader>
          ) : (
            <>
              {searchedPodcasts.length === 0 ? (
                <> No Podcasts Found </>
              ) : (
                <SearchResultContainer>
                  <TopResult />
                  <OtherResults>
                    {searchedPodcasts.map((podcasts) => (
                      <MoreResult podcasts={podcasts} />
                    ))}
                  </OtherResults>
                </SearchResultContainer>
              )}
            </>
          )}
        </>
      )}
    </SearchMain>
  );
};

export default Search;
