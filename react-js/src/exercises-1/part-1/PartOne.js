import React from 'react';

const PartOne = () => {
  // Here is our player object:
  const player = {
    name: 'Nathan Drake',
  };

  return (
    <div>
      <h2>Player: {player.name}</h2>
      {/* TODO: below here, render the player's name inside an h2 element */}
      {/* check in the web browser to make sure it's shows up correctly */}
    </div>
  );
};

export default PartOne;
