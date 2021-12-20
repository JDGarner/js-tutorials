const countries = ["Canada", "Germany", "Japan", "United Kingdom", "Australia", "Luxembourg", "Austria"];

// Challenge 1:
// Using Array.filter
// Remove any country from the list that isn't United Kingdom OR Luxembourg
// console.log the result

const UKAndLuxembourg = countries.filter(country => country === "Luxembourg" || country === "United Kingdom")

console.log(UKAndLuxembourg)

// Challenge 2:
// Do the same as above but using a regular for loop ( and note how much more painful it is this way :) )

let UKAndLuxembourg = [];

for (let index = 0; index < countries.length; index++) {
  if(countries[index] === "Luxembourg" || countries[index] === "United Kingdom") {
    UKAndLuxembourg.push(countries[index])
  }
}

console.log(UKAndLuxembourg);