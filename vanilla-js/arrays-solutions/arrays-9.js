// Use Array.map to create a new array called twoNamePeople
// that adds a random last name to each person in coolPeople
// Use the helper function below to generate a random last name for each cool person.
// e.g. ["Blake Screebles", "Flake Pisser", etc]
// Hint - make sure to call generateRandomName() inside your map function so that each person has a new random last name

const coolPeople = ["Blake", "Flake", "Blepo", "Weasler", "Screbs"]

//---------------------------------------------------------------------------
// Helper function
const generateRandomName = () => {
  const randomLastNames = ["Fletcher", "Screebles", "Flub", "Pisser", "Francinete", "Schwansinete", "Dirt", "Socky"]
  const randomIndex = Math.floor(Math.random() * randomLastNames.length);
  return randomLastNames[randomIndex];
}
//---------------------------------------------------------------------------


const twoNamePeople = coolPeople.map(name => `${name} ${generateRandomName()}`)

console.log(twoNamePeople)

