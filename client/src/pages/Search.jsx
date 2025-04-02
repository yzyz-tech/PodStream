import React, { useState } from "react";
import styled from "styled-components";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Category } from "../utils/Data.js";
import { CircularProgress, Link } from "@mui/material";
import { DefaultCard } from "../components/DefaultCard.jsx";
import MoreResult from "../components/MoreResult.jsx";
import TopResult from "../components/TopResult.jsx";

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

const Categories = styled.div`
  margin: 20px 10px;
`;

const Heading = styled.div`
  align-items: flex-start;
  color: ${({ theme }) => theme.text_primary};
  font-size: 22px;
  font-weight: 540;
  margin: 10px 14px;
`;

const BrowseAll = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 14px;
`;

const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const OtherResults = styled.div``;

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
          <input
            type="text"
            placeholder="Search Artists/Podcasts"
            style={{
              border: "none",
              outline: "none",
              width: "100%",
              background: "inherit",
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
