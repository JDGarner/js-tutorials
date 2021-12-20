const names = ["Maeko", "Bistro", "Boby", "Alko"]
let result = []

// Using a regular for loop print to the following to the console:
// "MAEKO and BISTRO and BOBY and ALKO"

for (let index = 0; index < names.length; index++) {
  result.push(names[index].toUpperCase())
} 

console.log(result.join(' and '));
