import React, { useEffect, useState } from "react";
<<<<<<< HEAD
import { GoogleMap, Marker } from "@react-google-maps/api";
=======
import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";
>>>>>>> 8c13975... set current location as initial in map component
import { setMap } from "../backend/LogicCalls";

// *******************************
// Purpose: This will be used to only
// display the map
// *******************************
const MapComponent = () => {
<<<<<<< HEAD
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

=======
  const [mapPosition, setMapPosition] = useState({});
  const [activeInfoWindow, setActiveInfoWindow] = useState("");
  const [markers, setMarkers] = useState(initialMarkers);

  useEffect(() => {
    var longitude = window.localStorage.getItem("current_longitude");
    var latitude = window.localStorage.getItem("current_latitude");
    if(longitude && latitude){
      mapPosition = {
        lat: latitude,
        lng: longitude,
      };
    }
  }, []);

  const initialMarkers = [
    {
      position: mapPosition,
      label: { color: "white", text: "P1" },
      draggable: true,
    },
  ];

>>>>>>> 8c13975... set current location as initial in map component
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
