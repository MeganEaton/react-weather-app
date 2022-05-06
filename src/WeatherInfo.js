import React from "react";
import FormatDate from "./FormatDate.js";
import WeatherIcon from "./WeatherIcon.js";
import WeatherTemperature from "./WeatherTemperature.js";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 className="location">{props.data.city}</h1>
      <h2>
        <FormatDate date={props.data.date} />
        <div className="row justify-content-sm-center nowRiseSet text-center">
          <div className="col col-sm-4 sunriseTime">
            <i className="wi wi-sunrise" alt="sunrise" title="Sunrise">
              <span className="riseSetTime">{props.data.sunrise}</span>
            </i>
          </div>
          <div className="col col-sm-4 sunsetTime">
            <i className="wi wi-sunset" alt="sunset" title="Sunset">
              <span className="riseSetTime">{props.data.sunset}</span>
            </i>
          </div>
        </div>
      </h2>
      <br />
      <div className="row">
        <div className="col">
          <ul className="nowIconDescription">
            <li className="nowIcon">
              <WeatherIcon
                code={props.data.icon}
                alt={props.data.description}
              />
            </li>
            <li className="nowDescription">{props.data.description}</li>
          </ul>
        </div>
        <div className="col">
          <WeatherTemperature
            fahrenheit={props.data.temperature}
            minTemp={props.data.temperatureMin}
            maxTemp={props.data.temperatureMax}
          />
        </div>
        <div className="col">
          <ul className="nowAddDescription">
            <li className="feelsLike">
              <i
                className="wi wi-thermometer"
                alt="feels like"
                title="Feels Like"
              ></i>
              : <span id="feels-like">{Math.round(props.data.feelsLike)}</span>
              °F
            </li>
            <li className="humidity">
              <i className="wi wi-humidity" alt="humidity" title="Humidity"></i>
              :<span> {props.data.humidity}%</span>
            </li>
            <li className="windSpeed">
              <i
                className="wi wi-strong-wind"
                alt="wind speed"
                title="Wind Speed"
              ></i>
              : <span></span>
              <span className="windUnit">
                {Math.round(props.data.wind)} mph{" "}
              </span>
            </li>
            <li>
              <i className="wi wi-moonrise" alt="moonrise" title="Moonrise"></i>
              :<span> {props.data.moonrise}</span>
            </li>
            <li>
              <i className="wi wi-moonset" alt="moonset" title="Moonset"></i>:
              <span> {props.data.moonset}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
