import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import getFormattedWeatherData from "../services/weatherServices";

function App() {
  const [city, setCity] = useState("Bengaluru"); // City name input
  const [units, setUnits] = useState("metric"); // Default to Celsius (metric)
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forcast5Day, setForcast5Day] = useState([]);
  const [forcastToday, setForcastToday] = useState([]);

  // reset threshol feature
  const [thresholdsSet, setThresholdsSet] = useState(false);

  const [error, setError] = useState(null);


  const [showAlert, setShowAlert] = useState(false);

  const [thresholds, setThresholds] = useState({
    minTempCelsius: null,
    maxTempCelsius: null,
    humidity: null,
    weatherCondition: '',
  });

  // city input change
  const handleCityChange = (e) => {
    setCity(e.target.value);
  };
  // Celsius button click
  const handleCelsiusClick = () => {
    setUnits("metric");
  };
  // Fahrenheit button click
  const handleFahrenheitClick = () => {
    setUnits("imperial");
  };

  const handleAlertClick = () => {
    setShowAlert(prevShowAlert => !prevShowAlert);
  };

  const fetchWeatherData = async () => {
    try {
      const data = await getFormattedWeatherData({ q: city, units });

      setCurrentWeather(data.formattedCurrentWeather);
      setForcast5Day(data.formatted5dForcast);
      setForcastToday(data.formattedTodayForcast);
    } catch (err) {
      setError("Failed to fetch weather data");
    }
  };

  useEffect(() => {
    fetchWeatherData();
    const intervalId = setInterval(fetchWeatherData, 40000);   
    return () => clearInterval(intervalId);

  }, [city, units]);

  useEffect(() => {
    const checkThresholds = () => {
      if (!currentWeather) return;

      const { feels_like, humidity, condition } = currentWeather;
      const currentTempCelsius = Math.round(feels_like); 
      const currentHumid = humidity;
      const currentCondition = condition;

      if (thresholds.minTempCelsius !== null && currentTempCelsius < thresholds.minTempCelsius) {
        alert(`Alert! Temperature dropped below ${thresholds.minTempCelsius}°C`);
      }

      if (thresholds.maxTempCelsius !== null && currentTempCelsius > thresholds.maxTempCelsius) {
        alert(`Alert! Temperature exceeded ${thresholds.maxTempCelsius}°C`);
      }

      if (thresholds.humidity !== null && currentHumid > thresholds.humidity) {
        alert(`Alert! Humidity exceeded ${thresholds.humidity}%`);
      }

      if (thresholds.weatherCondition === currentCondition) {
        alert(`Alert! Current weather is ${currentCondition}`);
      }
    };

    // Check thresholds whenever weather data or thresholds change
    if (currentWeather) {
      checkThresholds();
    }
    const intervalId = setInterval(fetchWeatherData, 40000);   
    return () => clearInterval(intervalId);
  }, [currentWeather, thresholds]);


  return (
    <div className=" bg-zinc-900 min-h-screen w-full">
      <Navbar
        city={city}
        onCityChange={handleCityChange}
        onCelsiusClick={handleCelsiusClick}
        onFahrenheitClick={handleFahrenheitClick}
        units={units}
        onAlertClick={handleAlertClick}
        showAlert = {showAlert}
      />
      <Hero
        curWeather={currentWeather}
        forecast5D={forcast5Day}
        forecastToday={forcastToday}
        onAlertClick={handleAlertClick}
        showAlert = {showAlert}
        setThresholds={setThresholds}
        setThresholdsSet = {setThresholdsSet}
        thresholdsSet = {thresholdsSet}

      />
      <Footer />
    </div>
  );
}

export default App;