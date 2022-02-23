// TODO:
// 1 - Make it so if the country's name is "Albania" we don't show it
// See the comment for a hint of where this logic needs to go

import React, { useEffect, useState } from 'react';
import Country from './Country';

const PartThirty = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/countries')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCountries(data);
        console.log('>>> data:', data);
      });
  }, []);

  return (
    <div>
      <h1>Countries List</h1>
      {countries.map((country) => {
        if (country.name === 'Albania') {
          return null;
        }

        return (
          <Country
            key={country.name}
            name={`${country.name} ${country.emoji}`}
            capital={country.capital} />
        );
      })}
    </div>
  );
};

export default PartThirty;
