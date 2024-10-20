import { UilSun, UilSunset, UilTear, UilTemperature, UilWind, UilClock, UilCloudSun } from '@iconscout/react-unicons';

import { iconUrlFromCode } from '../../services/weatherServices';
import {convertUnixToTime} from '../../services/weatherServices';
import { convertTo12HourFormat } from '../../services/weatherServices';


const TodayHighlights = ({ weatherNow }) => {
  if (!weatherNow) {
    return (
      <div className="bg-zinc-800 p-6 mx-3 rounded-lg shadow-md text-white max-w-full">
        <h2 className="text-lg font-semibold mb-6">Today's Highlights Loading...</h2>
      </div>
    );
  }

  const {
    condition,
    description,
    icon,
    feels_like,
    temp_max,
    temp_min,
    dt,
    sunRise,
    sunSet,
  } = weatherNow;

  const updt = convertUnixToTime(dt);
  const avg_temp = Math.round((temp_max + temp_min) / 2);

  return (
    <div className="bg-zinc-800 px-2 md:px-4 py-2 mx-2 rounded-lg shadow-md text-white max-w-screen">
      {/*Summary*/}
      <div className="bg-zinc-900 p-2 rounded-lg mb-6">
        <h3 className="text-md font-semibold mb-2 text-zinc-300">Today's Summary</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {/* Average Temperature */}
          <div className="bg-zinc-800 p-2 rounded-lg flex items-center">
            <UilTemperature size={24} className="mr-2 hidden sm:block" />
            <div>
              <p className="text-sm">Average Temperature</p>
              <p className="text-lg font-semibold">{`${avg_temp}°`}</p>
            </div>
          </div>

          {/* Maximum Temperature */}
          <div className="bg-zinc-800 p-2 rounded-lg flex items-center">
            <UilTemperature size={24} className="mr-2 hidden sm:block" />
            <div>
              <p className="text-sm">Maximum Temperature</p>
              <p className="text-lg font-semibold">{`${temp_max}°`}</p>
            </div>
          </div>

          {/* Minimum Temperature */}
          <div className="bg-zinc-800 p-2 rounded-lg flex items-center">
            <UilTemperature size={24} className="mr-2 hidden sm:block" />
            <div>
              <p className="text-sm">Minimum Temperature</p>
              <p className="text-lg font-semibold">{`${temp_min}°`}</p>
            </div>
          </div>

          {/* Dominant Weather Condition */}
          <div className="bg-zinc-800 p-2 rounded-lg flex items-center">
            <img src={iconUrlFromCode(icon)} alt="Weather Icon" className="w-12 h-12 hidden sm:block" />
            <div>
              <p className="text-sm">Dominant Condition</p>
              <p className="text-lg font-semibold">{`${condition}`}</p>
              <p className="text-xs text-zinc-400">Reason: <span className="first-letter:uppercase">{`${description}`}</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* Sunrise & Sunset, Feels Like, Condition */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {/* Feels Like */}
        <div className="bg-zinc-900 p-4 rounded-lg flex items-center justify-between">
          <div className="flex items-center">
            <UilTemperature size={30} className="mr-2 hidden sm:block" />
            <div>
              <p className="text-sm text-zinc-300">Feels Like</p>
              <p className="text-lg font-semibold">{`${feels_like}°`}</p>
            </div>
          </div>
        </div>

        {/* Condition */}
        <div className="bg-zinc-900 p-4 rounded-lg flex items-center justify-between">
          <div className="flex items-center">
            <UilWind size={30} className="mr-2 hidden sm:block" />
            <div>
              <p className="text-sm text-zinc-300">Condition</p>
              <p className="text-lg font-semibold first-letter:uppercase">{`${description}`}</p>
            </div>
          </div>
        </div>

        {/* Sunrise & Sunset */}
        <div className="bg-zinc-900 p-4 rounded-lg flex justify-between">
          <div className="flex space-x-10 sm:space-x-28">
            <div className="flex items-center">
              <UilSun size={30} className="mr-2 hidden sm:block" />
              <div>
                <p className="text-sm text-zinc-300">Sunrise</p>
                <p className="text-lg font-semibold">{convertTo12HourFormat(sunRise)}</p>
              </div>
            </div>
            <div className="flex items-center">
              <UilSunset size={30} className="mr-2 hidden sm:block" />
              <div>
                <p className="text-sm text-zinc-300">Sunset</p>
                <p className="text-lg font-semibold">{convertTo12HourFormat(sunSet)}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Time of Data Update */}
        <div className="bg-zinc-900 p-4 rounded-lg flex items-center justify-between">
          <div className="flex items-center">
            <UilClock size={30} className="mr-2 hidden sm:block" />
            <div>
              <p className="text-sm text-zinc-300">Time of the data update</p>
              <p className="text-lg font-semibold">{`${updt}`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodayHighlights;
