import React from "react";

export default function Temperature() {
  let weatherData = {
    description: "clear",
    temperature: 55,
    temperatureHigh: 64,
    temperatureLow: 44,
    feelsLike: 50,
    humidity: 60,
    windSpeed: 5,
    moonrise: "21:30",
    moonset: "05:30",
  };
  return (
    <div className="row Temperature">
      <div className="col">
        <ul className="nowIconDescription">
          <li className="nowIcon">
            <i className="wi wi-night-sleet" alt="weather icon"></i>
          </li>
          <li className="nowDescription">{weatherData.description}</li>
        </ul>
      </div>
      <div className="col-2">
        <div className="temperature">{weatherData.temperature}</div>
      </div>
      <div className="col-1">
        <ul className="nowHighLow">
          <li className="todaysHigh">{weatherData.temperatureHigh}</li>
          <li className="todaysLow">{weatherData.temperatureLow}</li>
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
            : <span id="feels-like">{weatherData.feelsLike}</span>°
          </li>
          <li className="humidity">
            <i className="wi wi-humidity" alt="humidity" title="Humidity"></i>:
            <span> {weatherData.humidity}%</span>
          </li>
          <li className="windSpeed">
            <i
              className="wi wi-strong-wind"
              alt="wind speed"
              title="Wind Speed"
            ></i>
            : <span></span>
            <span className="windUnit">{weatherData.windSpeed} mph </span>
          </li>
          <li>
            <i className="wi wi-moonrise" alt="moonrise" title="Moonrise"></i>:
            <span> {weatherData.moonrise}</span>
          </li>
          <li>
            <i className="wi wi-moonset" alt="moonset" title="Moonset"></i>:
            <span> {weatherData.moonset}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
