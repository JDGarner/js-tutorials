// Welcome

// Objects are basically just collections of variables (called properties when they are part of
// an object).

// Here is an object called user:
const user = {
  firstName: "Basko",
  lastName: "Jones",
  age: 27,
};

// it has three properties; firstName, lastName and age

// 1a)
// Have a guess what would be logged out with the following code:
// (I've made them using template literals so it's easier to see what is what in the console)
console.log(`user.firstName: ${user.firstName}`)
console.log(`user.email: ${user.email}`)
user.email = "basko@gmail.com";
console.log(`user.email: ${user.email}`)


// 1b)
// Add middleName and gender properties to the user object
// then log them out to the console


// 1c)
// Uncomment the following code and see what gets logged to the console:
// console.log(`user: ${user}`)

// ...logging out the whole object is pretty useful if you want to see everything that's in there :)


// 1d) - Nested objects. Objects can contain other objects.
// Add a bestFriend object with some properties of your choosing to the user object:
// You can uncomment this to start you off:
// user.bestFriend = {
//   // Add some properties in here, including firstName
// };

// Now do console.log(user.bestFriend.firstName) to make sure it worked


// 2) - Bracket Notation
// So far we've used 'dot notation' to set or get object properties.
// You can also use 'bracket notation', here are a couple of examples:
// Uncomment this to check it logs the right thing:
console.log(user["firstName"])
console.log(user["bestFriend"]["firstName"])

// That is basically the same as:
// console.log(user.firstName)
// console.log(user.bestFriend.firstName)

// What's the point in bracket notation?
// Let's say in your app, your user can set a preference, if they want to be called by
// their first or last name. So maybe you have a variable:
let namePreference = "firstName"

// And a function:
const getUsersPreferredName = () => {
  return user[namePreference];
}

// if namePreference is "firstName", this function would return user["firstName"]
// So bracket notation is useful if you want to access properties using a variable
// For example:

// Create a function called setNamePreference that takes a string as a parameter and
// changes namePreference to that string:

// Test your function with the following code:
// console.log(getUsersPreferredName()) // should log out "Basko"
// setNamePreference("lastName")
// console.log(getUsersPreferredName()) // should log out "Jones"

// Explain in English everything that happened in the 3 lines of code above:
// <your explanation here>


// We couldn't do this with dot notation because:
// user.namePreference trys to access a property called 'namePreference' on the user object
// there isn't any property with this name so it returns undefined.
// Whereas:
// user[namePreference] gets namePreference variable which might equal the string "firstName"
// then returns the firstName property of the user object "Basko"

// ^ This kind of thing comes up fairly often but most of the time you can use dot notation
// Only use bracket notation if you have to, but don't worry about knowing when you need to
// use it just yet, just make sure you understand what happens in the code above.




// continues on part 3, make sure to comment/uncomment the appropriate files in index.html