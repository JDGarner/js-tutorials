// -------------------------------
// Functions
// -------------------------------

// Functions usually take parameters and return something, e.g:
const getArrayLength = (array) => {
  return array.length;
}

// To use this function I could do:
const friends = ["Balek", "Walek", "Stubs"]
const numberOfFriends = getArrayLength(friends);
console.log(numberOfFriends) // Would output 3

// Or also:
console.log(getArrayLength(friends)) // Would also output 3


// The return statement ends the execution of the function
const myLameFunction = (array) => {
  return 17;

  console.log('Hello?');
  console.log('Hello?????????????????');

  return array.length;
};

// myLameFunction always returns 17, none of the code after the return statement runs
// because the function execution has already ended


// Some functions don't return anything
// Usually these functions will edit some variable that exists outside their 'scope'
// E.g:
const todos = ["Wash stuff", "Play God of War"];

const addTodo = (todoDescription) => {
  todos.push(todoDescription);
};

// So if we did:
const result = addTodo("Bask in sun")
console.log(result) // Would output undefined
console.log(todos) // Would output ["Wash stuff", "Play God of War", "Bask in sun"]

