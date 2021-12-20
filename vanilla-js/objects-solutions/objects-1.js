// Objects recap
// Just a recap of how do to basic stuff with objects

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