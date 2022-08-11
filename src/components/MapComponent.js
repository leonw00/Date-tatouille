import React, { useEffect, useState } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { setMap } from "../backend/LogicCalls";

// *******************************
// Purpose: This will be used to only
// display the map
// *******************************
const MapComponent = (lat, lng) => {
  var [mapPosition, setMapPosition] = useState({
    lat: -33.8665433,
    lng: 151.1956316,
  });


  useEffect(() => {
    var longitude = window.localStorage.getItem("current_longitude");
    var latitude = window.localStorage.getItem("current_latitude");
    console.log(longitude + " " + latitude);
    if (longitude && latitude) {
      setMapPosition({
        lat: parseFloat(latitude),
        lng: parseFloat(longitude),
      });
    }
  }, []);

  const containerStyle = {
    width: "100%",
    height: "100%",
  };

  return (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={mapPosition}
        zoom={15}
        onLoad={(map) => {
          setMap(map, mapPosition);
        }}
      >
        <Marker
          position={mapPosition}
          label={{ color: "white", text: "P1" }}
          draggable={true}
        ></Marker>
      </GoogleMap>
  );
};

export default MapComponent;
