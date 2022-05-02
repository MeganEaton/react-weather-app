import React from "react";

import City from "./City.js";
import Temperature from "./Temperature.js";

export default function Search() {
  return (
    <div className="weatherApp rounded-0 rounded-top Search">
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
      <City />
      <br />
      <Temperature />
    </div>
  );
}
