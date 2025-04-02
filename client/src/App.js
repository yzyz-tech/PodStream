import {useState} from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme} from "./utils/Themes";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard.jsx"
import Search from "./pages/Search.jsx"
import Favourites from "./pages/Favourites.jsx"
import PodcastDetails from "./pages/PodcastDetails.jsx"
import Profile from "./pages/Profile.jsx"
import DisplayPodcast from "./pages/DisplayPodcast.jsx"

// 主容器
const Container = styled.div`
  display: flex;
  background: ${({ theme }) => theme.bgLight};
  width: 100%;
  height: 100vh;
  overflow-x: hidden; 
  overflow-y: hidden;
`;

// 内容框架
const Frame = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
`;

function App() {
  //hooks
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(true);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <BrowserRouter>
        <Container>
          {/* 侧边栏组件，根据 menuOpen 状态决定是否显示 */}
          {menuOpen && (
            <Sidebar 
              menuOpen = {menuOpen}
              setMenuOpen = {setMenuOpen}
              setDarkMode = {setDarkMode}
              darkMode = {darkMode}
            />
          )}
          <Frame>
            {/* 导航栏组件 */}
            <Navbar menuOpen = {menuOpen}
            setMenuOpen = {setMenuOpen}/>

            {/* 路由配置 */}
            <Routes>
              <Route path="/" exact element={<Dashboard />}/>
              <Route path="/search" exact element={<Search />}/>
              <Route path="/favourites" exact element={<Favourites />}/>
              <Route path="/profile" exact element={<Profile />}/>
              <Route path="/podcast/:id" exact element={<PodcastDetails />}/>
              <Route path="/showpodcasts/:type" exact element={<DisplayPodcast />}/>
            </Routes>
            {/* Podstream */}
          </Frame>          
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
