const ages = [18, 93, 10, 27, 33, 96, 45, 71, 34, 61, 25, 29];

const agesBetween20And40 = ages.filter((age) => age > 20 && age < 40);

console.log(agesBetween20And40);

// Using Array.filter
// Create a new array called agesBetween20And40 that contains only the ages that are
// more than 20 and less than 40, then console.log the new array
