import React, { useState } from 'react';
import PlayerInfo from './PlayerInfo';

const PartNine = () => {
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
  // - Nothing to do in this one actually, you can just peruse this and
  // make sure your solution to part-8 is the same

  const onClickAttackPlayerOne = () => {
    const updatedPlayerOne = {
      ...playerOne,
      health: playerOne.health - 20,
    };

    setPlayerOne(updatedPlayerOne);
  };

  const onClickAttackPlayerTwo = () => {
    const updatedPlayerTwo = {
      ...playerTwo,
      health: playerTwo.health - 20,
    };

    setPlayerTwo(updatedPlayerTwo);
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

export default PartNine;
