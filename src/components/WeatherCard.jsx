import { UilCalendarAlt, UilMapMarker, UilTemperatureQuarter } from '@iconscout/react-unicons';
import { iconUrlFromCode } from '../../services/weatherServices';
import { formatUnixToReadable } from '../../services/weatherServices';

const WeatherCard = ({ weatherNow }) => {
  if (!weatherNow) {
    return (
      <div className="bg-zinc-800 p-6 mb-4 rounded-lg shadow-md text-black w-96 bg-gradient-to-r from-cyan-50 to-blue-400 border-2">
        <h3 className="text-lg font-bold mb-4">Fetching data...</h3>
      </div>
    );
  }



  // Destructure weatherNow inside the component body
  const {
    condition,
    icon,
    temp,
    dt,
    name,
    country
  } = weatherNow;


  const date = formatUnixToReadable(dt);

  // Proceed if weatherNow is defined
  return (
    <div className="bg-zinc-800 p-6 px-8 w-96 mb-4  rounded-lg shadow-md text-black  bg-gradient-to-r from-cyan-50 to-blue-400 border-2">
      <h3 className="text-lg font-bold mb-4">Now</h3>
      <div className="flex items-center">
        <div className="text-6xl font-bold"> {`${temp.toFixed()}°`}</div>
   
        <img src={iconUrlFromCode(icon)} className='ml-10 size-24 '></img>
      </div>
      <div className="mb-3">
      <p>{condition || "Unknown"}</p> 
      </div>

      <div className="flex items-center mb-2">

        
        <UilCalendarAlt size={20} className="mr-2" />
        <p>{date || "Unknown Date"}</p> {/* Fallback if date is undefined */}
      </div>
      <div className="flex items-center">
        <UilMapMarker size={20} className="mr-2" />
        <p>{name+ `, ` +country || "Unknown Location"}</p> 
      </div>
    </div>
  );
};

export default WeatherCard;
