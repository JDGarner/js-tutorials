// Given an array of integers your solution should find the smallest integer.

// Create a function called findSmallestInt that takes an array of integers as
// a parameter and returns the smallest integer in that array

const findSmallestInt = array => {
  let smallestInteger = array[0];
  for (let index = 0; index < array.length; index++) {
    if(array[index] < smallestInteger) {
      smallestInteger = array[index]
    }
  }
  return smallestInteger;
}

// Test your function with the following code:
console.log(findSmallestInt([34, 15, 88, 2])) // Should output: 2
console.log(findSmallestInt([34, -345, -1, 100])) // Should output: -345

