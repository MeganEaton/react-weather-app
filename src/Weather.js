import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  let [weatherData, setWeatherData] = useState(null);
  let [ready, setReady] = useState(false);

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
      date: "May 4",
      sunrise: "05:30",
      sunset: "20:15",
      moonrise: "21:30",
      moonset: "04:45",
    });
    setReady(true);
  }
  if (ready) {
    return (
      <div className="weatherApp rounded-0 rounded-top Weather">
        <form>
          <button type="button" className="btn btn-light currentLocationButton">
            <i className="fa-solid fa-location-crosshairs"></i>
          </button>
          <input
            className="searchNewLocation"
            type="search"
            placeholder="Please type a new location..."
            autoComplete="off"
          />
          <input className="searchButton" type="submit" value="Search" />
        </form>
        <h1 className="location">{weatherData.city}</h1>
        <h2>
          <ul className="nowTimeDate">
            <li>
              <span className="date">Last updated at </span>
              <span>{weatherData.time} </span>
              <span className="date">on </span>
              <span>{weatherData.date}</span>
            </li>
          </ul>
          <div className="row justify-content-sm-center nowRiseSet text-center">
            <div className="col col-sm-4 sunriseTime">
              <i className="wi wi-sunrise" alt="sunrise" title="Sunrise">
                <span className="riseSetTime">{weatherData.sunrise}</span>
              </i>
            </div>
            <div className="col col-sm-4 sunsetTime">
              <i className="wi wi-sunset" alt="sunset" title="Sunset">
                <span className="riseSetTime">{weatherData.sunset}</span>
              </i>
            </div>
          </div>
        </h2>
        <br />
        <div className="row">
          <div className="col">
            <ul className="nowIconDescription">
              <li className="nowIcon">
                <i
                  className="wi wi-night-sleet"
                  alt={weatherData.description}
                ></i>
              </li>
              <li className="nowDescription">{weatherData.description}</li>
            </ul>
          </div>
          <div className="col-2">
            <div className="temperature">
              {Math.round(weatherData.temperature)}
            </div>
          </div>
          <div className="col-1">
            <ul className="nowHighLow">
              <li className="todaysHigh">
                {Math.round(weatherData.temperatureMax)}
              </li>
              <li className="todaysLow">
                {Math.round(weatherData.temperatureMin)}
              </li>
            </ul>
          </div>
          <div className="col">
            <ul className="nowAddDescription">
              <li className="feelsLike">
                <i
                  className="wi wi-thermometer"
                  alt="feels like"
                  title="Feels Like"
                ></i>
                :{" "}
                <span id="feels-like">{Math.round(weatherData.feelsLike)}</span>
                °
              </li>
              <li className="humidity">
                <i
                  className="wi wi-humidity"
                  alt="humidity"
                  title="Humidity"
                ></i>
                :<span> {weatherData.humidity}%</span>
              </li>
              <li className="windSpeed">
                <i
                  className="wi wi-strong-wind"
                  alt="wind speed"
                  title="Wind Speed"
                ></i>
                : <span></span>
                <span className="windUnit">
                  {Math.round(weatherData.wind)} km/h{" "}
                </span>
              </li>
              <li>
                <i
                  className="wi wi-moonrise"
                  alt="moonrise"
                  title="Moonrise"
                ></i>
                :<span> {weatherData.moonrise}</span>
              </li>
              <li>
                <i className="wi wi-moonset" alt="moonset" title="Moonset"></i>:
                <span> {weatherData.moonset}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let city = "Boston";
    let apiKey = "af800718d3a8f4106f6f5a11754d006c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
