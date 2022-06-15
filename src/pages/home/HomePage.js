import { useEffect } from "react";
import "./HomePage.css";

function HomePage() {

  useEffect(() => {
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
