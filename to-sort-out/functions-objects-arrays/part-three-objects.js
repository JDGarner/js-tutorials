// Welcome... to part 3

// You can also have arrays of objects
// These are used a lot in web applications
// Here's an example:

const recipes = [
  {
    name: "Onion Squash Soup",
    ingredients: ["Onion Squash", "Carrot", "Turnip", "Leek", "Ginger"]
  },
  {
    name: "African Peanut Stew",
    ingredients: ["Onion", "Tomato Puree", "Suede", "Peanut Butter", "Ginger"]
  },
]

// 1a)
// Write a function that takes a string (nameOfRecipe) and an array (ingredients)
// creates an object from those parameters and pushes it onto the recipes array
// Hint - look back to part 2 at the user object for how to create a new object


// 1b)
// Test your function with the following code:
// addRecipe("Tofu Stir Fry", ["Tofu", "Broccoli", "Bell Pepper"])
// console.log(recipes)


// 1c)
// What is this function doing?
// Rename it and the parameter with more appropriate names after you find out
const mysteryFunction = (someParameter) => {
  return recipes.filter(recipe => {
    return recipe.includes(someParameter)
  })
}


// 1d)
// Use Array.find to write a function called findRecipe that takes the name of the
// recipe as a parameter and returns the recipe object with that name
// e.g:
// const onionSquashSoup = findRecipe("Onion Squash Soup")
// console.log(onionSquashSoup) // should output:
// {
//   name: "Onion Squash Soup",
//   ingredients: ["Onion Squash", "Carrot", "Turnip", "Leek", "Ginger"]
// }



// Let me know if/when you get here
