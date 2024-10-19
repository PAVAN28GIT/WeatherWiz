import { UilCalendarAlt, UilMapMarker, UilTemperatureQuarter } from '@iconscout/react-unicons';

const WeatherCard = ({ temp = '36°C', condition = 'Clear', day = 'Sunday', date = '12th October', location = 'Mysuru' }) => {
  return (
    <div className="bg-zinc-800 p-6 mb-4 rounded-lg shadow-md text-black w-96 bg-gradient-to-r from-cyan-50 to-blue-400 border-2">
      <h3 className="text-lg font-bold mb-4">Now</h3>
      <div className="flex items-center mb-6">
        <div className="text-6xl font-bold">{temp}</div>
        <UilTemperatureQuarter className="ml-4" size={30} />
      </div>
      <div className="flex items-center mb-2">
        <UilCalendarAlt size={20} className="mr-2" />
        <p>{day}, {date}</p>
      </div>
      <div className="flex items-center">
        <UilMapMarker size={20} className="mr-2" />
        <p>{location}</p>
      </div>
    </div>
  );
};

export default WeatherCard;
