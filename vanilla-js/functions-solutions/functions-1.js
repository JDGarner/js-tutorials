// Complete this function called addLength that takes a string as a parameter
// and returns an array containing each word in the string and its length separated by a space

const addLength = myCoolStringParameter => {
  const newArray = myCoolStringParameter.split(" ")
  return newArray.map(item => `${item} ${item.length}`)
}

console.log(addLength("apple ban"))

// Hint:
// If you're unsure where to start, try to break the problem down into steps:
// 1 - Split the string into an array containing each word
// 2 - Modify the array to add the length of the string to each string in the array


// Test your function with the following code:
// console.log(addLength('apple ban')) // => ["apple 5", "ban 3"]
// console.log(addLength('you will win')) // => ["you 3", "will 4", "win 3"]