// TODO:
// 1) - Remove the logic for hiding Albania

// 2) - Make it so if the country's name startsWith 'An', we don't show it

// 3) - Change the logic from 2) to make it so if the country's name
//      includes 'an' anywhere in the name, we don't show it
//    - (So 'Bangladesh' would be hidden as well as 'Andorra')
//    - Make sure you compare the lower case version of the country's name
//      so that 'Andorra' is hidden

// 4) - Change the logic from 3) to make it so we only hide country's that don't
//      have 'an' included in their name
//      Or if you want to think about it the other way around:
//      - Only show countries with 'an' in their name

import React, { useEffect, useState } from 'react';
import Country from './Country';

const PartThirtyOne = () => {
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

        // Add logic here for parts 2, 3 and 4

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

export default PartThirtyOne;
