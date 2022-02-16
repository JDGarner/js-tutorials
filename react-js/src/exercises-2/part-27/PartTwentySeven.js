// TODO: part 1
// Have a look at the data/countries-db.json file
// Next, look at the package.json scripts section
// What command do we have to run to start our server that hosts the countries data?

// TODO: part 2
// Make a small app that has the following behaviour:
// 1 - fetches data from 'http://localhost:3000/countries'
// 2 - displays a list of countries, including their name and their capital, like:
//     Name: Afghanistan
//     Capital: Kabul
// 3 - look into part-27-next-steps.txt for further tasks

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
        console.log('>>>>data:', data);
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
      <h1>Countries List</h1>
      <button type="button" onClick={onClickShowCountriesWithL}>Show countries with L</button>
      <button type="button" onClick={onClickShowAllCountries}>Show all countries</button>
      {countries.map((country) => {
        if (!country.name.startsWith('L') && showOnlyCountriesWithL === true) {
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
