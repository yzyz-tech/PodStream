import React from "react";
import styled from "styled-components";
import {
  HomeRounded,
  CloseRounded,
  LoginRounded,
  DarkModeRounded,
} from "@mui/icons-material";
import LogoImage from "../Images/Logo.png";
import { Link } from "react-router-dom";
import {
  SearchRounded,
  FavoriteRounded,
  UploadRounded,
  CloudUploadRounded,
  LightModeRounded,
  LogoutRounded,
} from "@mui/icons-material";


// 样式定义
// 侧边栏容器，设置背景颜色和文字颜色
const MenuContainer = styled.div`
  flex: 0.5;
  flex-direction: column;
  height: 100vh;
  display: flex;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 1100px) {
    /* 屏幕宽度 ≤1100px 时隐藏侧边栏 */
    position: fixed;
    z-index: 1000;
    width: 100%;
    max-width: 250px;
    left: ${({ menuOpen }) => (menuOpen ? "0" : "-100%")};
    transition: 0.3s ease-in-out;
  }
`;

// Flex容器，水平排列子元素
const Flex = styled.div`
  display: flex;
  flex-direction: row; //水平排列
  justify-content: space-between; //主轴
  align-items: center; //交叉轴
  padding: 0px 12px;
`;

// Logo组件，显示app名称、图片
const Logo = styled.div`
  color: ${({ theme }) => theme.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px; //子元素之间的间距
  font-weight: bold;
  font-size: 20px;
  margin: 16px 0px; //上下外边距
`;

// 图片组件(显示Logo图片)
const Image = styled.img`
  height: 40px;
`;

// 关闭按钮组件，默认隐藏，仅在小屏幕上显示
const Close = styled.div`
  display: none; //默认隐藏
  @media (max-width: 1100px) {
    display: block;
  }
`;

// 导航项容器（导航项和按钮），支持悬停
const Elements = styled.div`
  padding: 4px 16px; //左右内边距
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  cursor: pointer; //鼠标悬停时显示手型
  color: ${({ theme }) => theme.text_secondary};
  width: 100%; //占满上一层容器宽度
  text-decoration: none !important;
  &:hover {
    background-color: ${({ theme }) => theme.text_secondary + 50};
  } //悬停时背景颜色变化
`;

// 导航项文本组件
const NavText = styled.div`
  padding: 12px 0px;
  text-decoration: none !important;
`;

// 分隔线组件（导航项之间）
const HR = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.text_secondary + 50};
  margin: 10px 0px;
`;

// 侧边栏组件，主组件Sidebar
const Sidebar = ({ menuOpen, setMenuOpen, setDarkMode, darkMode }) => {
  // 定义导航项数据（包含链接地址、名称、图标）
  const menuItems = [
    {
      link: "/",
      name: "Dashboard",
      icon: <HomeRounded />,
    },
    {
      link: "/search",
      name: "Search",
      icon: <SearchRounded />,
    },
    {
      link: "/favourites",
      name: "Favourites",
      icon: <FavoriteRounded />,
    },
  ];

  // 定义按钮数据（包含点击事件函数、名称、图标）
  const button = [
    {
      fun: () => console.log("Upload"),
      name: "Upload",
      icon: <CloudUploadRounded />,
    },
    {
      fun: () => setDarkMode(!darkMode),
      name: darkMode ? "Light Mode" : "Dark Mode",
      icon: darkMode ? <LightModeRounded /> : <DarkModeRounded />,
    },
    {
      fun: () => console.log("Log Out"),
      name: "Log Out",
      icon: <LogoutRounded />,
    },
  ];

  return (
    /* 根据menuOpen状态决定侧边栏的显示与隐藏 */
    <MenuContainer menuOpen={menuOpen}>
      <Flex>
        {/* 顶部Flex容器 */}
        <Logo>
          <Image src={LogoImage} />
          PodStream
        </Logo>
        <Close onClick={() => setMenuOpen(false)}>
          {/* 关闭按钮，点击时关闭侧边栏 */}
          <CloseRounded />
        </Close>
      </Flex>
      {menuItems.map((item) => (
        <Link to={item.link} style={{ textDecoration: "none" }}>
          <Elements>
            {item.icon}
            <NavText>{item.name}</NavText>
          </Elements>
        </Link>
      ))}
      <HR />
      {button.map(
        (
          item //遍历按钮数据，生成按钮
        ) => (
          <Elements onClick={item.fun}>
            {/* 按钮容器，点击时执行相应函数 */}
            {item.icon}
            <NavText>{item.name}</NavText>
          </Elements>
        )
      )}
    </MenuContainer>
  );
};

// 导出侧边栏组件
export default Sidebar;
