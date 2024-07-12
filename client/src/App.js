import './App.css';
import fetchGeolocationData from './functions/fetchGeolocationData';

export default function App() {
  const [geolocationData, setGeolocationData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const ipAddress = 'your_ip_address';
      const data = await fetchGeolocationData(ipAddress);
      setGeolocationData(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      {geolocationData ? (
        <div>
          <h2>Geolocation Data</h2>
          <p>Latitude: {geolocationData.latitude}</p>
          <p>Longitude: {geolocationData.longitude}</p>
          <p>City: {geolocationData.city}</p>
          <p>Region: {geolocationData.region}</p>
          <p>Country: {geolocationData.country}</p>
        </div>
      ) : (
        <p>Loading geolocation data...</p>
      )}
    </div>
  );
};

