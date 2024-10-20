import React from 'react'
import { iconUrlFromCode } from '../../services/weatherServices';

function TodayForecast() {
    return (
        <div className="bg-zinc-800 p-2 mx-3 rounded-lg shadow-md text-white max-w-full">
        

          <div className="flex flex-row gap-2 p-2">
            <div className="bg-black rounded-xl py-2 flex flex-col items-center">
                <p>8:30AM</p>
                <img src={iconUrlFromCode("03d")} alt="" className="w-28" />
                <p>34°</p>
              </div>

            <div className="bg-black rounded-xl py-2 flex flex-col items-center">
              <p>8:30AM</p>
              <img src={iconUrlFromCode("03d")} alt=""  className="w-28" />
              <p>34°</p>
            </div>
            <div className="bg-black rounded-xl py-2 flex flex-col items-center">
              <p>8:30AM</p>
              <img src={iconUrlFromCode("03d")} alt="" className="w-28" />
              <p>34°</p>
            </div>
            <div className="bg-black rounded-xl py-2 flex flex-col items-center">
              <p>8:30AM</p>
              <img src={iconUrlFromCode("03d")} alt="" className="w-28" />
              <p>34°</p>
            </div>
            <div className="bg-black rounded-xl py-2 flex flex-col items-center">
              <p>8:30AM</p>
              <img src={iconUrlFromCode("03d")} alt="" className="w-28" />
              <p>34°</p>
            </div>
            <div className="bg-black rounded-xl py-2 flex flex-col items-center">
              <p>8:30AM</p>
              <img src={iconUrlFromCode("03d")} alt="" className="w-28" />
              <p>34°</p>
            </div>
            <div className="bg-black rounded-xl py-2 flex flex-col items-center">
              <p>8:30AM</p>
              <img src={iconUrlFromCode("03d")} alt="" className="w-28" />
              <p>34°</p>
            </div>
            <div className="bg-black rounded-xl py-2 flex flex-col items-center">
              <p>8:30AM</p>
              <img src={iconUrlFromCode("03d")} alt="" className="w-28" />
              <p>34°</p>
            </div>
         
         
          </div>

  
        
        </div>
      );
    };
export default TodayForecast