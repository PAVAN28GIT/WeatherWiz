# WeatherWiz

WeatherWiz is a modern weather application that provides real-time weather updates and forecasts. Built using Vite and React for the frontend, and styled with Tailwind CSS. The application utilizes data from the OpenWeatherMap API to deliver accurate weather information and forecasts for locations around the world.

## ScreenShots
<img width="1440" alt="Screenshot 2024-10-21 at 8 14 34 AM" src="https://github.com/user-attachments/assets/eb34f2d2-084e-47a1-b365-31bcca9c2292">

<img width="1440" alt="Screenshot 2024-10-21 at 8 15 51 AM" src="https://github.com/user-attachments/assets/30eeb526-1be4-44c2-8baa-48ec2d117024">

<img width="1440" alt="Screenshot 2024-10-21 at 8 18 42 AM" src="https://github.com/user-attachments/assets/135d808d-cf55-4c40-81cd-fa6e5738f943">


## Features

- Real-time weather data
- 5-day weather forecast (Average weather in 5 days)
- Daily Summary
- Today's Forcast (Interval of 3 hours)
- switch between Fahrenheit to Celsius


## Technology Stack

- **React.js**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool and development server for modern web applications.
- **Tailwind CSS**:A utility-first CSS framework for styling and responsive design.

- **OpenWeatherMap API**: Free API for weather data.


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


