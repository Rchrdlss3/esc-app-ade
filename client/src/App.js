import { useState } from 'react'
import { getTheme } from './functions/themeFunctions';
import { mainStyle } from './helper/styles/mainStyles';
import NavigationComponent from './components/generalComponents/NavigationComponent';
import { HashRouter, Routes, Route } from "react-router-dom"
import HomePage from './pages/HomePage';
import WeatherPage from './pages/WeatherPage';
import ActivitiesPage from './pages/ActivitiesPage';
import DreamListPage from './pages/DreamListPage';
import GlobeComponent from './components/GlobeComponent';
export default function App() {
  const [theme, setTheme] = useState(getTheme());
  const points = [
    { lat: 51.5, lng: -0.09, value: 1 },
    { lat: 40.7128, lng: -74.0060, value: 2 },
  ];

  return (
    <div style={mainStyle(theme)}>
      <GlobeComponent pointsData={points} />
      <HashRouter>
        <NavigationComponent theme={theme} setTheme={setTheme} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/weather" element={<WeatherPage />} />
          <Route path="/activities" element={<ActivitiesPage />} />
          <Route path="/dream-list" element={<DreamListPage />} />
        </Routes>
      </HashRouter>
    </div>
  );
};