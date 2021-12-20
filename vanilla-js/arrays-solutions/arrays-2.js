const names = ["Maeko", "BistroCream", "Boby", "Alko", "Scabenchino", "Webler", "Sacrimentonos"]
namesWithLessThan7Characters = []

// Using Array.forEach
// print to the console an array containing only the names with
// less than 7 characters in their name

names.forEach(element => {
  if(element.length < 7) {
    namesWithLessThan7Characters.push(element)
  }
});

console.log(namesWithLessThan7Characters);