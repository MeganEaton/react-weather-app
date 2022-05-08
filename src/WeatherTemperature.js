import React, { useState } from "react";
import "./App.css";

export default function WeatherTemperature(props) {
  let [unit, setUnit] = useState("fahrenheit");
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celcius");
  }
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function celsius() {
    return ((props.fahrenheit - 32) * 5) / 9;
  }
  function celsiusMax() {
    return ((props.maxTemp - 32) * 5) / 9;
  }
  function celsiusMin() {
    return ((props.minTemp - 32) * 5) / 9;
  }

  if (unit === "fahrenheit") {
    return (
      <div className="row WeatherTemperature">
        <div className="col">
          <div className="temperature">{Math.round(props.fahrenheit)}</div>
        </div>
        <div className="col">
          <ul className="nowHighLow">
            <li className="todaysHigh">{Math.round(props.maxTemp)}</li>
            <li className="todaysLow">{Math.round(props.minTemp)}</li>
          </ul>
          <div className="units col">
            °F |{" "}
            <a href="/" onClick={showCelsius}>
              °C
            </a>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="row WeatherTemperature">
        <div className="col">
          <div className="temperature">{Math.round(celsius())}</div>
        </div>
        <div className="col">
          <ul className="nowHighLow">
            <li className="todaysHigh">{Math.round(celsiusMax())}</li>
            <li className="todaysLow">{Math.round(celsiusMin())}</li>
          </ul>
          <div className="col units">
            <a href="/" onClick={showFahrenheit}>
              °F
            </a>{" "}
            | °C
          </div>
        </div>
      </div>
    );
  }
}
