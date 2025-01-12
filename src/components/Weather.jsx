import React, { useState, useRef } from "react";
import axios from "axios";
import Swal from "sweetalert2"; 
import WeatherCard from "./WeatherCard";
import Header from "./Header"; 

const Weather = () => {
  const userCityRef = useRef(null);
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const getCityName = async (event) => {
    event.preventDefault();
    let cityName = userCityRef.current.value;
    let APIkey = "2e3555ad04e974ed3dbc86085f4b3727";

    if (!cityName) {
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Please enter a city name.",
      });
      return;
    }

    try {
      let response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIkey}&units=metric`
      );

      // Store the weather data
      setWeather(response.data);
      setError(""); 

      // Success alert
      Swal.fire({
        icon: "success",
        title: "Weather Fetched!",
        text: `Weather data for ${response.data.name} fetched successfully.`,
      });
    } catch (e) {
      setError("City not found or API error.");
      Swal.fire({
        icon: "error",
        title: "City Not Found",
        text: "Could not find the city. Please try again.",
      });
    }
  };

  return (
    <div className="weather-app">
      <Header getCityName={getCityName} userCityRef={userCityRef} />

      <div className="weather-card-container">
        {error && <p className="error">{error}</p>} {/* Display error message */}
        {weather ? (
          <WeatherCard weather={weather} />
        ) : (
          !error && <p>No weather data available</p>
        )}
      </div>
    </div>
  );
};

export default Weather;
