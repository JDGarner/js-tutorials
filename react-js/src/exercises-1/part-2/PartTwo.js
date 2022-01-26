import React from 'react';
import PlayerInfo from './PlayerInfo.js';

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
      <PlayerInfo firstName={player.firstName} lastName={player.lastName} />
    </div>
  );
};

export default PartTwo;
