import React, { useState } from "react";
import {
  GoogleMap,
  InfoWindow,
  Marker,
} from "@react-google-maps/api";
import { setMap } from "../backend/LogicCalls";

// *******************************
// Purpose: This will be used to only
// display the map
// *******************************
const MapComponent = () => {
  const initialMarkers = [
    {
      position: {
        lat: -33.8665433,
        lng: 151.1956316,
      },
      label: { color: "white", text: "P1" },
      draggable: true,
    },
  ];

  const [activeInfoWindow, setActiveInfoWindow] = useState("");
  const [markers, setMarkers] = useState(initialMarkers);

  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: -33.8665433,
    lng: 151.1956316,
  };

  return (
    <div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        onLoad={(map) => {
          setMap(map, center);
        }}
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            position={marker.position}
            label={marker.label}
            draggable={marker.draggable}
          >
            {activeInfoWindow === index && (
              <InfoWindow position={marker.position}>
                <b>
                  {marker.position.lat}, {marker.position.lng}
                </b>
              </InfoWindow>
            )}
          </Marker>
        ))}
      </GoogleMap>
    </div>
  );
};

export default MapComponent;
