import React from 'react';
import PlayerInfo from './PlayerInfo';

const PartFour = () => {
  const playerOne = {
    firstName: 'Nathan',
    lastName: 'Drake',
  };

  const playerTwo = {
    firstName: 'Samuel',
    lastName: 'Drake',
  };

  // TODO:
  // 1 - Look inside the PlayerInfo component in the part-4 folder,
  // notice that we have a new 'title' prop (the parameters passed to React components
  // are also known as 'props').
  // 2 - The first PlayerInfo component below is already passing the title prop,
  // add a title prop to the other PlayerInfo component

  return (
    <div>
      <PlayerInfo
        title="Player One"
        firstName={playerOne.firstName}
        lastName={playerOne.lastName} />
      <PlayerInfo
        title="Player Two"
        firstName={playerTwo.firstName}
        lastName={playerTwo.lastName} />
    </div>
  );
};

export default PartFour;
