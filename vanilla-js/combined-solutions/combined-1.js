// Practice using Array.map

// Write a function called capitaliseFirstLetter that takes an array of strings
// and returns a new array with the first letter of each of the strings in upper case
// e.g. randomlyCapitalise(["hello", "one", "two"]) would return ["Hello", "One", "Two"]

const capitaliseFirstLetter = (myArray) => {
  return myArray.map(word => word.charAt(0).toUpperCase() + word.slice(1));
};

// Test your function with the following code:
console.log(capitaliseFirstLetter(["what's", "for", "lunch?"]))