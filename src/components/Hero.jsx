import React from "react";
import WeatherCard from "./WeatherCard";
import Forecast from "./Forecast";
import TodayHighlights from "./TodayHighlight";
import TodayForecast from "./TodayForecast";

function Hero({ curWeather, forecast5D, forecastToday }) {
  return (

    <div className="bg-zinc-900 p-10 max-w-full font-nunito">

      <div className="flex flex-row w-full">
        <div className="w-1/3 flex flex-col items-center">
          <WeatherCard weatherNow={curWeather} />
          <h3 className="font-normal text-white text-lg mt-5">5 Days Forecast</h3>
          <Forecast forecast={forecast5D} />
        </div>
        <div className="w-full overflow-y-auto pl-4 pr-2">
          <TodayHighlights weatherNow={curWeather} />
          <h2 className="text-lg font-semibold mt-5 ml-4 text-white">Today at</h2>
          <TodayForecast forcast ={forecastToday} />
        </div>


      </div>
  
  </div>
  
  );
}

export default Hero;
