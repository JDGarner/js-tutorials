// TODO:
// Start the countries server
// (check package.json scripts section for the command to run with `yarn <command>`)
// Add PartTwentyNine into App.js
// 1 - Render the list of countries
//     Use the Country component to render each one, check the Country.js file
//     to see what props you need to give it

import React, { useEffect, useState } from 'react';

const PartTwentyNine = () => {
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
      {/* Map through countries and render them here */}
    </div>
  );
};

export default PartTwentyNine;
