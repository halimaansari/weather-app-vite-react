import React from "react";
import "./Style.css";
import "./Header.css"; // Ensure this file is in place

const Header = ({ getCityName, userCityRef }) => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Weather App</h1>
        <p>Get the latest weather updates for your city with an agriculture perspective</p>

        {/* Input field and button for searching weather */}
        <div className="search-container">
          <input
            type="text"
            id="userCity"
            ref={userCityRef}
            className="search-input"
            placeholder="Enter city name"
          />
          <button className="search-button" onClick={getCityName}>
            Get Weather
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
