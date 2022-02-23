import React from 'react';

const Country = ({ name, capital, onClickSelectCountry }) => {
  return (
    <div>
      <h4>Name: {name}</h4>
      <h5>Capital: {capital}</h5>
      {onClickSelectCountry
        ? <button type="button" onClick={onClickSelectCountry}>Select</button>
        : null }
    </div>
  );
};

export default Country;
