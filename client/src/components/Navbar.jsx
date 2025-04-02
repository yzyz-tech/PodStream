import React from "react";
import styled from "styled-components";
import { Menu, PersonRounded } from "@mui/icons-material";
import { IconButton } from "@mui/material";

// 导航栏容器
const NavbarDiv = styled.div`
  display: flex; //横向排列
  justify-content: space-between; //左右两端对齐
  padding: 16px 40px;
  align-items: center; //元素垂直居中
  color: ${({ theme }) => theme.text_primary};
  gap: 30px; //元素之间的间隔
  background-color: ${({ theme }) => theme.bgLight};
  border-radius: 16px; //边框(四个角都是16px的)圆角
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  //柔和的阴影效果：水平偏移量 垂直 模糊半径 阴影颜色(黑 透明度10%)
  backdrop-filter: blur(5.7px); //背景模糊(半径)
  -webkit-backdrop-filter: blur(5.7px); //Safari 浏览器的兼容支持
  @media (max-width: 768px) {
    padding: 16px;
  }
`;

// 登录按钮容器
const ButtonDiv = styled.div`
  font-size: 14px;
  cursor: pointer;
  max-width: 70px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.primary};
  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 12px;
  padding: 8px 10px;
  gap: 8px;
`;

// 菜单图标按钮组件
const IcoButton = styled(IconButton)`
  // IconButton是Material-UI的图标按钮组件
  color: ${({ theme }) =>
    theme.text_secondary} !important; //!important 避免被覆盖
`;
// 主组件
const Navbar = ({ setMenuOpen, menuOpen }) => {
  return (
    <NavbarDiv>
      <IcoButton onClick={() => setMenuOpen(!menuOpen)}>
        {" "}
        {/* 点击时切换侧边栏打开状态 */}
        <Menu />
      </IcoButton>
      <div>Welcome, user</div>
      <ButtonDiv>
        <PersonRounded />
        Login
      </ButtonDiv>
    </NavbarDiv>
  );
};

export default Navbar;
