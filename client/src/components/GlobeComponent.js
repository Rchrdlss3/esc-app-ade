import React, { useRef } from 'react';
import Globe from 'react-globe.gl';

export default function GlobeComponent({
    globeImageUrl = '//unpkg.com/three-globe/example/img/earth-blue-marble.jpg',
    bumpImageUrl = '//unpkg.com/three-globe/example/img/earth-topology.png',
    backgroundImageUrl = '//unpkg.com/three-globe/example/img/night-sky.png',
    pointsData,
    arcsData,
    polygonsData,
}) {
    const globeEl = useRef();

    if (globeEl.current) {
        globeEl.current.pointOfView({ lat: 20, lng: -20, altitude: 3 });
        globeEl.current.controls().autoRotate = true; // Enable rotation
        globeEl.current.controls().autoRotateSpeed = 0.2; // Set rotation speed
    }


    return (
        <div className='globe-container'>
            <Globe
                ref={globeEl}
                globeImageUrl={globeImageUrl}
                bumpImageUrl={bumpImageUrl}
                backgroundImageUrl={backgroundImageUrl}
                pointsData={pointsData}
                arcsData={arcsData}
                polygonsData={polygonsData}
            />
        </div>
    );
}