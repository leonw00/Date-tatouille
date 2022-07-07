import React, { useEffect, useState } from "react";
import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";
import { setMap } from "../backend/LogicCalls";

// *******************************
// Purpose: This will be used to only
// display the map
// *******************************
const MapComponent = () => {
  const [mapPosition, setMapPosition] = useState({
    lat: -33.8665433,
    lng: 151.1956316,
  });
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

  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  return (
    <div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={mapPosition}
        zoom={15}
        onLoad={(map) => {
          setMap(map, mapPosition);
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
