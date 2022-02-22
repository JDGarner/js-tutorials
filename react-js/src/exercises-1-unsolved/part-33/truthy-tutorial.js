/* eslint-disable no-constant-condition */
// ^ ignore this line

// In JavaScript, variables are either 'truthy' or 'falsy'.

// The falsy variables are:
// undefined, null, NaN, 0, "" (empty string), and false.
// NaN is another special value it means 'Not A Number'

// Everything else is truthy, e.g:
// - A number that isn't 0
// - A non empty string: "hello world"
// - An empty array: []
// - An array with stuff in it: [1, 2, 3]
// - An empty object: {}
// - An object with stuff in it: { name: 'Belcho' }

// When you do an if statement, if the condition is 'truthy'
// then the body of the if statement will run, e.g:

if (67) {
  console.log('this code will run');
}

if ([]) {
  console.log('this code will run');
}

const names = [];

if (names) {
  console.log('this code will run');
}

// If the condition is 'falsy'
// then the body of the if statement will not run, e.g:

if (null) {
  console.log('this code will not run');
}

const myCountry = null;

if (myCountry) {
  console.log('this code will not run');
}

// It works the same for ternary statements:

const resultOne = myCountry ? 'myCountry is truthy' : 'myCountry is falsy';

// resultOne will be 'myCountry is falsy' because myCountry is null

const myCountry2 = { name: 'Luxembourg' };

const resultTwo = myCountry2 ? 'myCountry is truthy' : 'myCountry is falsy';

// resultTwo will be 'myCountry is truthy' because myCountry2 is an object which is truthy

// Let me know if this makes sense.

// It takes a while to remember what counts as truthy and falsy so don't worry
// about remembering them all now, you can always test something out if you forget
