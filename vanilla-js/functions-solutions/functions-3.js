// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk
// but containing one "needle"

// After your function finds the needle it should return a message
// (as a string) that says:
// "found the needle at position " plus the index it found the needle, so:
// findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
// should return "found the needle at position 5"

const findNeedle = haystack => {
  const needleIndex = haystack.findIndex(item => item === 'needle')
  return `found the needle at position ${needleIndex}`
}

// findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])

// Call your function below with a different 'haystack' to test it out:
console.log(findNeedle(['needle', 'poop', 'nose']))
