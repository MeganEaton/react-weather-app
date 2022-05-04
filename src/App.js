import "./App.css";

import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <Weather />
      <p>
        This app was made by Megan Eaton. The code can be viewed here:{" "}
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
