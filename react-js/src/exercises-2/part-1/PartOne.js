import React from 'react';

const PartOne = () => {
  // Here is our player object:
  const player = {
    name: 'Nathan Drake',
  };

  return (
    <div>
      <h2>Player:</h2>
      <h2>{player.name}</h2>
    </div>
  );
};

export default PartOne;
