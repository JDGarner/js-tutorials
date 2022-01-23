import React from 'react';

const PartTwo = () => {
  // Notice how we changed the player object a bit:
  const player = {
    firstName: 'Nathan',
    lastName: 'Drake',
  };
  // And notice how our h2 has changed to render both the firstName and the lastName

  // TODO:
  // 1 - Look at the PlayerInfo component in the part-2 folder
  // 2 - Remove the two h2 elements below
  // 3 - Add the PlayerInfo component inside the div below
  // (make sure to import the correct PlayerInfo file, e.g. from './PlayerInfo')
  // 4 - Pass the player.firstName and player.lastName into the PlayerInfo component

  return (
    <div>
      <h2>Player:</h2>
      <h2>{player.firstName} {player.lastName}</h2>
    </div>
  );
};

export default PartTwo;
