# WeatherWiz

WeatherWiz is a modern weather application that provides real-time weather updates and forecasts. Built using Vite and React for the frontend, and styled with Tailwind CSS. The application utilizes data from the OpenWeatherMap API to deliver accurate weather information and forecasts for locations around the world.

## Features

- Real-time weather data
- 5-day weather forecast
- Daily Summary
- Beautiful, responsive design using Tailwind CSS
- User-friendly interface


## Technology Stack

- `Frontend`
      - **React.js**: A JavaScript library for building user interfaces.
      - **Vite**: A fast build tool and development server for modern web applications.
      - **Tailwind CSS**:A utility-first CSS framework for styling and responsive design.

- `API`
   - **OpenWeatherMap API **: Free API for weather data.


## Deployment
  - The application is deployed at: [https://weather-wiz-git-main-pavan28gits-projects.vercel.app/](https://weather-wiz-git-main-pavan28gits-projects.vercel.app/)

## Setup and Installation

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```sh
   git clone https://github.com/PAVAN28GIT/WeatherWiz.git
   cd WeatherWiz
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Setup env variable**
   Navigate to services/weatherServices.js and replace <import.meta.env.VITE_API_KEY> with your Actual API key from https://openweathermap.org/api
   ```sh
   const API_KEY = <your-api-key>;
   ```

5. **Run the development server:**
   ```sh
   npm run dev
   ```
6. **Open your browser and visit:**
   ```
   http://localhost:5173
   ```


