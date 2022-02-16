import React from 'react';

const Senator = ({ name, description, birthday, party }) => {
  return (
    <div>
      <h3>{name}</h3>
      <h5>{description}</h5>
      <h5>Birthday: {birthday}</h5>
      <h5>{party}</h5>

      {party === 'Democrat'
        ? <h6>What a goodist!</h6>
        : <h6>What a badist!</h6>
      }
    </div>
  );
};

export default Senator;
