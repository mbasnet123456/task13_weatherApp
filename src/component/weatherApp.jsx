import React, { useState } from "react";
import Sunny from "./sunny";
import RainyWeather from "./RainyWeather";
import Winter from "./winter";
import "../styles/weatherApp.css";
function WeatherApp() {
  const [weatherData, setWeatherData] = useState({
    temperature: 85,
    description: "sunny clear sky",
    city: "Dallas, Texas",
    condition: "sunny",
  });

  const updateWeatherData = (data) => {
    setWeatherData(data);
  };

  return (
    <div className="weatherApp">
      <div className="weatherData">
        <h1>City: {weatherData.city}</h1>
        <h3>Temperature: {weatherData.temperature}</h3>
        <h3>Description: {weatherData.description}</h3>
      </div>

      <div className="weatherButtons">
        <button
          className="sunnyButton"
          onClick={() =>
            updateWeatherData({
              temperature: 80,
              description: "clear sunny weather",
              city: "Dallas, Texas",
              condition: "sunny",
            })
          }
        >
          Sunny
        </button>
        <button
          className="rainyButton"
          onClick={() =>
            updateWeatherData({
              temperature: 55,
              description: "heavy rain fall",
              city: "San Francisco, California",
              condition: "rainy",
            })
          }
        >
          Rainy
        </button>
        <button
          className="winterButton"
          onClick={() =>
            updateWeatherData({
              temperature: 25,
              description: "heavy snow fall",
              city: "New York City, New York",
              condition: "winter",
            })
          }
        >
          Winter
        </button>
      </div>
      {weatherData.condition === "sunny" && <Sunny />}
      {weatherData.condition === "rainy" && <RainyWeather />}
      {weatherData.condition === "winter" && <Winter />}
    </div>
  );
}

export default WeatherApp;
