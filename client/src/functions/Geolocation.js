import axios from 'axios';

const fetchGeolocationData = async (ipAddress) => {
    try {
        const apiKey = 'your_ipstack_api_key';
        const response = await axios.get(`https://api.ipstack.com/${ipAddress}?access_key=${apiKey}`);
        const data = response.data;

        const latitude = data.latitude;
        const longitude = data.longitude;
        const city = data.city;
        const region = data.region_name;
        const country = data.country_name;

        return {
            latitude,
            longitude,
            city,
            region,
            country,
        };
    } catch (error) {
        console.error('Error fetching geolocation data:', error);
        return null;
    }
};

export default fetchGeolocationData;