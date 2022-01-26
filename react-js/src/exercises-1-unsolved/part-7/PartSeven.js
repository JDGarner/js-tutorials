import React, { useState } from 'react';
import PlayerInfo from './PlayerInfo';

const PartSeven = () => {
  // Our playerOne now lives in React state :)
  const [playerOne, setPlayerOne] = useState({
    firstName: 'Nathan',
    lastName: 'Drake',
    health: 100,
  });

  const playerTwo = {
    firstName: 'Samuel',
    lastName: 'Drake',
    health: 80,
  };

  // TODO:
  // 1 - Take a look at the updated function below and read the explanation for each step
  // There is some new syntax here, the '...playerOne' bit
  // This is called the 'spread' operator.
  // 2 - Try out the button and see that it updates the web page now

  const onClickAttackPlayerOne = () => {
    // Here we are creating an updated player object called updatedPlayerOne.
    // the ...playerOne bit basically copies all the stuff from the playerOne object
    // into the new updatedPlayerOne object.
    // Then after we've copied the current values for playerOne into updatedPlayerOne,
    // we set a new value for the health property (playerOne.health - 20)
    const updatedPlayerOne = {
      ...playerOne,
      health: playerOne.health - 20,
    };

    // Don't worry too much about understanding the spread operator just yet,
    // we will cover it more later. Just think of it as copying values from one object
    // into a new one.

    // Here we called setPlayerOne and pass in updatedPlayerOne, which replaces the
    // playerOne variable with the data in updatedPlayerOne
    setPlayerOne(updatedPlayerOne);
  };

  return (
    <div>
      <PlayerInfo
        title="Player One"
        firstName={playerOne.firstName}
        lastName={playerOne.lastName}
        health={playerOne.health} />
      <PlayerInfo
        title="Player Two"
        firstName={playerTwo.firstName}
        lastName={playerTwo.lastName}
        health={playerTwo.health} />
      <button onClick={onClickAttackPlayerOne} type="button">
        Attack Player One
      </button>
    </div>
  );
};

export default PartSeven;
