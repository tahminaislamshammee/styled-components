
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import './App.css';
import Main from './Components/main';
import AboutPage from './Components/AboutPage';
import BlogPage from './Components/BlogPage';
import MyskillsPage from './Components/MyskillsPage';
import WorkPage from './Components/WorkPage';
import { LightTheme, DarkTheme } from './Components/Themes';
import GlobalStyle from './globalStyles';



function App() {
  return (
    <>
    <GlobalStyle />
    <ThemeProvider theme={LightTheme}>
    <Routes>
      <Route path="/" element={<Main />}/>
      <Route path="/about" element={<AboutPage />}/>
      <Route path="/blog" element={<BlogPage />}/>
      <Route path="/work" element={<WorkPage />}/>
      <Route path="/skills" element={<MyskillsPage />}/>
    </Routes>
    </ThemeProvider>

    </>
  );
}

export default App;
