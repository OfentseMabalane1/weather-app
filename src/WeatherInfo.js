import React from 'react';

const WeatherInfo = ({ weather, temperature }) => {
  let weatherEmoji = "";

  if (weather === "Clear") {
    weatherEmoji = "☀️";
  } else if (weather === "Rain") {
    weatherEmoji = "🌧️";
  } else if (weather === "Clouds") {
    weatherEmoji = "☁️";
  } else if (weather === "Snow") {
    weatherEmoji = "❄️";
  } else if (weather === "Thunderstorm") {
    weatherEmoji = "⚡";
  } else {
    weatherEmoji = "🌥️";
  }

  return (
    <div className="weather-info">
      <h3>{weatherEmoji} Current Weather</h3>
      <p>Condition: {weather}</p>
      <p>Temperature: {temperature}°C</p>
    </div>
  );
};

export default WeatherInfo;

