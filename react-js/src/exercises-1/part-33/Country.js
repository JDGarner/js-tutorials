import React from 'react';

const Country = ({ name, capital }) => {
  return (
    <div>
      <h4>Name: {name}</h4>
      <h5>Capital: {capital}</h5>
    </div>
  );
};

export default Country;
