import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTemperatureHalf, faCloud, faTint, faWind } from "@fortawesome/free-solid-svg-icons";
import "./Home.css";

const Home = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState("");

  const API_KEY = "5e7854915c20cc5a3b83a4b12e97c24f";
  const CITY = "Jakarta";

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const currentWeatherResponse = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather`,
          {
            params: {
              q: CITY,
              appid: API_KEY,
              units: "metric",
            },
          }
        );
        setCurrentWeather(currentWeatherResponse.data);

        const forecastResponse = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast`,
          {
            params: {
              q: CITY,
              appid: API_KEY,
              units: "metric",
            },
          }
        );

        const dailyForecasts = forecastResponse.data.list.filter((item) =>
          item.dt_txt.includes("12:00:00")
        );
        setForecast(dailyForecasts.slice(0, 4));
        setError("");
      } catch (err) {
        setError("Failed to fetch weather data.");
      }
    };

    fetchWeatherData();
  }, []);

  const getWeatherBackground = (weather) => {
    if (!weather) return "default-bg";
    const mainCondition = weather.weather[0].main.toLowerCase();

    if (mainCondition.includes("clear")) return "clear-bg";
    if (mainCondition.includes("cloud")) return "cloudy-bg";
    if (mainCondition.includes("rain")) return "rainy-bg";
    if (mainCondition.includes("snow")) return "snow-bg";
    return "default-bg";
  };

  return (
    <div className={`home ${getWeatherBackground(currentWeather)}`}>
      <main>
        {/* Judul Cuaca */}
        <div className="section-title center-text">
          <div className="section-title-box with-border">
            <h2>
              <FontAwesomeIcon icon={faCloud} className="fa-icon" /> Current Weather in {CITY}
            </h2>
          </div>
          <div className="title-underline"></div>
        </div>

        {error && <p className="error" style={{ color: "black" }}>{error}</p>}

        {/* Data Cuaca Sekarang */}
        {currentWeather && (
          <div className="current-weather" style={{ color: "black" }}>
            <p>
              <FontAwesomeIcon icon={faTemperatureHalf} /> <strong>Temperature:</strong>{" "}
              {currentWeather.main.temp}°C
            </p>
            <p>
              <FontAwesomeIcon icon={faCloud} /> <strong>Condition:</strong>{" "}
              {currentWeather.weather[0].description}
            </p>
            <p>
              <FontAwesomeIcon icon={faTint} /> <strong>Humidity:</strong>{" "}
              {currentWeather.main.humidity}%
            </p>
            <p>
              <FontAwesomeIcon icon={faWind} /> <strong>Wind Speed:</strong>{" "}
              {currentWeather.wind.speed} m/s
            </p>
          </div>
        )}

        {/* Judul Prakiraan Cuaca */}
        <div className="section-title  center-text">
          <div className="section-title-box with-border">
            <h2>
              <FontAwesomeIcon icon={faWind} className="fa-icon" /> 4-Day Forecast
            </h2>
          </div>
          <div className="title-underline"></div>
        </div>

        {/* Prakiraan Cuaca 4 Hari */}
        <div className="forecast-horizontal" style={{ color: "black" }}>
          {forecast.map((day, index) => (
            <div key={index} className="forecast-item-horizontal" style={{ color: "black" }}>
              <p>
                <strong>Date:</strong> {new Date(day.dt_txt).toLocaleDateString()}
              </p>
              <p>
                <FontAwesomeIcon icon={faTemperatureHalf} /> <strong>Temp:</strong>{" "}
                {day.main.temp}°C
              </p>
              <p>
                <FontAwesomeIcon icon={faCloud} /> <strong>Condition:</strong>{" "}
                {day.weather[0].description}
              </p>
              <p>
                <FontAwesomeIcon icon={faWind} /> <strong>Wind:</strong> {day.wind.speed} m/s
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
