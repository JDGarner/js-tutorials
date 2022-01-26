import React from 'react';

const PlayerInfo = ({ firstName, lastName }) => {
  return (
    <div>
      <h2>Player:</h2>
      <h2>{firstName} {lastName}</h2>
    </div>
  );
};

export default PlayerInfo;
