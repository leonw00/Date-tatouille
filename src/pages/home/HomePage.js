import { getCurrentLocation, nearbySearch } from "../../backend/LogicCalls";
import MapComponent from "../../components/MapComponent";
import { useEffect, useState } from "react";
import "./HomePage.css";
import mapMarkerIcon from "../../assets/icons/mapMarker.png";

function HomePage() {
  const [location, setLocation] = useState("");
  const [range, setRange] = useState(50);
  const [rangeSelection, setRangeSelection] = useState(50);
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
          <img className="icon" src={mapMarkerIcon} alt="Map Marker Icon" />
          <input
            id="location-input" 
            className="input"
            placeholder="Enter Your Location"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="map-placeholder"><MapComponent/></div>
        <div className="input-sub-container">
          <div className="left-wrapper">
            <p className="input">Radius</p>
            <p className="input">Indoor</p>
            <p className="input">Outdoor</p>
          </div>
          <div className="right-wrapper">
            <div className="input-selection">
              <input
                type="range"
                min="1"
                max="100"
                className="slider"
                defaultValue={range}
                onMouseUp={(e) => setRange(e.target.value)}
                onChange={(e) => setRangeSelection(e.target.value)}
              />
              <div>
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
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={outdoor}
                    onChange={(e) => setOutdoor(e.target.checked)}
                  />
                  <span className="slider-round"></span>
                </label>
              </div>
            </div>
            <div className="input-description">
              <p className="input">{rangeSelection} km</p>
              <p className="input">{outputBoolean(indoor)}</p>
              <p className="input">{outputBoolean(outdoor)}</p>
            </div>
          </div>
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

function outputBoolean(bool) {
  return (bool) ? "Yes":"No";
}

export default HomePage;
