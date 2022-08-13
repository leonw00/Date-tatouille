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
import toast, { Toaster } from "react-hot-toast";

function HomePage() {
  const [location, setLocation] = useState("");
  const [range, setRange] = useState(50);
  const [rangeSelection, setRangeSelection] = useState(50);
  const [indoor, setIndoor] = useState(true);
  const [outdoor, setOutdoor] = useState(false);
  const [longitude, setLongitude] = useState(null);
  const [latitude, setLatitude] = useState(null);

  useEffect(() => {
    var coordinates = getCurrentLocation();
    setLatitude(coordinates.lat);
    setLongitude(coordinates.lng);
  }, []);

  setCurrentTheme();

  let navigate = useNavigate();
  function handleGeneratedClick() {
    // error handling
    if (!(indoor || outdoor)) {
      // no indoor or outdoor
      toast.error("Need either Indoor or Outdoor", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    } else if (location.length === 0) {
      // no location as input
      toast.error("Need to input location", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    } else {
      navigate("/generated");
    }
  }

  return (
    <div>
      <div>
        <Toaster />
      </div>

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
              padding: "4px 10px",
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
              setLatitude(place.geometry.location.lat());
              setLongitude(place.geometry.location.lng());
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
          <MapComponent lat={latitude} lng={longitude} />
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
            handleGeneratedClick();
            // await nearbySearch();
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
