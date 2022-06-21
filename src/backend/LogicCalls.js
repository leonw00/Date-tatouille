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
  "night_club",
  "park",
  "shopping_mall",
  "stadium",
  "tourist_attraction",
  "zoo",
];
let getNextPage; // function to get the next page of results

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

  // UNTESTED: pagination
  if (pagination && pagination.hasNextPage) {
    getNextPage = () => {
      pagination.nextPage();
    };
  }
}
