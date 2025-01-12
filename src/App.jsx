import { useState } from 'react'
import './App.css'
import Weather from './components/Weather'
import WeatherCard from './components/WeatherCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Weather/>
      <WeatherCard/>
    </>
  )
}

export default App
