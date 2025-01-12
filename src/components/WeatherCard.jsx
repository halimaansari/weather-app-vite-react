import React from "react";
import "./WeatherCard.css";  

const WeatherCard = ({ weather }) => {
  if (!weather) {
    return ;
  }

  return (
    <div className="weather-card">
      <h2 className="card-title">{weather?.name}</h2>
      <p className="card-info">Temperature: {weather?.main?.temp}°C</p>
      <p className="card-info">Humidity: {weather?.main?.humidity}%</p>
      <p className="card-info">Feels like: {weather?.main?.feels_like}°C</p>

      {/* Icon for weather */}
      <img
        className="weather-icon"
        src={`https://openweathermap.org/img/w/${weather?.weather?.[0]?.icon}.png`} // Ensure HTTPS is used
        alt="weather icon"
      />
    </div>
  );
};

export default WeatherCard;
