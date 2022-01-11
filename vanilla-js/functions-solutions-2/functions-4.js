// Write a function called check that takes two parameters:
// 1 - an array (that could contain numbers or strings)
// 2 - another variable that could be a number or a string
// And returns true if the array contains the value, false if not.

// Can you write the function with just one line of code?

const check = (array, value) => {
  if (array.includes(value)) {
    return true;
  } else {
    return false;
  }
};

// Check your function with the following code:

console.log(check([1, 2, 3], 3)); // Should output true
console.log(check([1, 2, 3], 7)); // Should output false
console.log(check(["ok", "table", "bleep"], "bleep")); // Should output true
console.log(check(["eggs", "scrambled", "why"], "bleep")); // Should output false
console.log(check([1, "scrambled", "why"], 1)); // Should output true
