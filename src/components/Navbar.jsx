import React from "react";
import { UilClouds, UilSearch } from "@iconscout/react-unicons";

function Navbar({
  city,
  onCityChange,
  onCelsiusClick,
  onFahrenheitClick,
  units,
  onAlertClick,
  showAlert
}) {
  return (
    <nav className="flex flex-col lg:flex-row items-center justify-between p-5 bg-black">
      {/* Left side */}
      <div className="flex flex-row items-center w-full lg:w-1/4 text-2xl lg:text-3xl px-3 text-white font-nunito mb-4 lg:mb-0">
        <UilClouds size={40} />
        <p className="ml-2">WeatherWiz</p>
      </div>

      {/* Center: Search bar */}
      <div className="w-full lg:flex-grow flex justify-center lg:px-48 mb-4 lg:mb-0">
        <div className="relative w-full max-w-lg">
          <UilSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-50" />
          <input
            type="text"
            value={city}
            onChange={onCityChange}
            placeholder="   search city..."
            className="w-full pl-10 pr-4 py-3 rounded-full bg-gray-800 text-white border-none focus:outline-none"
          />
        </div>
      </div>

      {/* Right side with Set Alert button */}
      <div className="flex flex-row items-center">
        <div className="mx-4 text-lg lg:text-xl font-normal px-2 py-1 text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-lg">
          {/* <button className="px-3 w-28" onClick={onAlertClick}>
            Set Alert
          </button> */}
          <button className="px-3 w-28" onClick={onAlertClick}>
            {showAlert ? "Go back" : "Set Alert"}
          </button>
        </div>

        <div className="flex flex-row text-lg lg:text-2xl font-thin px-2 text-white bg-gradient-to-r from-blue-500 to-purple-500 py-1 rounded-lg shadow-lg">
          <button
            onClick={onCelsiusClick}
            className={`px-3 font-normal rounded-full transition duration-300 ease-in-out transform hover:scale-105 ${
              units === "metric"
                ? "bg-cyan-100 text-black shadow-md"
                : "text-white"
            }`}
          >
            °C
          </button>
          <p className="px-2"> | </p>
          <button
            onClick={onFahrenheitClick}
            className={`px-3 font-normal rounded-full transition duration-300 ease-in-out transform hover:scale-105 ${
              units === "imperial"
                ? "bg-cyan-100 text-black shadow-md"
                : "text-white"
            }`}
          >
            °F
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
