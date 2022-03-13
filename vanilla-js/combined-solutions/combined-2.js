// Practice using Array.map and Math.random

// Write a function called randomlyCapitalise that takes an array of strings
// and returns a new array with a random 50% chance to transform it to upper case
// e.g. randomlyCapitalise(["hello", "one", "two"]) might return an array ["hello", "ONE", "TWO"]

const randomlyCapitalise = (myArray) => {
  return myArray.map(word => {
    if(Math.random() > 0.5) {
      return word.toUpperCase()
    }
    return word;
  })
};

// Test your function with the following code:
console.log(randomlyCapitalise(["what's", "for", "lunch?"]))