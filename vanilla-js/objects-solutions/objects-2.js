// Arrays of objects

// Here is an array called recipes in which each element of the array is an object:
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
// Hint - look back to objects-1 for how create a new object using variables

const addRecipe = (nameOfRecipe, ingredientsArray) => {
  const newRecipes = {
    name: nameOfRecipe,
    ingredients: ingredientsArray,
  }
  recipes.push(newRecipes)
}

// Test your function with the following code:
addRecipe("Tofu Stir Fry", ["Tofu", "Broccoli", "Bell Pepper"])
console.log(recipes)


// 1b)
// Write a function called filterRecipesByIngredient that takes a string called ingredient
// as a parameter and returns an array of all the recipes in recipes that contain
// that ingredient

const filterRecipesByIngredient = ingredient => {
  return recipes.filter(recipe => {
    return recipe.ingredients.includes(ingredient)
  })
}

// Test your function with the following code:
// const recipesWithGinger = filterRecipesByIngredient("Ginger")
// console.log(recipesWithGinger);


// 1c)
// Use Array.find to write a function called findRecipe that takes the name of the
// recipe as a parameter and returns the recipe object with that name
// e.g:
// const onionSquashSoup = findRecipe("Onion Squash Soup")
// console.log(onionSquashSoup) // should output:
// {
//   name: "Onion Squash Soup",
//   ingredients: ["Onion Squash", "Carrot", "Turnip", "Leek", "Ginger"]
// }

const findRecipe = recipeName => {
  
}

// Test your function with the following code:
// console.log(findRecipe("Onion Squash Soup"))
