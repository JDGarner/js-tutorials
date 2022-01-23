import React from 'react';
import PlayerInfo from './PlayerInfo';

const PartSix = () => {
  // Our players have health now!
  const playerOne = {
    firstName: 'Nathan',
    lastName: 'Drake',
    health: 100,
  };

  const playerTwo = {
    firstName: 'Samuel',
    lastName: 'Drake',
    health: 80,
  };

  // TODO:
  // 1 - Look at the new button at the bottom of our component,
  // it has a onClick prop and we are passing in 'onClickAttackPlayerOne'.
  // 2 - Make a function below called onClickAttackPlayerOne that:
  //     - reduces the health of playerOne object by 20
  //     - console.logs playerOne.health
  // 3 - Notice in the console that the health of the playerOne object is going down
  // but it's not updating in the web page... hm... have a think about why that could be.
  // Don't worry if you're not sure.
  // Scroll down to the bottom of this file to see the answer.

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

export default PartSix;

// Answer to part 3 below
// scroll here once you've had a little think about what the answer could be.
// ...
// ...
// ...
// ...
// ...
// ...
// ...
// ...
// ...
// ...
// ...
// ...
// ...
// ...

// It's because, in React, if we want stuff in the web page to update when it changes,
// we have to stick it in the React 'state' (i.e. with useState). Let's do that next!
