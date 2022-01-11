// Create a function called checkEntryToClubGroupOfThree that takes 3 parameters:
// ageOne, ageTwo, ageThree

// Return the number of ages above 18
// e.g. if ageOne, ageTwo and ageThree are more than 18, return 3
// if just two of the ages are above 18, return 2. etc

// const checkEntryToClubGroupOfThree = (ageOne, ageTwo, ageThree) => {
//   const ages = [ageOne, ageTwo, ageThree];
//   const everyoneAbove18 = ages.filter(age => {
//     return age >= 18;
//   })
//   return everyoneAbove18.length
// }



// Use the following code to check your function:
// console.log(checkEntryToClubGroupOfThree(15, 30, 16))
// console.log(checkEntryToClubGroupOfThree(25, 30, 6))
// console.log(checkEntryToClubGroupOfThree(2, 1, 6))

// Part 2:
// Create a function takes an array of ages as a parameter
// and returns the number of those ages above 18

const checkEntryToClubWithArray = array => {
  const everyoneAbove18 = array.filter(age => {
    return age >= 18
  })
  return everyoneAbove18.length
}


// Use the following code to check your function:
console.log(checkEntryToClubWithArray([5, 90, 56, 21, 18, 16, 20]));
