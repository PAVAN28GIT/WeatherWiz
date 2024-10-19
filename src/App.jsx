import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import getWeatherData from '../services/weatherServices'
import getFormattedWeatherData from '../services/weatherServices'


function App() {
  const [count, setCount] = useState(0)


  const fetchWeather = async()=>{
    const { normaldata , forcast5d } = await getFormattedWeatherData( {q:"mysore " , units :"metric"});
  }  
  fetchWeather();




  return (
    <div className=" bg-zinc-900 min-h-screen w-full">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  )
}

export default App
