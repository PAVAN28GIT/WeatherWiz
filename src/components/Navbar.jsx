import React from 'react';
import { UilClouds, UilSearch } from '@iconscout/react-unicons';

function Navbar({ city, onCityChange, onCelsiusClick, onFahrenheitClick }) {
  return (
    <nav className="flex items-center justify-between p-5 bg-black">
      
      {/* Left side*/}
      <div className="flex flex-row items-center w-1/4 text-3xl px-3 text-white font-nunito">
        <UilClouds size={40} />
        <p> WeatherWiz</p> 
      </div>

      {/* Center: Search bar */}
      <div className="flex-grow flex px-48 ">
        <div className="relative">
          <UilSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-50" />
          <input
            type="text"
            value={city} // to display the current city name on search bar
            onChange={onCityChange}
            placeholder="   search city..."
            className="w-96 pl-10 pr-4 py-3 rounded-full bg-gray-800 text-white border-none focus:outline-none"
          />
        </div>
      </div>

      {/* Right side */}
      <div className="flex flex-row text-2xl font-thin px-3 text-white">
        <button  onClick={onCelsiusClick} className= "px-2 "> °C </button>
        <p> | </p>
        <button onClick={onFahrenheitClick} className= "px-2 "> °F </button>
      </div>
    </nav>
  );
}

export default Navbar;
