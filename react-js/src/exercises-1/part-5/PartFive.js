import React from 'react';
import PlayerInfo from './PlayerInfo';

const PartFive = () => {
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
  // 1 - Add a new prop to PlayerInfo called 'health'
  // 2 - Render it inside an h3 element,
  // so that it displays like 'Health: 80' (if the value health is 80)
  // 3 - Make sure to pass in the health values below to PlayerInfo for each player object

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
    </div>
  );
};

export default PartFive;
