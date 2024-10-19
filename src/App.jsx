import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=" bg-zinc-900 min-h-screen w-full">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  )
}

export default App
