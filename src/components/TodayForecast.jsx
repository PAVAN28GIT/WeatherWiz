import { UilSun, UilSunset, UilTear, UilTemperature, UilWind, UilClock, UilCloudSun } from '@iconscout/react-unicons';


import React from 'react'

function TodayForecast() {
    return (
        <div className="bg-zinc-800 p-6 mx-3 mt-10 rounded-lg shadow-md text-white w-full">
          <h2 className="text-lg font-semibold mb-6">Today at</h2>
    
          {/* Daily Aggregates */}
          <div className="bg-zinc-900 p-4 rounded-lg mb-6">
            <h3 className="text-md font-semibold mb-2 text-zinc-300">Daily Aggregates</h3>
            <div className="grid grid-cols-2 gap-4">
              {/* Average Temperature */}
              <div className="bg-zinc-800 p-3 rounded-lg flex items-center">
                <UilTemperature size={24} className="mr-2" />
                <div>
                  <p className="text-sm">Average Temperature</p>
                  <p className="text-lg font-semibold">24°C</p>
                </div>
              </div>
    
              {/* Maximum Temperature */}
              <div className="bg-zinc-800 p-3 rounded-lg flex items-center">
                <UilTemperature size={24} className="mr-2" />
                <div>
                  <p className="text-sm">Maximum Temperature</p>
                  <p className="text-lg font-semibold">30°C</p>
                </div>
              </div>
    
              {/* Minimum Temperature */}
              <div className="bg-zinc-800 p-3 rounded-lg flex items-center">
                <UilTemperature size={24} className="mr-2" />
                <div>
                  <p className="text-sm">Minimum Temperature</p>
                  <p className="text-lg font-semibold">18°C</p>
                </div>
              </div>
    
              {/* Dominant Weather Condition */}
              <div className="bg-zinc-800 p-3 rounded-lg flex items-center">
                <UilCloudSun size={24} className="mr-2" />
                <div>
                  <p className="text-sm">Dominant Weather Condition</p>
                  <p className="text-lg font-semibold">Sunny</p>
                  <p className="text-xs text-zinc-400">Reason: Clear skies with minimal cloud cover.</p>
                </div>
              </div>
            </div>
          </div>
    
        
        </div>
      );
    };
export default TodayForecast