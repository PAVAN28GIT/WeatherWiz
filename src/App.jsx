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

  const [error, setError] = useState(null);

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

  const fetchWeatherData = async () => {
    try {
      const data = await getFormattedWeatherData({ q: city, units });

      setCurrentWeather(data.formattedCurrentWeather);
      setForcast5Day(data.formatted5dForcast);
      setForcastToday(data.formattedTodayForcast);

      console.log("Forecast 5 Day in 7777:", data.formatted5dForcast);

    } catch (err) {
      setError("Failed to fetch weather data");
    }
  };

  useEffect(() => {
    fetchWeatherData();
    const intervalId = setInterval(fetchWeatherData, 40000);   
    return () => clearInterval(intervalId);

  }, [city, units]);



  return (
    <div className=" bg-zinc-900 min-h-screen w-full">
      <Navbar
        city={city}
        onCityChange={handleCityChange}
        onCelsiusClick={handleCelsiusClick}
        onFahrenheitClick={handleFahrenheitClick}
        units={units}
      />
      <Hero
        curWeather={currentWeather}
        forecast5D={forcast5Day}
        forecastToday={forcastToday}
      />
      <Footer />
    </div>
  );
}

export default App;

// https://api.openweathermap.org/data/2.5/%20?lat=44.34&lon=10.99&appid=596852c114e0a61bb23479892decf4a3

// https://api.openweathermap.org/data/2.5/weather?q=Mysore&appid=596852c114e0a61bb23479892decf4a3
