import React from "react";
import WeatherIcon from "./WeatherIcon.js";
import "./WeatherForecast.css";

export default function WeatherForecast() {
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
