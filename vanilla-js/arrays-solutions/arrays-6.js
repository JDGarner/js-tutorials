const countries = [
  "Canada",
  "Germany",
  "Japan",
  "United Kingdom",
  "Australia",
  "Luxembourg",
  "Austria",
  "Argentina",
  "Algeria",
  "Sudan",
  "Ukraine"
]

// Challenge 1:
// Using the Array.filter function
// Remove any country from the list that doesn't start with an A
// Print the resulting array to the console

const countryStartingWithA = countries.filter(country => country.startsWith('A'))

// console.log(countryStartingWithA);

// Challenge 2:
// Using your new array from Challenge 1:
// If there are more than 3 countries that start with A,
// print 'There are more than 3!', else print 'There are not more than 3! :('

if(countryStartingWithA.length > 3) {
  console.log('There are more than 3!')
} else {
  console.log('There are no more than 3! :(')
}


