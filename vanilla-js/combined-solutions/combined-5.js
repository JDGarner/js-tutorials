// Practice with the spread operator

const weapons = {
  weapon: 'axe',
  shield: 'wooden shield'
}

const food = [
  {
    name: 'blueberries',
    quantity: 5
  },
  {
    name: 'leg of lamb',
    quantity: 2
  },
]

const player = {
  name: 'Kratos',
  health: 100,
  items: [
    ...food,
    {
      name: 'diamond chunks',
      quantity: 3
    },
  ],
  equipment: {
    helmet: 'helm of the unforgiven',
    ...weapons
  },
};

player.equipment = {
  ...player.equipment,
  waist: 'gilded belt of the traveller'
}

player.items = [
  {
    name: 'apples',
    quantity: 2
  },
  ...player.items,
]

// After all the code above has run, what would the player object now contain?
// See if what you thought matches what shows up on the console.

console.log(player);

// Uncomment the following bit of code:
// You can override a property of an object like this
player.equipment = {
  ...player.equipment,
  waist: 'sturdy belt of the brave'
}

// Check what gets logged here:
console.log('Player equipment: ', player.equipment)


// Uncomment the following bit of code:
// The order is important,
// the following code will not override the old waist property:
player.equipment = {
  waist: 'new cool belt of the forsaken',
  ...player.equipment,
}

console.log('Player waist: ', player.equipment.waist)

// Basically, if something is below with the same property, then the
// one at the bottom gets set as the final value, e.g:
const userOne = {
  name: 'Jeb'
}

const userTwo = {
  ...userOne,
  name: 'Gleb'
}

// userTwo's name will still be 'Gleb' because name: 'Gleb' is below ...userOne

const userThree = {
  name: 'Sleebens',
  ...userOne
}



// userThree's name will be Jeb because the 'name' property of userOne
// overrides name: 'Sleebens'
