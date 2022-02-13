import React from 'react';

const PlayerInfo = ({ title, firstName, lastName }) => {
  return (
    <div>
      <h2>{title}:</h2>
      <h2>{firstName} {lastName}</h2>
    </div>
  );
};

export default PlayerInfo;
