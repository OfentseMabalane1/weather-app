import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [city, setCity] = useState(""); 
  const [weather, setWeather] = useState(null); 
  const [error, setError] = useState(null); 

  const apiKey = "c76284f01da16293c03a723ffbab23de"; 

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const fetchWeather = async () => {
    if (city) {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city},za&appid=${apiKey}&units=metric`
        );

        if (response.data.cod !== 200) {
          // This checks for an error in the response
          setWeather(null);
          setError("City not found. Please check the spelling or try another city.");
        } else {
          setWeather(response.data);
          setError(null); // Reset error if the fetch is successful
        }
      } catch (error) {
        console.error("API request failed", error); // Log the error to the console
        setWeather(null);
        setError("An error occurred while fetching the weather data.");
      }
    }
  };

  return (
    <div className="App">
      <h1>South Africa Weather App</h1>
      <input
        type="text"
        placeholder="Enter city (e.g., Soweto)"
        value={city}
        onChange={handleCityChange}
      />
      <button onClick={fetchWeather}>Get Weather</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {weather && (
        <div className="weather-details">
          <h2>{weather.name}, {weather.sys.country}</h2>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Weather: {weather.weather[0].description}</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind Speed: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
}

export default App;

