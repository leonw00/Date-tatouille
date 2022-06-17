const google = window.google;
let service;

export function setMap(map, center) {
  window.localStorage.setItem("center_map", JSON.stringify(center));
  service = new google.maps.places.PlacesService(map);
}

export async function nearbySearch() {
  let center = JSON.parse(window.localStorage.getItem("center_map"));

  var request = {
    location: center,
    radius: "100000",
    type: ["restaurant"],
  };

  service.nearbySearch(request, callback);
}

function callback(results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      console.log(results[i]);
    }
  }
}
