import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import getFormattedWeatherData from "../services/weatherServices";
import { Toaster } from "react-hot-toast";
import { showToast } from "./utils/toast";

function App() {
  const [city, setCity] = useState("Bengaluru"); // City name input
  const [units, setUnits] = useState("metric"); // Default to Celsius (metric)
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forcast5Day, setForcast5Day] = useState([]);
  const [forcastToday, setForcastToday] = useState([]);
  const [minTemp,setMinTemp] = useState(null)
  const [maxTemp,setMaxTemp] = useState(null)

  // Debounce delay in milliseconds (e.g., 500ms)
  const debounceDelay = 500;
  let debounceTimeout; // Track the timeout ID for debouncing

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

  const handleThreshold = () =>{
    const minT = document.getElementById('minTemp').value
    const maxT = document.getElementById('maxTemp').value
    setMinTemp(minT);
    setMaxTemp(maxT)
  }

  const fetchWeatherData = async () => {
    try {
      let data;
      if (city.length === 0) {
        data = await getFormattedWeatherData({ q: "Bengaluru", units });
      } else {
        data = await getFormattedWeatherData({ q: city, units });
      }
      console.log(data);

      setCurrentWeather(data.formattedCurrentWeather);
      setForcast5Day(data.formatted5dForcast);
      setForcastToday(data.formattedTodayForcast);
    } catch (err) {
      console.log("Failed to fetch weather data");
    }
  };

  useEffect(()=>{
    if(currentWeather){
      const {feels_like} = currentWeather
      if(minTemp && minTemp!==0 && feels_like < minTemp){
        showToast(`Temperature is below ${minTemp}`,'error')
      }
      if(maxTemp && maxTemp!==0 && feels_like > maxTemp ){
        showToast(`Temperature is above ${maxTemp}`,'error')
    }
    }
  },[currentWeather,minTemp,maxTemp])
  

  // Effect for debouncing city input and units change
  useEffect(() => {
    clearTimeout(debounceTimeout);

    debounceTimeout = setTimeout(() => {
      if (city.length > 0) {
        fetchWeatherData();
      }
    }, debounceDelay);

    return () => clearTimeout(debounceTimeout);
  }, [city, units]);

  // Effect for making API call every 5 minutes
  useEffect(() => {
    const intervalId = setInterval(() => {
      fetchWeatherData();
    }, 300000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [city, units]);

  return (
    <div className="bg-zinc-900 min-h-screen w-full">
      <Toaster />
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
      <dialog
        id="my_modal_1"
        className="bg-cyan-100 w-1/3 bg-gradient-to-r to-purple-400 from-sky-500 border-2 border-blue-300 p-8 rounded-xl"
      >
        <div className="modal-box space-y-3">
          <h3 className="font-extrabold font-nunito text-4xl">Set Alert</h3>
          <input
            className="border-2 w-full outline-none bg-[#fafafa] border-[#c6c6c6] p-3 px-4 rounded-xl"
            placeholder={`Enter Minimum temperature (°${units=='metric'?'C':'F'})`}
            // value={minTemp}
            type="number"
            name="minTemp"
            id="minTemp"
            required
          />
          <input
            className="border-2 w-full outline-none bg-[#fafafa] border-[#c6c6c6] p-3 px-4 rounded-xl"
            placeholder={`Enter Maximum temperature (°${units=='metric'?'C':'F'})`}
            // value={maxTemp}
            type="number"
            name="maxTemp"
            id="maxTemp"
            required
          />
          <p className="font-bold">Normal Temperature: 24°C - 29°C (68°F - 77°F)</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-3 top-2">
                ✕
              </button>
              <div className="flex items-center space-x-2">
              <button
                type="submit"
                onClick={handleThreshold}
                className="border-2 border-black px-4 py-2 flex items-center justify-center rounded-xl font-medium hover:bg-blue-400"
              >
                Save
              </button>
              <button
                type="submit"
                onClick={(e)=>{
                  e.preventDefault()
                  document.getElementById('maxTemp').value = null;
                  document.getElementById('minTemp').value = null;
                  setMinTemp(null);
                  setMaxTemp(null)
                }}
                className="border-2 border-black px-4 py-2 flex items-center justify-center rounded-xl font-medium hover:bg-blue-400"
              >
                Reset
              </button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default App;
