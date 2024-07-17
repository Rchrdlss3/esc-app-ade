import {useState,useEffect} from 'react'
import { getTheme } from './functions/themeFunctions';
import { mainStyle } from './helper/styles/mainStyles';
import NavigationComponent from './components/generalComponents/NavigationComponent';
import {HashRouter, Routes, Route} from "react-router-dom"
import HomePage from './pages/HomePage';
import WeatherPage from './pages/WeatherPage';
import ActivitiesPage from './pages/ActivitiesPage';
import DreamListPage from './pages/DreamListPage';
import { getUser, getUserIPAddress } from './functions/userFunctions/user.js';

const ipAddress =  await getUserIPAddress();
// const user = await getUser(ipAddress);
// console.log(user)
export default function App() {
  const [theme,setTheme] = useState(getTheme());
  const [user,setUser] = useState({});

  useEffect(() => {
    getUser(ipAddress)
    .then((data) => setUser(data.user))
     // user.name 
    // setUser(getUser(ipAddress))
    // API Call to determine whether device is mobile or not must be made
    // window.navigator.userAgent will be sent, and we'll get back whether device is mobile or not
    // Backend will also send sessionID & session time
  },[]);
  console.log(user)
  return (
    <div style = {mainStyle(theme)}>
      <HashRouter>
      <NavigationComponent theme = {theme} setTheme = {setTheme}/>
        <Routes>
          <Route path = "/" element = {<HomePage theme = {theme}/>} />
          <Route path = "/weather"  element = {<WeatherPage />} />
          <Route path = "/activities" element = {<ActivitiesPage />} />
          <Route path = "/dream-list" element = {<DreamListPage />} />
        </Routes>
      </HashRouter>
    </div>
  );
};