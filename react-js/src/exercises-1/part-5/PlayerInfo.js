import React from 'react';

const PlayerInfo = ({ title, firstName, lastName, health }) => {
  return (
    <div>
      <h2>{title}:</h2>
      <h2>{firstName} {lastName}</h2>
      <h3>Health: {health}</h3>
    </div>
  );
};

export default PlayerInfo;
