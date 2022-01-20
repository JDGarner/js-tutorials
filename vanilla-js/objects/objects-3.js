// Nested objects

// Here's an example of weather data that might be returned from a weather API:
// It is an object that contains other objects
// The 'current' object is nested inside weatherData and
// the 'details' object is nested inside the 'current' object
const weatherData = {
  lat: 60.99,
  lon: 30.9,
  timezone: "Europe/Moscow",
  current: {
    dt: 1586468027,
    sunrise: 1586487424,
    sunset: 1586538297,
    temp: 274.31,
    feels_like: 269.79,
    wind_speed: 3,
    details: {
      main: "Clear",
      description: "Clear sky",
    }
  }
}

// Here's how to access values in nested objects:
const description = weatherData.current.details.description;
console.log(description) // This will output "Clear sky"

// 1a) Console.log the value of feels_like:


// 1b) Console.log the entire details object:

// 1c) Write a function called isItWindy that returns true if the value of the
// wind_speed is more than 5 and otherwise returns false


// 1d) Write a function called getLatAndLon that returns an array
// containing the values of the lat and lon properties of weatherData
// e.g if lat is 3 and lon is 4 it would return [3, 4]

// 1e) Write a function called getLatAndLonAndLogInfo
// if the lat AND lon are more than 40, console.log "More than 40", otherwise log out "Less than 40"
// and then return an array containing the values of the lat and lon properties of weatherData
// e.g if lat is 3 and lon is 4 it would return [3, 4]

// 1f) Write a function called getInfoAboutLatAndLon
// if the lat AND lon are more than 40:
// return the string "More than 40", otherwise return the string "Less than 40"
// e.g if lat is 67 and lon is 54 it would return "More than 40"





