//​​ Write a function called gooseFilter that takes an array of strings as an argument
// and returns a new array containing the same elements but with the 'geese' removed.
// 'geese' being any strings in the array called geese.

const gooseFilter = (birds) => {

};

// Test your function with the following code:

const resultOne = gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]);
console.log("Result One: ", resultOne);
// Should output: ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]);

const resultTwo = gooseFilter(["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]);
console.log("Result Two: ", resultTwo);
// Should output: ["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]

gooseFilter(["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]);
// Should output: []
console.log("Result Three: ", resultThree);