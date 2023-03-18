import './App.css';
import { React, useEffect, useState } from 'react'
import { Routes, Route } from "react-router-dom";
import SignIn from "./Pages/Authentication/SignIn";
import JournalCover from './Pages/JournalCover/JournalCover';
import SignUp from './Pages/Authentication/SignUp';
import JournalPage from './Components/JournalPage';
import JournalPageBody from './Components/JournalPageBody';
import Global from './styles/Global';
import { ThemeProvider } from 'styled-components';
import {
  light,
  dark,
  blue,
  green,
  brown,
  pink,
} from "../src/styles/Theme.style";
import { GlobalStyles } from '@mui/material';
import ThemeContext from './Components/ThemeContext';
import Forgotpassword from './Components/Forgotpassword';
import JEmain from './Pages/JEmain';
import List from './Components/List';
import Starred from './Components/Starred';
import ListEntries from './Pages/ListEntries';
import RecoverPassword from './Pages/Authentication/RecoverPassword';
import E404 from './Pages/Authentication/404';
import Footer from './Components/Footer/Footer';
import MobilePage from './Pages/Authentication/MobilePage';
import Support from './Pages/Authentication/Support';
// export const UserContext = React.createContext();

function App() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }


  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const [theme, setTheme] = useState(dark)
  const value = { theme, setTheme }

  return (
    <ThemeContext.Provider value={value}>

      <Global />
      {/* <JournalCover /> */}
      {
        windowDimensions.width > 150 ?
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/Register" element={<SignUp />} />
            <Route path="/Journalcover" element={<JournalCover />} />
            <Route path="/forgotpassword" element={<Forgotpassword />} />
            <Route path="/Journalentry/:id" element={<JEmain />} />
            <Route path="/list" element={<ListEntries />} />
            <Route path="/favourites" element={<Starred />} />
            <Route path="/reset-password/:hash" element={<RecoverPassword />} />
            <Route path="/support" element={<Support />} />
            <Route path="*" element={<E404 />} />

          </Routes> : <MobilePage />}

    </ThemeContext.Provider>
  );
}

export default App;
