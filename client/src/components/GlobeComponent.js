import React, { useContext, useEffect, useState } from 'react';
import Globe from 'globe.gl'
import { lightTheme } from '../models/themes';
import {GLOBE_EARTH_BLUE_URL,GLOBE_EARTH_NIGHT_URL} from '../helper/constants/general'
import { ThemeContext, UserContext } from '../App';


export default function GlobeComponent() {
    const theme = useContext(ThemeContext);
    const user = useContext(UserContext)
    const myGlobe = Globe();
    const [globeCanvas,setGlobeCanvas] = useState();
    const globeImage = theme === lightTheme ?  GLOBE_EARTH_BLUE_URL : GLOBE_EARTH_NIGHT_URL;
  
    useEffect(() => {
        setGlobeCanvas(document.getElementById('activities-globe'))
    },[]);

    const globeData = user ? [{
        lat: user.latitude,
        lng: user.longitude,
        size: 0.1,
        label : "You are here",
        color: theme.main
    }] : []

    return (
        <div id ="activities-globe">
        {globeCanvas ?
            myGlobe(globeCanvas)
            .globeImageUrl(globeImage)
            .backgroundColor(theme.primary)
            .showAtmosphere(false)
            .pointsData(globeData)
            .pointColor("color")
            .pointLabel("label")
            .pointAltitude("size")
        : null}
        </div>
    );
};