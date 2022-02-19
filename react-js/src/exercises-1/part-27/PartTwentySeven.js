// TODO:
// make sure to run the countries server (check package.json to see the command)
// make sure to change App.js to render exercises-1/PartTwentySeven
// follow instructions in part-27-next-steps.txt

import React, { useEffect, useState } from 'react';
import Country from './Country';

const PartTwentySeven = () => {
  const [countries, setCountries] = useState([]);
  const [showOnlyCountriesWithL, setShowOnlyCountriesWithL] = useState(false);

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

  const onClickShowCountriesWithL = () => {
    setShowOnlyCountriesWithL(true);
  };

  const onClickShowAllCountries = () => {
    setShowOnlyCountriesWithL(false);
  };

  return (
    <div>
      {/* <h1>My Country</h1> */}
      {/* TODO: render my country */}

      {/* <h1>My Favourite Countries</h1> */}
      {/* TODO: render favourite countries */}

      <h1>Countries List</h1>
      <button type="button" onClick={onClickShowCountriesWithL}>Show countries with L</button>
      <button type="button" onClick={onClickShowAllCountries}>Show all countries</button>
      {countries.map((country) => {
        if (!country.name.startsWith('L') && showOnlyCountriesWithL) {
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

export default PartTwentySeven;
