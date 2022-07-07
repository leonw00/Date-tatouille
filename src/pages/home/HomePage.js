import { getCurrentLocation, nearbySearch } from "../../backend/LogicCalls";
import MapComponent from "../../components/MapComponent";
import { useEffect, useState } from "react";
import "./HomePage.css";

function HomePage() {
  const [location, setLocation] = useState("");
  const [range, setRange] = useState(50);
  const [indoor, setIndoor] = useState(true);
  const [outdoor, setOutdoor] = useState(false);

  useEffect(() => {
    getCurrentLocation();
  }, []);

  if (localStorage.getItem("theme") === "theme-neutral") {
    setTheme("theme-neutral");
  } else {
    setTheme("theme-lovely");
  }

  return (
    <div>
      <button
        id="toggle-theme"
        // disable the button for now
        onClick={() => {
          toggleTheme();
        }}
      >
        Switch Theme
      </button>
      <h1>Date-tatouille</h1>
      <h4>
        We help generate date ideas for you, just like Remy helping Linguini in
        Ratatouille!
      </h4>

      <div className="input-container">
        <div className="address-input-container">
          <i className="fa-solid fa-user"></i>
          <input
            id="location-input"
            placeholder="Enter Your Location"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <div className="map-placeholder">Placeholder for map</div>
        <p>Range</p>
        <input
          type="range"
          min="1"
          max="100"
          className="slider"
          defaultValue={range}
          onMouseUp={(e) => setRange(e.target.value)}
        />
        <div>
          <p>Indoor</p>
          <label className="switch">
            <input
              type="checkbox"
              checked={indoor}
              onChange={(e) => setIndoor(e.target.checked)}
            />
            <span className="slider-round"></span>
          </label>
        </div>
        <div>
          <p>Outdoor</p>
          <label className="switch">
            <input
              type="checkbox"
              checked={outdoor}
              onChange={(e) => setOutdoor(e.target.checked)}
            />
            <span className="slider-round"></span>
          </label>
        </div>
        <button
          id="generate-button"
          // disable the button for now
          onClick={() => {
            nearbySearch(location, range, indoor, outdoor);
          }}
        >
          Generate Date Ideas!
        </button>
        {/* <MapComponent /> */}
      </div>
    </div>
  );
}

// function to set a given theme/color-scheme
function setTheme(themeName) {
  localStorage.setItem("theme", themeName);
  document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
  if (localStorage.getItem("theme") === "theme-lovely") {
    setTheme("theme-neutral");
  } else {
    setTheme("theme-lovely");
  }
}

export default HomePage;
