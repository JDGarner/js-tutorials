import React, { useState } from 'react';
import PlayerInfo from './PlayerInfo';

const PartEight = () => {
  const [playerOne, setPlayerOne] = useState({
    firstName: 'Nathan',
    lastName: 'Drake',
    health: 100,
  });

  const [playerTwo, setPlayerTwo] = useState({
    firstName: 'Samuel',
    lastName: 'Drake',
    health: 80,
  });

  // TODO:
  // 1 - Move playerTwo into React state like we did with playerOne
  // 2 - Add a new button below the existing one with an onClick prop that calls
  // a function called onClickAttackPlayerTwo
  // 3 - Add the function onClickAttackPlayerTwo that reduces the health of
  // playerTwo by 20, in the same way as onClickAttackPlayerOne

  const onClickAttackPlayerOne = () => {
    const updatedPlayerOne = {
      ...playerOne,
      health: playerOne.health - 20,
    };

    setPlayerOne(updatedPlayerOne);
  };

  const onClickAttackPlayerTwo = () => {
    const updatePlayerTwo = {
      ...playerTwo,
      health: playerTwo.health - 20,
    };

    setPlayerTwo(updatePlayerTwo);
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
      <button onClick={onClickAttackPlayerTwo} type="button">
        Attack Player Two
      </button>
    </div>
  );
};

export default PartEight;
