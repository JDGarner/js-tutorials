//​​ Write a function called gooseFilter that takes an array of strings as an argument
// and returns a filtered array containing the same elements but with the 'geese' removed.

const gooseFilter = (birds) => {
  const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  const birdResult = birds.filter(birdName => geese.includes(birdName))
  console.log(birdResult);
  return birdResult;
};
