import React from "react";

export default function FormatDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let day = days[props.date.getDay()];
  let hours = ("0" + props.date.getHours()).slice(-2);
  let minutes = ("0" + props.date.getMinutes()).slice(-2);
  let month = months[props.date.getMonth()];
  let date = props.date.getDate();

  return (
    <ul className="nowTimeDate FormatDate">
      <li>
        <span className="date">Last updated at </span>
        <span>
          {hours}:{minutes}
        </span>
        <span className="date"> on </span>
        <span>
          {day}, {month} {date}
        </span>
      </li>
    </ul>
  );
}
