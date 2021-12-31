// Practice using Array.map and Math.random

// Write a function called randomlyCapitalise that takes an array of strings
// and returns a new array with a random 50% chance to transform it to upper case
// e.g. randomlyCapitalise(["hello", "one", "two"]) might return an array ["hello", "ONE", "TWO"]

const randomlyCapitalise = (array) => {
  const result = array.map((string) => {
    if (Math.random() > 0.5) {
      return string.toUpperCase();
    } 
      return string;
  });

  return result;
};

// Test your function with the following code:
console.log(randomlyCapitalise(["what's", "for", "lunch?"]));

// Write a function to add all numbers together

// const addAllNumbers = (array) => {
//   let total = 0;

//   for (let i = 0; i < array.length; i++) {
//     total += array[i];
//   }

//   return total;
// }

// console.log(addAllNumbers([1, 2, 5, 6]));

// // Write a function that doubles a number if it is larger than 5

// const doubleAllNumbers = (array) => {
//   const newArray = array.map(element => {
//     if(element > 5) {
//       return element * 2
//     }
//     return element;
//   })

//   console.log(array) // [1, 2, 5, 6, 8]
//   console.log(newArray) // [1, 2, 5, 6, 8]
// }

// console.log(doubleAllNumbers([1, 2, 5, 6, 8]));