import React from "react";
import WeatherCard from "./WeatherCard";
import Forecast from "./Forecast";
import TodayHighlights from "./TodayHighlight";

function Hero({ curWeather, forecast5D, forecastToday }) {
  return (
    <div className="bg-zinc-900 py-10 font-nunito">
      <div className="container mx-auto flex flex-row justify-center ">
        {/* Left section: WeatherCard and Forecast */}
        <div className="w-1/3 flex flex-col items-center">
          <WeatherCard weatherNow={curWeather} />

          <h3 className="font-normal font-nunito text-white text-lg mt-5">
            5 Days Forecast
          </h3>
          <Forecast forecast = {forecast5D} />
        </div>

        {/* Right section: TodayHighlights */}
        <div className="w-2/3 overflow-y-auto">
          <TodayHighlights weatherNow={curWeather} />

          {/* <TodayForecast /> */}
        </div>
      </div>
    </div>
  );
}

export default Hero;
