import React from 'react';

const SenatorsList = ({ name, description, birthday, party, phone }) => {
  return (
    <div>
      <h3>Name: {name}</h3>
      <p>Title: {description}</p>
      <p>Birthday: {birthday}</p>
      <p>Party: {party}</p>
      <p>Phone number: {phone}</p>
      <p>Conclusion:
        {party === 'Democrat'
          ? ' I am a goodist!'
          : ' I am a badist!'
      }
      </p>
    </div>
  );
};

export default SenatorsList;
