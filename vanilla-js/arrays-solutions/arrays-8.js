const blacklist = ["Blake", "Flake", "Abdo", "Creamer", "Alfonso"]
const peopleInQueue = ["Repro", "Clamso", "Alfonso", "Sheeks", "Blake"]

// Only people not in the blacklist are allowed in the club
// Create a new array containing people allowed inside and console.log the new array



// Method 1, using a regular for loop:

const peopleAllowedIn = []


for (let i = 0; i < peopleInQueue.length; i++) {
   if(!blacklist.includes(peopleInQueue[i])) {
    peopleAllowedIn.push(peopleInQueue[i])
   } 
  }

// Method 2, using Array.forEach:

peopleInQueue.forEach(name => {
  if (!blacklist.includes(name)) {
    peopleAllowedIn.push(peopleInQueue(name))
  } 
});

console.log(peopleAllowedIn)

// Method 3, using Array.filter:

const peopleAllowedIn = peopleInQueue.filter(name => !blacklist.includes(name))


console.log(peopleAllowedIn)

