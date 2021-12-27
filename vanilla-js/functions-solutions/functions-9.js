// 1a)

// Write a function called makeAllUppercase that takes an array of strings
// and returns a new array with each of the strings in uppercase

const makeAllUppercase = (myArray) => {
  
};

// Test your function with the following code:
console.log(makeAllUppercase(["brave", "nut", "badger"]))
// Should output => ["BRAVE", "NUT", "BADGER"]

// 1b)

// Write a function called addUppercaseString that takes an array of strings
// and returns a new array with the original string and the string in
// uppercase separated by a colon, e.g:
// "brave" should become => "brave:BRAVE"

const addUppercaseString = (myArray) => {
  
};

// Test your function with the following code:
// console.log(addUppercaseString(["brave", "nut", "badger"]))
// Should output => ["brave:BRAVE", "nut:NUT", "badger:BADGER"]



// 1c)

// Write a function called addUppercaseStringAndLength that takes an array of strings
// and returns a new array with the original string and the string in
// uppercase AND the length of the string separated by a colon, e.g:
// "brave" should become => "brave:BRAVE:5"

const addUppercaseStringAndLength = (myArray) => {
  
};

// Test your function with the following code:
// console.log(addUppercaseStringAndLength(["brave", "nut", "badger"]))
// Should output => ["brave:BRAVE:5", "nut:NUT:3", "badger:BADGER:6"]



// 1d)

// Write a function called addUppercaseStringAndLengthAndFirstTwoLetters that takes an array of strings
// and returns a new array with:
// the original string
// the string in uppercase
// the length of the string
// the first two letters of the string
// all separated by a colon, e.g:
// "brave" should become => "brave:BRAVE:5:br"

const addUppercaseStringAndLengthAndFirstTwoLetters = (myArray) => {
  
};

// Test your function with the following code:
// console.log(addUppercaseStringAndLengthAndFirstTwoLetters(["brave", "nut", "badger"]))
// Should output => ["brave:BRAVE:5:br", "nut:NUT:3:nu", "badger:BADGER:6:ba"]



// 1e)

// Write a function called addUppercaseStringAndLengthAndFirstTwoLettersSometimes that takes an array of strings
// and returns a new array with:
// the original string
// the string in uppercase
// the length of the string
// the first two letters of the string
// all separated by a colon
// BUT if the length of the string is less than 4 characters then just return the original string
// e.g:
// "brave" should become => "brave:BRAVE:5:br"
// "nut" should become => "nut"

const addUppercaseStringAndLengthAndFirstTwoLettersSometimes = (myArray) => {
  
};

// Test your function with the following code:
// console.log(addUppercaseStringAndLengthAndFirstTwoLettersSometimes(["brave", "nut", "badger"]))
// Should output => ["brave:BRAVE:5:br", "nut", "badger:BADGER:6:ba"]



// 1f) - ok last one, as it's getting a bit ridiculous now

// Write a function called addUppercaseStringAndLengthAndFirstTwoLettersSometimesWithSeparator
// that takes an array of strings AND a string variable called separator
// and returns a new array with:
// the original string
// the string in uppercase
// the length of the string
// the first two letters of the string
// ** ALL SEPARATED BY THE VARIABLE PASSED IN AS THE separator **
// BUT if the length of the string is less than 4 characters then just return the original string
// e.g:
// "brave" should become => "brave-BRAVE-5-br" (If the separator paramter was "-")
// "nut" should become => "nut"

const addUppercaseStringAndLengthAndFirstTwoLettersSometimesWithSeparator = (myArray, separator) => {
  
};

// Test your function with the following code:
// console.log(addUppercaseStringAndLengthAndFirstTwoLettersSometimesWithSeparator(["brave", "nut", "badger"], "_"))
// Should output => ["brave_BRAVE_5_br", "nut", "badger_BADGER_6_ba"]

// console.log(addUppercaseStringAndLengthAndFirstTwoLettersSometimesWithSeparator(["brave", "nut", "badger"], "***"))
// Should output => ["brave***BRAVE***5***br", "nut", "badger***BADGER***6***ba"]


