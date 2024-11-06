import React from 'react';

const WeatherInfo = ({ weather, temperature }) => {
  let weatherEmoji = "";

  if (weather === "Clear") {
    weatherEmoji = "☀️";
  } else if (weather === "Partly Cloudy") {
    weatherEmoji = "🌤️";
  } else if (weather === "Clouds") {
    weatherEmoji = "☁️";
  } else if (weather === "Rain") {
    weatherEmoji = "🌧️";
  } else if (weather === "Thunderstorm") {
    weatherEmoji = "🌩️";
  } else if (weather === "Showers") {
    weatherEmoji = "🌦️";
  } else if (weather === "Snow") {
    weatherEmoji = "❄️";
  } else if (weather === "Fog") {
    weatherEmoji = "🌫️";
  } else if (weather === "Windy") {
    weatherEmoji = "🌬️";
  } else if (weather === "Hail") {
    weatherEmoji = "🌨️";
  } else if (weather === "Heatwave") {
    weatherEmoji = "🌡️";
  } else if (weather === "Dust Storm") {
    weatherEmoji = "🌪️";
  } else if (weather === "Mist") {
    weatherEmoji = "🌁";
  } else if (weather === "Drizzle") {
    weatherEmoji = "🌦️";
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

