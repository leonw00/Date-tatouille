import { nearbySearch } from "../../backend/MapCalls";
import MapComponent from "../../components/MapComponent";
import "./HomePage.css";

function HomePage() {

  return (
    <div>
      <form>
        <input placeholder="your location" type="text" />
        <input placeholder="distance from your location" type="text" />
        <input name="Submit" type="submit" />
      </form>
      <MapComponent/>
      <button onClick={()=>{nearbySearch()}}>TEST</button>
    </div>
  );
}

export default HomePage;
