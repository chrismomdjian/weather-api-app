const weather_information = require("./weather.js");

// Example API call by city name and country code
// api.openweathermap.org/data/2.5/weather?q={city name},{country code}

// By ZIP
// api.openweathermap.org/data/2.5/weather?zip={zipcode},{country code}

var user_city_input = process.argv.slice(2);
var user_city_complete = user_city_input.join(" ");

const city_name = user_city_complete.slice(0, -2).trim(); // Don't leave trailing whitespace at end of city name
const country_code = user_city_complete.slice(-2); // get last two letters to represent country code
console.log(city_name, country_code);

weather_information.get(city_name, country_code);
