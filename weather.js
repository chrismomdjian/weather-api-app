const https = require("https");
const http = require("http");

const API_KEY = "example_key";

function printMessage(city, country, degrees_fahrenheit) {
  console.log(`The weather in ${city}, ${country} is ${degrees_fahrenheit}F.`);
}

function get(city_name, country_code) {
  try {
    const request = http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city_name},${country_code}&units=imperial&APPID=${API_KEY}`, (response) => {
        var body = "";

        response.on("data", (data) => {
          body += data.toString();
        });

        response.on("end", () => {
          var parsed = JSON.parse(body);
          if (parsed.name != undefined) {
            var temperature = parsed.main.temp;
            printMessage(city_name, country_code, temperature);
          } else {
            console.log(`The location '${city_name}' was not found.`);
            console.log(parsed.name);
          }
        });
      });


    request.on("error", (error) => {
      console.error(error.message);
    });
  } catch (error) {
    console.log(error.message);
  }
}

module.exports.get = get; // Allow other files to require this one
