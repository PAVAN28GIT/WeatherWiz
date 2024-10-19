import { format } from "date-fns";

//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const API_KEY = "596852c114e0a61bb23479892decf4a3";
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

// constructs URL and gets response as json data
const getWeatherData = (infotype, searchParams) => {
  //combining BASE_URL and infotype to construct URL.
  const url = new URL(BASE_URL + infotype);
  // appending search parameters and api key to url
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });
  // ... is spread operator that includes every object(key-value pair) in search parameter

  return fetch(url).then((res) => res.json());
  //fetch(url) is used to make an HTTP request to the constructed URL.
  // res is then converted to json
};

// middle-man function that gets json data from 1 function and sends it another function to foramte the data
// and finally returns the formatted data
const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData(
    "weather",
    searchParams
  ).then(formatCurrentWeather);

  // now using the long and latitue -> make forcast API call to get forcast data
  const { lat, lon } = formattedCurrentWeather;

  let formatted5dForcast;
  let formattedTodayForcast;

  await getWeatherData("forecast", {
    lat,
    lon,
    units: searchParams.units, // units = metric for Celsius, imperial for Fahrenheit, standard for Kelvin
  }).then((forcast5d_data) => {
    formatted5dForcast = format5DForcast(forcast5d_data); 
    formattedTodayForcast = formatTodaysForcast(forcast5d_data);
  });

  console.log("Todays Forcast");
  console.log(formattedTodayForcast);

  // Return the combined results
  return {
    ...formattedCurrentWeather,
    ...formatted5dForcast,
    ...formattedTodayForcast,
  };
};

// FORMAT FUNCTIONS

// format normal (present) weather data
const formatCurrentWeather = (data) => {
  const {
    coord: { lon, lat },
    weather,
    main: { temp, feels_like, temp_min, temp_max },
    dt,
    sys: { country, sunrise, sunset },
    name,
  } = data;

  // weather is an array so destructing it separately
  // renaming condition as main
  const { main: condition, description, icon } = weather[0];
  const date = formatUnixToReadable(dt);
  const round_temp = Math.round(temp);

  return {
    lon,
    lat,
    condition,
    description,
    icon,
    round_temp,
    feels_like,
    temp_max,
    temp_min,
    date,
    country,
    sunrise,
    sunset,
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

  const dailyAverages = {};

  for (var date in dailyTempSums) {
    dailyAverages[date] = Math.round(
      dailyTempSums[date] / dailyTempCounts[date]
    );
  }

  return dailyAverages;
};

// format todays forcast form 5d forcast data
const formatTodaysForcast = (data) => {
  const today = format(new Date(), "yyyy-MM-dd");
  const todaysForcast = {};

  data.list.forEach((entry) => {
    const [entry_date, entry_time] = entry.dt_txt.split(" "); // Split and destructure

    if (entry_date == today) {
      todaysForcast[entry_time] = entry.main.temp;
    }
  });

  return todaysForcast;
};

// function to convert unix tiime to  Sunday 19th October 2024
const formatUnixToReadable = (unixTime) => {
  return format(new Date(unixTime * 1000), "EEEE do MMMM yyyy");
};

export default getFormattedWeatherData;
