import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo.js";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState(null);
  let [ready, setReady] = useState(false);
  let [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      temperature: response.data.main.temp,
      temperatureMin: response.data.main.temp_min,
      temperatureMax: response.data.main.temp_max,
      feelsLike: response.data.main.feels_like,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      time: "12:30",
      date: new Date(response.data.dt * 1000),
      sunrise: "05:30",
      sunset: "20:15",
      moonrise: "21:30",
      moonset: "04:45",
    });
    setReady(true);
  }

  function search() {
    let apiKey = "af800718d3a8f4106f6f5a11754d006c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (ready) {
    return (
      <div className="weatherApp rounded-0 rounded-top Weather">
        <form onSubmit={handleSubmit}>
          <button type="button" className="btn btn-light currentLocationButton">
            <i className="fa-solid fa-location-crosshairs"></i>
          </button>
          <input
            className="searchNewLocation"
            type="search"
            placeholder="Please type a new location..."
            autoComplete="off"
            onChange={handleCityChange}
          />
          <input className="searchButton" type="submit" value="Search" />
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
