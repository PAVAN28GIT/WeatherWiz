import React, { useState, useEffect } from "react";

const Alert = ({ onAlertClick, setThresholds , setThresholdsSet, thresholdsSet }) => {
  const [minTempCelsius, setMinTempCelsius] = useState("");
  const [maxTempCelsius, setMaxTempCelsius] = useState("");
  const [humid, setHumid] = useState("");
  const [weatherCondition, setWeatherCondition] = useState("");

  // State to track if thresholds have been set
  
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted", {
      minTempCelsius,
      maxTempCelsius,
      humid,
      weatherCondition,
    });

    if (!minTempCelsius && !maxTempCelsius && !humid && !weatherCondition) {
      alert("Please fill at least one field before submitting.");
      return;
    }

    setThresholds({
      minTempCelsius: minTempCelsius ? parseFloat(minTempCelsius) : null,
      maxTempCelsius: maxTempCelsius ? parseFloat(maxTempCelsius) : null,
      humidity: humid ? parseFloat(humid) : null,
      weatherCondition,
    });

    onAlertClick();
    alert("Alert set");
  };

  const handleReset = () => {
    setMinTempCelsius("");
    setMaxTempCelsius("");
    setHumid("");
    setWeatherCondition("");
    setThresholdsSet(false);
  };

  useEffect(() => {
    console.log("ThresholdsSet updated:", thresholdsSet);
  }, [thresholdsSet]);

  //   return (
  //     <div className='w-full h-full p-8 bg-zinc-800 rounded-lg'>
  //       <h2 className='text-lg font-semibold text-white mb-4'>Set Weather Alerts</h2>
  //       <form onSubmit={handleSubmit} className='space-y-4'>
  //         <div>
  //           <label className='block text-white'>Minimum Temperature Threshold (°C):</label>
  //           <input
  //             type="number"
  //             placeholder="Enter Min Temperature (°C)"
  //             value={minTempCelsius}
  //             onChange={(e) => setMinTempCelsius(e.target.value)}
  //             className='w-full text-white p-2 border border-zinc-900 bg-zinc-900 rounded transition duration-300 ease-in-out hover:border-sky-400 focus:outline-none focus:border-sky-400'
  //           />
  //         </div>

  //         <div>
  //           <label className='block text-white'>Maximum Temperature Threshold (°C):</label>
  //           <input
  //             type="number"
  //             placeholder="Enter Max Temperature (°C)"
  //             value={maxTempCelsius}
  //             onChange={(e) => setMaxTempCelsius(e.target.value)}
  //             className='w-full text-white p-2 border border-zinc-900 bg-zinc-900 rounded transition duration-300 ease-in-out hover:border-sky-400 focus:outline-none focus:border-sky-400'
  //           />
  //         </div>

  //         <div>
  //           <label className='block text-white'>Humidity Threshold (%):</label>
  //           <input
  //             type="number"
  //             placeholder="Enter Humidity (%)"
  //             value={humid}
  //             onChange={(e) => setHumid(e.target.value)}
  //             className='w-full text-white p-2 border border-zinc-900 bg-zinc-900 rounded transition duration-300 ease-in-out hover:border-sky-400 focus:outline-none focus:border-sky-400'
  //           />
  //         </div>

  //         <div>
  //           <label className='block text-white'>Weather Condition:</label>
  //           <input
  //             type="text"
  //             placeholder="Enter Weather Condition (e.g., Rain)"
  //             value={weatherCondition}
  //             onChange={(e) => setWeatherCondition(e.target.value)}
  //             className='w-full p-2 text-white border border-zinc-900 bg-zinc-900 rounded transition duration-300 ease-in-out hover:border-sky-400 focus:outline-none focus:border-sky-400'
  //           />
  //         </div>

  //         <button
  //           type="submit"
  //           className='bg-sky-400 text-black p-2 text-bold rounded transition duration-300 ease-in-out hover:bg-sky-500'>
  //           Save Settings
  //         </button>
  //       </form>

  //       <div className='mt-8'>
  //         <h3 className='text-lg font-semibold text-white'>Normal Weather Conditions</h3>
  //         <ul className='text-white mt-2'>
  //           <li>Normal Temperature: 24°C - 29°C (68°F - 77°F)</li>
  //           <li>Normal Humidity: 30% - 60%</li>
  //           <li>Typical Weather: Clear, Partly Cloudy, Rain</li>
  //         </ul>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className="w-full h-full p-8 bg-zinc-800 rounded-lg">
      <h2 className="text-lg font-semibold text-white mb-4">
        Set Weather Alerts
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-white">
            Minimum Temperature Threshold (°C):
          </label>
          <input
            type="number"
            placeholder="Enter Min Temperature (°C)"
            value={minTempCelsius}
            onChange={(e) => setMinTempCelsius(e.target.value)}
            className="w-full text-white p-2 border border-zinc-900 bg-zinc-900 rounded transition duration-300 ease-in-out hover:border-sky-400 focus:outline-none focus:border-sky-400"
          />
        </div>

        <div>
          <label className="block text-white">
            Maximum Temperature Threshold (°C):
          </label>
          <input
            type="number"
            placeholder="Enter Max Temperature (°C)"
            value={maxTempCelsius}
            onChange={(e) => setMaxTempCelsius(e.target.value)}
            className="w-full text-white p-2 border border-zinc-900 bg-zinc-900 rounded transition duration-300 ease-in-out hover:border-sky-400 focus:outline-none focus:border-sky-400"
          />
        </div>

        <div>
          <label className="block text-white">Humidity Threshold (%):</label>
          <input
            type="number"
            placeholder="Enter Humidity (%)"
            value={humid}
            onChange={(e) => setHumid(e.target.value)}
            className="w-full text-white p-2 border border-zinc-900 bg-zinc-900 rounded transition duration-300 ease-in-out hover:border-sky-400 focus:outline-none focus:border-sky-400"
          />
        </div>

        <div>
          <label className="block text-white">Weather Condition:</label>
          <input
            type="text"
            placeholder="Enter Weather Condition (e.g., Rain)"
            value={weatherCondition}
            onChange={(e) => setWeatherCondition(e.target.value)}
            className="w-full p-2 text-white border border-zinc-900 bg-zinc-900 rounded transition duration-300 ease-in-out hover:border-sky-400 focus:outline-none focus:border-sky-400"
          />
        </div>

        {thresholdsSet ? (
            <button
              onClick={handleReset}
              className="bg-red-500 text-white p-2 rounded transition duration-300 ease-in-out hover:bg-red-600"
            >
              Reset Settings
            </button>
         
        ) : (
          <button
            type="submit"
            onClick={() => setThresholdsSet(true)}
            className="bg-sky-400 text-black p-2 text-bold rounded transition duration-300 ease-in-out hover:bg-sky-500"
          >
            Save Settings
          </button>
        )}
      </form>

      <div className="mt-8">
        <h3 className="text-lg font-semibold text-white">
          Normal Weather Conditions
        </h3>
        <ul className="text-white mt-2">
          <li>Normal Temperature: 24°C - 29°C (68°F - 77°F)</li>
          <li>Normal Humidity: 30% - 60%</li>
          <li>Typical Weather: Clear, Partly Cloudy, Rain</li>
        </ul>
      </div>
    </div>
  );
};

export default Alert;
