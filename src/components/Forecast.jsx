import { iconUrlFromCode } from '../../services/weatherServices';

const Forecast = ({ forecast }) => {
  // Helper function to get the day of the week from the date
  const getDayOfWeek = (dateString) => {
    const date = new Date(dateString);
    const options = { weekday: 'long' }; // Full day name (Sunday, Monday, etc.)
    return new Intl.DateTimeFormat('en-US', options).format(date);
  };

  // Helper function to format date as "DayName DD"
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    return `${getDayOfWeek(dateString)} ${day}`; // Example: "Sunday 20"
  };

  return (
    <div className="bg-zinc-800 p-3 rounded-lg shadow-lg text-white w-96">
    <div className="grid grid-cols-1 bg-zinc-900 rounded-lg overflow-hidden">
      {forecast.map((day, index) => (
        <div key={index} className="flex justify-between items-center px-2 pr-5  border-b border-zinc-600 last:border-b-0 hover:bg-zinc-800 transition duration-200">
          <div className="flex items-center">
            <img src={iconUrlFromCode("03d")} className="w-12 h-12" alt="Weather icon" />
            <p className="text-lg font-semibold ml-3">{day.temp}°</p>
          </div>
          <div className="flex flex-col items-end">
            <p className="text-sm">{formatDate(day.date)}</p> {/* Show date in the format: "Sunday 20" */}
          </div>
        </div>
      ))}
    </div>
  </div>
  
  );
};

export default Forecast;
