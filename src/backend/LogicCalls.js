const google = window.google;

export function setMap(map, center) {
  window.localStorage.setItem("google_map", map);
  window.localStorage.setItem("center_map", center);
  console.log(map,center);
}

export async function nearbySearch() {
  let map = window.localStorage.getItem("google_map");
  let center = window.localStorage.getItem("center_map");
  let service = new google.maps.places.PlacesService(map);

  var request = {
    location: center,
    radius: "100",
    type: ["restaurant"],
  };

  console.log(map, center);

  service.nearbySearch(request, callback);
}


function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
        console.log(results[i]);
    }
  }
}
