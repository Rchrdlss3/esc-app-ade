import {useState,useEffect} from 'react'
import { getTheme } from './functions/themeFunctions';
import { mainStyle } from './helper/styles/mainStyles';
import NavigationComponent from './components/generalComponents/NavigationComponent';
import {HashRouter, Routes, Route} from "react-router-dom"
import HomePage from './pages/HomePage';
import WeatherPage from './pages/WeatherPage';
import ActivitiesPage from './pages/ActivitiesPage';
import DreamListPage from './pages/DreamListPage';

export default function App() {
  const [theme,setTheme] = useState(getTheme());

  useEffect(() => {
    // API Call to determine whether device is mobile or not must be made
    // window.navigator.userAgent will be sent, and we'll get back whether device is mobile or not
    // Backend will also send sessionID & session time
  },[]);

  return (
    <div style = {mainStyle(theme)}>
      <HashRouter>
      <NavigationComponent theme = {theme} setTheme = {setTheme}/>
        <Routes>
          <Route path = "/" element = {<HomePage />} />
          <Route path = "/weather"  element = {<WeatherPage />} />
          <Route path = "/activities" element = {<ActivitiesPage />} />
          <Route path = "/dream-list" element = {<DreamListPage />} />
        </Routes>
      </HashRouter>
    </div>
  );
};