export const getRandomIndex = (wordData) => {
  return Math.floor(Math.random() * wordData.length);
};

export const capitaliseFirstLetter = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};
