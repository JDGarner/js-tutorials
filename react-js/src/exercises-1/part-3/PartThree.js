import React from 'react';
import PlayerInfo from './PlayerInfo';

const PartThree = () => {
  const playerOne = {
    firstName: 'Nathan',
    lastName: 'Drake',
  };

  // We have a new player!
  const playerTwo = {
    firstName: 'Samuel',
    lastName: 'Drake',
  };

  // TODO:
  // 1 - Add another PlayerInfo component below the existing one
  // 2 - Pass in the data for playerTwo instead

  return (
    <div>
      <PlayerInfo
        firstName={playerOne.firstName}
        lastName={playerOne.lastName} />
    </div>
  );
};

export default PartThree;
