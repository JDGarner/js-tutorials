const names = ["Maeko", "BistroCream", "Boby", "Alko", "Scabenchino", "Webler", "Sacrimentonos"]

// Using Array.filter
// print to the console an array containing only the names with
// less than 7 characters in their name

const result = names.filter(name => name.length < 7);

console.log(result);