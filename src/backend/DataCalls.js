
export function generateLocations() {
  var locations = [];
  var search_result = JSON.parse(window.localStorage.getItem("search_result"));
  for(var number in generateThreeNumbers(search_result.length)){
      locations.push(search_result[number]);
  }
  return locations;
}

// ********************
//   HELPER FUNCTIONS
// ********************
function generateThreeNumbers(maximum) {
  var numbers = [];
  for (var i = 0; i < 3; i++) {
    var curr_number = Math.floor(Math.random * maximum);
    if (!numbers.includes(curr_number)) {
      numbers.push(curr_number);
    }
  }
  return numbers;
}

function parseLocation(location){
  return location;
}

export function getPlaceId(result){
    return result["place_id"];
}

export function parseData(result){
  return {
    id: result.place_id,
    name: result.name,
    rating: result.rating,
    total_ratings: result.user_ratings_total,
    image: result.photos[0].html_attributions[0],
  }
}