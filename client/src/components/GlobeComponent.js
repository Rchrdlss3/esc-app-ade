import React, { useState, useEffect } from 'react';
import Globe from 'react-globe';
import fetchGeolocationData from '../functions/Geolocation';

const GlobeComponent = () => {
    const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });

    useEffect(() => {
        const fetchCoordinates = async () => {
            const data = await fetchGeolocationData();

            if (data) {
                const { latitude, longitude } = data;
                setCoordinates({ lat: latitude, lng: longitude });
            }
        };

        fetchCoordinates();
    }, []);

    return (
        <div>
            <Globe
                height={500}
                width={500}
                globeImageUrl="//unpkg.com/three-globe/example/img/earth_atmo_2048.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth_bump_4k.jpg"
                backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
                pointsData={[
                    { lat: coordinates.lat, lng: coordinates.lng, color: 'red' },
                ]}
            />
        </div>
    );
};

export default GlobeComponent;