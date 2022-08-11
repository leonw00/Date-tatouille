import {
  getCurrentLocation,
  nearbySearch,
  setAutoCompleteLocation,
} from "../../backend/LogicCalls";
import MapComponent from "../../components/MapComponent";
import TitleComponent from "../../components/title/TitleComponent";
import ThemeToggler from "../../components/themeToggler/ThemeToggler";
import { useEffect, useState } from "react";
import "./HomePage.css";
import mapMarkerIcon from "../../assets/icons/mapMarker.png";
import { useNavigate } from "react-router-dom";
import { setCurrentTheme } from "../../util/ThemeController.js";
import Autocomplete from "react-google-autocomplete";

function HomePage() {
  const [location, setLocation] = useState("");
  const [range, setRange] = useState(50);
  const [rangeSelection, setRangeSelection] = useState(50);
  const [indoor, setIndoor] = useState(true);
  const [outdoor, setOutdoor] = useState(false);

  useEffect(() => {
    getCurrentLocation();
  }, []);

  setCurrentTheme();

  let navigate = useNavigate();
  function handleGeneratedClick() {
    // error handling
    if (!(indoor || outdoor)) {
      // no indoor or outdoor
    } else if (location.length === 0) {
      // no location as input
    }
    navigate("/generated");
  }

  return (
    <div>
      <ThemeToggler />
      <TitleComponent />

      <div className="input-container">
        <div className="address-input-container">
          <img className="icon" src={mapMarkerIcon} alt="Map Marker Icon" />
          <Autocomplete
            style={{
              fontFamily: "Roboto Condensed",
              fontWeight: "bold",
              color: "black",
              fontSize: "1.2rem",
              width: "100%",
              height: "30px",
              padding: "4px 12px",
              background: "none",
              outline: "none",
              border: "none",
              letterSpacing: "0.7px",
            }}
            onPlaceSelected={(place) => {
              setAutoCompleteLocation(
                place.geometry.location.lat(),
                place.geometry.location.lng()
              );
              setLocation(place.formatted_address);
            }}
            options={{
              types: ["address"],
            }}
          />
          {/* <input
            id="location-input"
            className="input-autocomplete"
            placeholder="Enter Your Location"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          /> */}
        </div>
        <div className="map-placeholder">
          <MapComponent />
        </div>
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
          onClick={async () => {
            // handleGeneratedClick();
            await nearbySearch();
          }}
        >
          Generate Date Ideas!
        </button>
      </div>
      <div className="input-container-shadow"></div>
    </div>
  );
}

function outputBoolean(bool) {
  return bool ? "Yes" : "No";
}

export default HomePage;
