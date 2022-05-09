import React from "react";
import WeatherIcon from "./WeatherIcon.js";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  let apiKey = "af800718d3a8f4106f6f5a11754d006c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);

  function handleResponse(response) {
    console.log(response);
  }

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="forecastDay">Mon</div>
          <div className="forecastIcon">
            <WeatherIcon code="01d" alt="sunny" />
          </div>
          <div className="forecastMaxMin">
            <span className="forecastTemperatureMax">75°</span>
            <span className="forecastTemperatureMin">55°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
