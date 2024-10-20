import React from 'react'
import { iconUrlFromCode } from '../../services/weatherServices';
import { convertTo12HourFormat } from '../../services/weatherServices';


function TodayForecast({forcast}) {
  console.log("hi from todayforcsas");
  console.log(forcast);

  

    return (
        <div className="bg-zinc-800 p-2 mx-3 rounded-lg shadow-md text-white max-w-full">
          <div className="flex flex-row gap-2 p-2">
          {forcast.map((day , index) => (
            <div key={index} className="bg-black rounded-xl py-2 flex flex-col items-center">
             <p>{convertTo12HourFormat(day.time)}</p>
             <img src={iconUrlFromCode(day.icon)} alt="" className="w-28" />
             <p>{day.temp}°</p>
            </div>
          ))}
          </div>
        </div>
      );
    };
export default TodayForecast