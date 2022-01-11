// -------------------------------
// JS Cheat Sheet
// -------------------------------


// -------------------------------
// Creating variables
// -------------------------------

// let (can be changed)
let myName = "Sponge"
myName = "Alfonso"

// const (cannot be changed)
const myAge = 28
myAge = 92 // Would throw an error


// -------------------------------
// Operators
// -------------------------------

// Math Operators:
// +, -, /, *, %, +=, -=, ++, --

// % is the modulus operator, it returns the remainder after a division, e.g:
9 % 3 // Is 0 because 9 divided by 3 is 3 remainder 0
10 % 3 // Is 1 because 10 divided by 3 is 3 remainder 1
11 % 3 // Is 2 because 11 divided by 3 is 3 remainder 2

// Comparison Operators:
// >, <, >=, <=, ===, !==

// Logical/Boolean Operators:
// &&, ||, !,



// -------------------------------
// Strings
// -------------------------------

// String.split
// - Turns a string into an array, each element is split by the given string
// Example:
console.log("1==2==3==4".split("=="))
// Outputs => ["1", "2", "3", "4"]

// String.toUpperCase
// - Turns a string into uppercase
// Example:
console.log("Hello".toUpperCase())
// Outputs => "HELLO"

// String.substring
// - Gets part of a string, by given start and end indexes
// Example:
console.log("Hello".substring(1, 3))
// Outputs => "el"


// -------------------------------
// Math
// -------------------------------

// Math.random
// - Returns a random number between 0 and 1

// Math.floor
// - Rounds number down to the nearest whole number (integer)


// -------------------------------
// Arrays
// -------------------------------

// Creating an array
const friends = ["Labut", "Flabens", "Alberto"]

// Array.length
// - Get the number of elements in the array
console.log(friends.length) // Would output 3

// Array.push
// - Add to an array
friends.push("Flipso")
console.log(friends) // Would output ["Labut", "Flabens", "Alberto", "Flipso"]

// Array.pop
// - Remove the last element from an array
friends.pop()
console.log(friends) // Would output ["Labut", "Flabens", "Alberto"]

// Array.includes
// - Check if something exists in the array
console.log(friends.includes("Labut")) // Would output true
console.log(friends.includes("Arbo")) // Would output false

// Array.join
// - Turn an array into a string:
console.log(friends.split(" ")) // Would output "Labut Flabens Alberto"
console.log(friends.split("_")) // Would output "Labut_Flabens_Alberto"

// Array.map
// - Return a new array based on the original but where each element
// is modified in some way
const uppercaseFriends = friends.map(friend => {
  return friend.toUpperCase();
});
console.log(uppercaseFriends) // Would output ["LABUT", "FLABENS", "ALBERTO"]


// Array.filter
// - Return a new array based on the original but where you remove any elements
// that don't match a particular condition
const filteredFriends = friends.filter(friend => {
  return friend.length > 6;
});
console.log(filteredFriends) // Would output ["Flabens", "Alberto"]


// Note:
// Array.filter and Array.map both return new arrays but DON'T alter/edit the
// original array
// So after the filter function above, the friends array would still be the same
console.log(friends) // Would output ["Labut", "Flabens", "Alberto"]
// Whereas Array.push and Array.pop but DO alter/edit the
// original array



// -------------------------------
// Functions
// -------------------------------

const addTwoNumbers = (a, b) => {
  return a + b;
}

// See functions-refresher.js for more stuff on functions



// -------------------------------
// Objects
// -------------------------------

// (copied from objects/objects-1.js) :)

// Creating an object:
const user = {
  firstName: "Basko",
  lastName: "Jones",
  age: 27,
};

// Adding new properties to an object:
user.email = "basko@gmail.com";
user.middleName = "Dominique";
user.gender = "male";

// Editing properties:
user.age = 29;
user.firstName = "Baskoot"

console.log("user: ", user)


// Objects are made up of 'keys' and 'values'
const userTwo = {
  firstName: "Fister", // Here firstName is the 'key' and 'Fister' is the value
  lastName: "Pacs", // Here lastName is the 'key' and 'Pacs' is the value
}
// The key and value together are known as a 'property', so:
// firstName: "Fister"
// would be a property of userTwo


// One final example, the values of object properties can also be variables, like this:
const myName = "Sebens"
const myLastName = "Felb"

const me = {
  firstName: myName,
  lastName: myLastName,
}



// -------------------------------
// Checking for missing / undefined values on objects:

// Often it's useful to be able to see if some value is present on an object
// for example, to check if an item has any discount:
const itemOne = {
  name: "socks",
  price: 10,
  discount: 0.8
}

const itemTwo = {
  name: "muffin",
  price: 2,
}

console.log(itemOne.discount) // would output 0.8
console.log(itemTwo.discount) // would output undefined

// If we want to run some code only if an item has a discount we could do this:
if (itemOne.discount) {
  console.log('Item one has a discount');
}

if (itemTwo.discount) {
  console.log('Item two has a discount');
  // ^ This console.log would never run because itemTwo.discount is undefined
}





// -------------------------------
// Nested objects:

// Sometimes objects are used to store collections of things instead of arrays
// Like a bunch of items in a store:
// The key of object is some kind of unique id for the item
const items = {
  cx957b: {
    name: "table",
    price: 20
  },
  os638c: {
    name: "hat",
    price: 12
  }
}

// Object.keys:
// - Gets an array containing all the keys of an object, e.g:
console.log(Object.keys(items)) // would output ["cx957b", "os638c"]

// Object.values:
// - Gets an array containing all the values of an object, e.g:
console.log(Object.values(items))
// would output:
// [
//   {
//     name: "table",
//     price: 20
//   },
//   {
//     name: "hat",
//     price: 12
//   }
// ]
