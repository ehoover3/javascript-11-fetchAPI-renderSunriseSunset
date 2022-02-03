// SELECTORS
let textDiv = document.querySelector("#text");

// DATA
let latitude = 5;
let longitude = 20;

// FUNCTION
// 1. fetch data from API using the latitude and longitude values
async function getSunriseSunset() {
  // 1a. In the below https link, '?' indicates the start of a query search,
  //     where the query searches the key value pairs of 'lat={$latitude}' and 'lng=${longitude}'

  // 1b. response will equal data from the API in a JSON format
  let response = await fetch(
    `https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}`
  );

  // 1c. data will convert response data with the .json() method into usable data
  let data = await response.json();

  // 2. set usable data to the textDiv's innerHTML
  textDiv.innerHTML = `
  <p>For latitude ${latitude} and longitude ${longitude}:</p>
  <p>Sunrise is at ${data.results.sunrise}</p>
  <p>Sunset is at ${data.results.sunset}</p>
  `;
}

// RUN THE FUNCTION
getSunriseSunset();
