import React, { useEffect, useState } from 'react';
import Globe from 'globe.gl'
import { lightTheme } from '../models/themes';
import {GLOBE_EARTH_BLUE_URL,GLOBE_EARTH_NIGHT_URL} from '../helper/constants/general'

export default function GlobeComponent({theme}) {
    const myGlobe = Globe()
    const [globeCanvas,setGlobeCanvas] = useState();
    const globeImage = theme === lightTheme ?  GLOBE_EARTH_BLUE_URL : GLOBE_EARTH_NIGHT_URL;
    useEffect(() => {
        setGlobeCanvas(document.getElementById('activities-globe'))
    },[]);

    return (
        <div id ="activities-globe">
        {globeCanvas ?
            myGlobe(globeCanvas)
            .globeImageUrl(globeImage)
            .backgroundColor(theme.primary)
            .showAtmosphere(false)
        : null}
        </div>
    );
};