// SELECTORS
let textDiv = document.querySelector("#text");
let latitudeDiv = document.getElementById("latitude");
let longitudeDiv = document.getElementById("longitude");

// DATA
let latitude;
let longitude;

// FUNCTION
async function getSunriseAndSunset() {
  // 1. update variables to form input values
  latitude = latitudeDiv.value;
  longitude = longitudeDiv.value;

  // 2. fetch data from API using the latitude and longitude values
  let response = await fetch(
    `https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}`
  ); // response will equal data from the API in a JSON format
  let data = await response.json(); // data will convert response data with the .json() method into usable data

  // 3. set usable data to the textDiv's innerHTML
  textDiv.innerHTML = `
  <p>For latitude ${latitude} and longitude ${longitude}:</p>
  <p>Sunrise is at ${data.results.sunrise}</p>
  <p>Sunset is at ${data.results.sunset}</p>
  `;
}

// EVENT LISTENERS
btn.addEventListener("click", () => {
  getSunriseAndSunset(); // make a new fetch call that updates img
});
