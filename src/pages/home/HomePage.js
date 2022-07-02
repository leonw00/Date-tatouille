import { nearbySearch } from "../../backend/LogicCalls";
import MapComponent from "../../components/MapComponent";
import "./HomePage.css";

function HomePage() {
  if (localStorage.getItem("theme") === "theme-neutral") {
    setTheme("theme-neutral");
  } else {
    setTheme("theme-lovely");
  }

  return (
        <div>
          <h1>Date-tatouille</h1>
          <h4>We help generate date ideas for you, just like Remy helping Linguini in Ratatouille!</h4>
          <div class="input-container">
            <form>
              <input placeholder="Enter Your Location" type="text" />
              <input placeholder="sdistance from your location" type="text" />
              <input name="Submit" type="submit" />
            </form>
            {/* <MapComponent /> */}
            <button id="generate-button"
              // disable the button for now
              // onClick={() => {
              //   nearbySearch();
              // }}
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
  if (localStorage.getItem("theme") === "theme-neutral") {
    setTheme("theme-neutral");
  } else {
    setTheme("theme-lovely");
  }
}

export default HomePage;
