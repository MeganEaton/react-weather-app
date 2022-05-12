import "./App.css";

import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="Boston" />
      <p>
        This app was made by{" "}
        <a href="https://meganeaton.me" target="_blank" rel="noreferrer">
          Megan Eaton
        </a>
        . The code can be viewed here:{" "}
        <a
          href="https://github.com/MeganEaton/react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fa-brands fa-github" alt="GitHub icon page link"></i>
        </a>
      </p>
    </div>
  );
}
