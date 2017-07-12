const weather_information = require("./weather.js");

// Example API call by city name and country code
// api.openweathermap.org/data/2.5/weather?q={city name},{country code}

// By ZIP
// api.openweathermap.org/data/2.5/weather?zip={zipcode},{country code}

var user_city_input = process.argv.slice(2);
var user_city_complete = user_city_input.join(" ");

const city_name = user_city_complete;
const country_code = "us";

weather_information.get(city_name, country_code);
