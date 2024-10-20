import React from 'react'
import { iconUrlFromCode } from '../../services/weatherServices';
import { convertTo12HourFormat } from '../../services/weatherServices';



function TodayForecast({ forcast }) {
  return (
    <div className="bg-zinc-800 p-2 mx-3 rounded-lg shadow-md text-white max-w-full">
      <div className="flex overflow-x-auto space-x-2 p-2">
        {forcast.map((day, index) => (
          <div key={index} className="flex-shrink-0 w-24 sm:w-32 md:w-36 lg:w-40 bg-black rounded-xl py-2 flex flex-col items-center">
            <p>{convertTo12HourFormat(day.time)}</p>
            <img src={iconUrlFromCode(day.icon)} alt="" className="w-16 lg:w-28" />
            <p>{day.temp}°</p>
          </div>
        ))}
      </div>
    </div>
  );
}

    


export default TodayForecast