import { useEffect } from "react";
import "./HomePage.css";

const google = window.google;

function HomePage() {

  useEffect(() => {
    const sydney = new google.maps.LatLng(-33.867, 151.195);
    console.log("TESTING");
  }, []);

  return (
    <div>
      <form>
        <input placeholder="your location" type="text" />
        <input placeholder="distance from your location" type="text" />
        <input name="Submit" type="submit"/>
      </form>
    </div>
  );
}

export default HomePage;
