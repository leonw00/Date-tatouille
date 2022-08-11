import axios from "axios";

const google = window.google;
let service;
let type_locations = [
  "restaurant",
  "amusement_park",
  "aquarium",
  "art_gallery",
  "bar",
  "bowling_alley",
  "cafe",
  "campground",
  "casino",
  "library",
  "movie_theater",
  "museum",
  "park",
  "shopping_mall",
  "stadium",
  "tourist_attraction",
  "zoo",
];
let detail_fields = [
  "name",
  "geometry",
  "formatted_address",
  "photos",
  "url",
  "business_status",
  "formatted_phone_number",
  "geometry/location",
  "type",
  "website",
  "opening_hours",
];

export function getCurrentLocation() {
  navigator.geolocation.getCurrentPosition(function (position) {
    window.localStorage.setItem("current_latitude", position.coords.latitude);
    window.localStorage.setItem("current_longitude", position.coords.longitude);
  });
}

export function setAutoCompleteLocation(lat, lng) {
  window.localStorage.setItem("center_map", {
    lat: lat,
    lng: lng,
  });
  window.localStorage.setItem("current_latitude", lat);
  window.localStorage.setItem("current_longitude", lng);
}

export function setMap(map, center) {
  window.localStorage.setItem("center_map", JSON.stringify(center));
  service = new google.maps.places.PlacesService(map);
}

export async function nearbySearch() {
  let center = JSON.parse(window.localStorage.getItem("center_map"));

  var request = {
    location: center,
    radius: "100000",
    type: type_locations,
  };

  service.nearbySearch(request, nearbySearchCallback);
}

function nearbySearchCallback(results, status, pagination) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    var result_array = [];
    for (var i = 0; i < results.length; i++) {
      result_array.push(results[i]);
    }
    window.localStorage.setItem("search_result", JSON.stringify(result_array));
    console.log(result_array);
  }
}

export async function placeDetails(placeId) {
  var request = {
    placeId: placeId,
    fields: detail_fields,
  };

  return service.getDetails(request, (place, status) => {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
    }
  });
}

export async function nearbyEvents() {
  // using geoip (not lon and lat)
  var config = {
    method: "get",
    url: "https://api.seatgeek.com/2/events?client_id=Mjc1OTY3MzZ8MTY1NjExNzY5OS44OTIyNDkz&geoip=98.213.245.205&range=15km",
    headers: {},
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
}

export async function eventDetails(eventId) {
  var config = {
    method: "get",
    url: "https://api.seatgeek.com/2/events/" + eventId,
    headers: {},
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
}
