import React, { useState } from "react";
import axios from "axios";
import "./Kotamu.css";

const Kotamu = () => {
  const [city, setCity] = useState("");
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const API_KEY = "5e7854915c20cc5a3b83a4b12e97c24f";

  const handleSearch = async () => {
    if (!city) {
      setError("Please enter a city name.");
      setMessage("");
      return;
    }
    setError("");
    setMessage("");
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast`,
        {
          params: {
            q: city,
            appid: API_KEY,
            units: "metric",
          },
        }
      );

      // Filter forecast data to get data for the next 5 days at the same time
      const filteredData = response.data.list.filter((item) =>
        item.dt_txt.includes("12:00:00")
      ).slice(0, 5); // Get 5 days

      setForecast(filteredData);
      setMessage(`Berikut ini adalah prediksi cuaca selama 5 hari untuk kota ${city}`);
    } catch (err) {
      setError("Failed to fetch forecast. Please check the city name.");
      setForecast([]);
      setMessage("");
    }
  };

  return (
    <div className="kotamu">
      <h1>5-Day Weather Forecast</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {error && <p className="error">{error}</p>}
      {message && <p className="search-result">{message}</p>}
      {forecast.length > 0 && (
        <div className="forecast-horizontal">
          {forecast.map((day, index) => (
            <div key={index} className="forecast-item-horizontal">
              <p><strong>Date:</strong> {new Date(day.dt_txt).toLocaleDateString()}</p>
              <p><strong>Temperature:</strong> {day.main.temp}°C</p>
              <p><strong>Condition:</strong> {day.weather[0].description}</p>
              <p><strong>Humidity:</strong> {day.main.humidity}%</p>
              <p><strong>Wind Speed:</strong> {day.wind.speed} m/s</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Kotamu;
