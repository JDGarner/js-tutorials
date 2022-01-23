import React from 'react';
import fakeApiCountryData from './country-data';

const Country = () => {
  const countryData = fakeApiCountryData;

  return (
    <div>
      <h3>{countryData.name}</h3>
    </div>
  );
};

export default Country;
