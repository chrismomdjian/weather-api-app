const https = require("https");
const http = require("http");

const API_KEY = "example_key";
var user_city_input = process.argv.slice(2);
var user_city_complete = user_city_input.join(" ");

const city_name = user_city_complete;
const country_code = "us";

// Example API call by city name and country code
// api.openweathermap.org/data/2.5/weather?q={city name},{country code}

// By ZIP
// api.openweathermap.org/data/2.5/weather?zip={zipcode},{country code}

function printMessage(city, country, degrees_fahrenheit) {
  console.log(`The weather in ${city}, ${country} is ${degrees_fahrenheit}.`);
}

const request = http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city_name},${country_code}&units=imperial&APPID=${API_KEY}`, (response) => {
    var body = "";

    response.on("data", (data) => {
      body += data.toString();
    });

    response.on("end", () => {
      var parsed = JSON.parse(body);
      var temperature = parsed.main.temp;
      printMessage(city_name, country_code, temperature);
    });
  });


request.on("error", (error) => {
  console.error(error.message);
});
