// check if some property exists on an object

// Object.keys
// Object.values

const playerOne = {
  health: 100,
  name: "Kratos",
  hasResurrectionStone: true,
}

const playerTwo = {
  health: 100,
  name: "Atreus",
}

// 1a)
// Write a function called attackPlayerOne
// The function should reduce the health of playerOne by 20
// But it also has a random chance of 20% to be a 'critical attack'
// and reduce the health of playerOne by 60
// If the attack is a critical attack, console.log "Critical Attack!"
// Otherwise console.log "Normal Attack"
// return the new health value of the player

const attackPlayerOne = () => {
  if (Math.random() < 0.2) {
    console.log("Critical Attack");
    playerOne.health = playerOne.health - 60;
    return playerOne.health;
  } else {
    console.log("Normal Attack");
    playerOne.health = playerOne.health - 20;
    return playerOne.health;
  }
};

// Test your function with the following code:
const remainingHealth = attackPlayerOne();
console.log('Player one was attacked! Remaining health: ', remainingHealth);



// 1b)
// Write a function called killPlayer, that does the following:
// If there is a resurrection stone on the player object:
// - change hasResurrectionStone to false
// Else:
// - change the health of the player object to 0
// console.log the edited player object (still inside the killPlayer function)

const killPlayer = (player) => {
  if (player.hasResurrectionStone === true) {
    player.hasResurrectionStone = false
  } else {
    player.health = 0
  }
};

// Test your function with the following code:
console.log(playerOne);
killPlayer(playerOne);
console.log(playerOne);

console.log(playerTwo);
killPlayer(playerTwo);
console.log(playerTwo);


