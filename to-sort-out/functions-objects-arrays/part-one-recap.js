// Lil bit of recap before we do anything with objects

// 1a)
// Write a function called getLargestInt that takes an array of numbers
// and returns the largest integer in that array

// 1b)
// Test your function with the following code:
console.log(getLargestInt([8, 21, -10, 99])) // should output 99

const largestInt = getLargestInt([-18, -5, -72, -107]);
console.log(largestInt) // should output -5

// ^ notice the two different ways of using the function
// console.logging the return value immediately vs storing the return value
// in a variable and then logging that variable.
// Both are fine :)


// 2a)
// Write a function called getLongestString that takes an array of strings
// and returns the longest string in that array


// 2b)
// Uncomment this and test your function with the following code:
// console.log(getLongestString(["Pipi", "Hello World", "Skibbidy Wap Wap Ice"])) // should output "Skibbidy Wap Wap Ice"


// 3a)
// Practice using Array.map and Math.random
// Write a function called randomlyCapitalise that takes an array of strings
// and returns a new array with a random 50% chance to transform it to upper case
// e.g. randomlyCapitalise(["hello", "one", "two"]) // might return an array ["hello", "ONE", "TWO"]


// 3b)
// Uncomment this and test your function with the following code:
// console.log(randomlyCapitalise(["i", "am", "watching", "you"]))


// 4a)
const podcasts = ["The Economist", "BBC", "Tech Tent"]
// Write a function called addPodcast that takes a string and adds it to the podcasts array


// 4b)
// Before you check the console, what would get logged out when running the code below?:
// console.log(addPodcast("The Take"))
// console.log(podcasts)


// Fini
// Go into your index.html and comment out the <script src="./part-one-recap.js">
// Then uncomment the <script src="./part-two-objects.js"> to start the next part :)