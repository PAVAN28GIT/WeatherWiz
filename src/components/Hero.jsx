import React from "react";
import WeatherCard from "./WeatherCard";
import Forecast from "./Forecast";
import TodayHighlights from "./TodayHighlight";
import TodayForecast from "./TodayForecast";
import Alert from "./Alert";

function Hero({ curWeather, forecast5D, forecastToday, onAlertClick ,showAlert, setThresholdsSet, thresholdsSet}) {
  return (
    <div className="bg-zinc-900 p-3 md:p-10 max-w-full font-nunito">
      <div className="flex flex-col lg:flex-row w-full">
        {/* Weather and 5 Days Forecast */}
        <div className="w-full lg:w-1/3 flex flex-col items-center mb-8 lg:mb-0">
          <WeatherCard weatherNow={curWeather} />
          <h3 className="font-normal text-white text-lg mt-5">5 Days Forecast</h3>
          <Forecast forecast={forecast5D} />
        </div>

        {/* Today's Highlights */}
        <div className="w-full lg:w-2/3 overflow-y-auto pl-0 lg:pl-4 pr-2">

          <h2 className="text-lg font-semibold ml-5 text-white">Today's Highlights</h2>
          <TodayHighlights weatherNow={curWeather} />
          <h2 className="text-lg font-semibold mt-5 ml-5 text-white">Today at</h2>
          <TodayForecast forcast={forecastToday} />    
        </div>
      </div>
    </div>
  );
  }

export default Hero;
