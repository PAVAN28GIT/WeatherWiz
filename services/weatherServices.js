import { format } from "date-fns";
import Alert from "../src/components/Alert";

const API_KEY = import.meta.env.VITE_API_KEY;

const BASE_URL = "https://api.openweathermap.org/data/2.5/";

//constructs URL and gets response as json data
const getWeatherData = (infotype, searchParams) => {

  const url = new URL(BASE_URL + infotype);   //combining BASE_URL and infotype to construct URL.
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });   // appending search parameters and api key to url
  return fetch(url).then((res) => res.json()); //fetch(url) is used to make an HTTP request to the constructed URL.
};

const getFormattedWeatherData = async (searchParams) => {
  try {
    // Fetch current weather
    const formattedCurrentWeather = await getWeatherData("weather", searchParams)
      .then(formatCurrentWeather);

    // Destructure lat and lon from the current weather data
    const { lat, lon } = formattedCurrentWeather;

    // Fetch forecast data based on latitude and longitude
    const forecastData = await getWeatherData("forecast", {
      lat,
      lon,
      units: searchParams.units,
    });

    // Format the forecast data
    const formatted5dForcast = format5DForcast(forecastData);
    const formattedTodayForcast = formatTodaysForcast(forecastData);

    // Print for debugging
    // console.log("CurrentWeather", formattedCurrentWeather);
    // console.log("5D Forecast", formatted5dForcast);
    console.log("Today's Forecast", formattedTodayForcast);

    // Return the combined results
    return {
      formattedCurrentWeather,
      formatted5dForcast,
      formattedTodayForcast,
    };
  } catch (error) {
    console.error("Error fetching weather data:", error);
    Alert("Error fetching weather data");
    throw error;  
  }
};

// format normal (present) weather data
const formatCurrentWeather = (data) => {
  const {
    coord: { lon, lat },
    weather,
    main: { temp, feels_like, temp_min, temp_max ,humidity},
    dt,
    sys: { country, sunrise, sunset },
    name,
  } = data;

  // weather is an array so destructing it separately
  // renaming condition as main
  const { main: condition, description, icon } = weather[0];


  const sunRise = convertUnixToTime(sunrise);
  const sunSet = convertUnixToTime(sunset);

  return {
    lon,
    lat,
    condition,
    description,
    icon,
    temp,
    feels_like,
    temp_max,
    temp_min,
    humidity,
    dt,
    country,
    sunRise,
    sunSet,
    name,
  };
};

// format 5-day forcast
const format5DForcast = (data) => {
  const dailyTempSums = {};
  const dailyTempCounts = {};

  data.list.forEach((entry) => {
    // "dt_txt": "2024-10-19 15:00:00"
    const entrydate = entry.dt_txt.split(" ")[0];

    if (!dailyTempSums[entrydate]) {
      // Intialise for new date
      dailyTempSums[entrydate] = 0;
      dailyTempCounts[entrydate] = 0;
    }

    dailyTempSums[entrydate] += entry.main.temp;
    dailyTempCounts[entrydate]++;
  });

  const dailyAverages = Object.keys(dailyTempSums).map(date => ({ date, temp: Math.round(dailyTempSums[date] / dailyTempCounts[date]) // Average temperature
  }));

  return dailyAverages;
};

// format todays forcast form 5d forcast data
const formatTodaysForcast = (data) => {
  const today = format(new Date(), "yyyy-MM-dd");
  const todaysForcast = [];

  data.list.forEach((entry) => {
    const [entry_date, entry_time] = entry.dt_txt.split(" "); // Split and destructure

    if (entry_date === today) {
     todaysForcast.push({ 
        time: entry_time, 
        temp: Math.round(entry.main.temp),
        icon: entry.weather[0].icon
      });
  }
  });
  return todaysForcast;
};

//convert unix tiime to  Sunday 19th October 2024
const formatUnixToReadable = (unixTime) => {
  return format(new Date(unixTime * 1000), "EEEE do MMMM yyyy");
};

function convertUnixToTime(unixTime) {
  return format(new Date(unixTime * 1000), 'HH:mm');
}

const convertTo12HourFormat = (time) => {
  let [hours, minutes, seconds] = time.split(':'); // Split time into hours, minutes, seconds
  hours = parseInt(hours, 10); // Convert hours to integer
  
  const ampm = hours >= 12 ? 'PM' : 'AM'; // Determine AM or PM
  hours = hours % 12 || 12; // Convert 0 hours to 12 AM, and 13-23 to 1-11 PM

  return `${hours}:${minutes} ${ampm}`; // Return formatted time
};

const iconUrlFromCode =(code)=> `http://openweathermap.org/img/wn/${code}@2x.png`

export default getFormattedWeatherData;

export {iconUrlFromCode , formatUnixToReadable, convertUnixToTime , convertTo12HourFormat};