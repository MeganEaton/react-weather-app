import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo.js";
import WeatherForecast from "./WeatherForecast.js";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState(null);
  let [ready, setReady] = useState(false);
  let [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      temperatureMin: response.data.main.temp_min,
      temperatureMax: response.data.main.temp_max,
      feelsLike: response.data.main.feels_like,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
      sunrise: new Date(response.data.sys.sunrise * 1000),
      sunset: new Date(response.data.sys.sunset * 1000),
    });
    setReady(true);
  }

  function search() {
    let apiKey = "af800718d3a8f4106f6f5a11754d006c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function searchLocation(position) {
    let apiKey = "af800718d3a8f4106f6f5a11754d006c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${position.data.coord.lat}&lon=${position.data.coord.lon}&units=imperial&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function getCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation);
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
          <button
            type="button"
            className="btn btn-light currentLocationButton"
            onClick={getCurrentLocation}
          >
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
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
