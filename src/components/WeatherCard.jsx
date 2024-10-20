import { UilCalendarAlt, UilMapMarker, UilTemperatureQuarter } from '@iconscout/react-unicons';
import { iconUrlFromCode } from '../../services/weatherServices';
import { formatUnixToReadable } from '../../services/weatherServices';

const WeatherCard = ({ weatherNow }) => {
  if (!weatherNow) {
    return (
      <div className="bg-zinc-800 p-6 mb-4 rounded-lg shadow-md text-black w-full sm:w-96 bg-gradient-to-r from-cyan-50 to-blue-400 border-2">
        <h3 className="text-lg font-bold mb-4">Fetching data...</h3>
      </div>
    );
  }

  const {
    condition,
    icon,
    temp,
    dt,
    name,
    country
  } = weatherNow;

  const date = formatUnixToReadable(dt);

  return (
    <div className="bg-zinc-800 p-6 px-6 sm:px-8 w-full sm:w-96 mb-3 rounded-lg shadow-md text-black bg-gradient-to-r from-cyan-50 to-blue-400 border-2">
      <h3 className="text-lg font-bold mb-4">Now</h3>
      <div className="flex items-center justify-between">
        <div className="text-4xl sm:text-6xl font-bold">{`${temp.toFixed()}°`}</div>
        <img src={iconUrlFromCode(icon)} className="w-16 sm:w-24 ml-5" alt="weather icon" />
      </div>
      <div className="mt-3">
        <p>{condition || "Unknown"}</p>
      </div>
      <div className="flex items-center mt-2">
        <UilCalendarAlt size={20} className="mr-2" />
        <p>{date || "Unknown Date"}</p>
      </div>
      <div className="flex items-center mt-2">
        <UilMapMarker size={20} className="mr-2" />
        <p>{`${name}, ${country}` || "Unknown Location"}</p>
      </div>
    </div>
  );
};

export default WeatherCard;
