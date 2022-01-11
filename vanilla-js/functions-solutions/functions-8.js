// Practice using Array.map and Math.random

// Write a function called randomlyCapitalise that takes an array of strings
// and returns a new array with a random 50% chance to transform it to upper case
// e.g. randomlyCapitalise(["hello", "one", "two"]) might return an array ["hello", "ONE", "TWO"]

// const randomlyCapitalise = array => {
//   return array.map(item => {
//     if(Math.random() > 0.5) {
//       return item.toUpperCase()
//     } else {
//       return item;
//     }
//   })
// }


// Test your function with the following code:
// console.log(randomlyCapitalise(["what's", "for", "lunch?"]));

// Write a function to add all numbers together

// const addAllNumbers = array => {
//   let result = 0;
//   for (let index = 0; index < array.length; index++) {
//     result += array[index];
//   }
//   return result;
// }


// console.log(addAllNumbers([1, 2, 5, 6]));


// // Write a function that doubles a number if it is larger than 5

const doubleAllNumbers = array => {
  return array.map(number => {
    if(number > 5) {
      return number * 2
    }

    return number
  }) 
}




console.log(doubleAllNumbers([1, 2, 5, 6, 8]));

