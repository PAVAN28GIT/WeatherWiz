import React from 'react';
import { UilGithub , UilFileInfoAlt, UilEnvelope } from '@iconscout/react-unicons';


const Footer = () => {
    return (
        <footer className="bg-zinc-800 py-16 px-9 shadow-lg">
            <div className="w-full flex gap-8">
                {/* Left Side */}
                <div className="w-3/4 justify-start">
                    <h1 className="w-full text-3xl font-nunito text-white font-thin">Pavan Kumar K</h1>
                    <p className="py-4 font-nunito text-white font-normal mr-5">
                    Stay ahead of the weather with accurate forecasts and insightful climate data.
                    Whether you're planning your day, organizing an event, or just curious about the skies, WeatherWiz 
                    has you covered.


                    </p>
                </div>
                <div className="ml-10">
                    <h2 className="text-xl text-white font-semibold">About</h2>
                    <ul className="mt-2">

                        <li className="flex items-center py-2">
                            <UilFileInfoAlt className="text-white mr-2" size={24} />
                            <a href="https://openweathermap.org/api" className="text-white hover:underline">API Documentation</a>
                        </li>
                
                
                        <li className="flex items-center py-2">
                            <UilEnvelope className="text-white mr-2" size={24} />
                            <a href="mailto:pavancs088@gmail.com" className="text-white hover:underline">Contact Developer</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="mt-10 text-center text-white text-sm">
                <p>&copy; {new Date().getFullYear()} Pavan Kumar K. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
