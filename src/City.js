import React from "react";

export default function City() {
  let weatherData = {
    city: "Montreal",
    time: "11:35",
    date: "Thursday, March 17",
    sunrise: "06:30",
    sunset: "19:30",
  };
  return (
    <div className={"City"}>
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
    </div>
  );
}
