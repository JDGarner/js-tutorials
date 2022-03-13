// Practice using Array.filter with an array of objects

// Write a function called getPeopleWithLongFirstNames that takes an array of objects
// and returns a new array that contains just the objects with a firstName that
// has a length of more than 10 letters.

// e.g. getPeopleWithLongFirstNames(people) would return the array:
// [
//   {
//     firstName: 'Helfocreamerslabens',
//     lastName: 'Geiger'
//   },
//   {
//     firstName: 'Steameroonieclubko',
//     lastName: 'Deckins'
//   },
// ];

const getPeopleWithLongFirstNames = (myArray) => {
  return myArray.filter(person => person.firstName.length > 10)
};

const people = [
  {
    firstName: 'Helfocreamerslabens',
    lastName: 'Geiger'
  },
  {
    firstName: 'Steameroonieclubko',
    lastName: 'Deckins'
  },
  {
    firstName: 'Ninto',
    lastName: 'Switchins'
  },
  { firstName: 'Stitcho',
    lastName: 'Deckons'
  },
];

// Test your function with the following code:
console.log(getPeopleWithLongFirstNames(people))