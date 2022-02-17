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
  const [inputText, setInputText] = useState('');
  const [myCountry, setMyCountry] = useState(null);
  const [myFavouriteCountries, setMyFavouriteCountries] = useState([]);

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

  const onChangeInputText = (event) => {
    setInputText(event.target.value);
  };

  const onClickSelectMyCountry = (clickedOnCountry) => {
    setMyCountry(clickedOnCountry);
  };

  const onClickAddCountryToFavourites = (clickedOnCountry) => {
    const newFavouriteCountries = [...myFavouriteCountries, clickedOnCountry];

    setMyFavouriteCountries(newFavouriteCountries);
  };

  const onClickRemoveFromFavourites = (clickedOnCountry) => {
    // remove the clickedOnCountry that is passed into this function from the myFavouriteCountries array
    const newFavouriteCountries = myFavouriteCountries.filter((favouritedCountry) => {
      return clickedOnCountry.name !== favouritedCountry.name;
    });

    setMyFavouriteCountries(newFavouriteCountries);
  };

  const onClickShowCountriesWithL = () => {
    setShowOnlyCountriesWithL(true);
  };

  const onClickShowAllCountries = () => {
    setShowOnlyCountriesWithL(false);
  };

  const isCountryInFavouriteCountries = (country) => {
    return myFavouriteCountries.some((favouritedCountry) => {
      return favouritedCountry.name === country.name;
    });
  };

  return (
    <div>
      <h1>My Country</h1>
      {myCountry
        ? (
          <Country
            key={myCountry.name}
            name={`${myCountry.name} ${myCountry.emoji}`}
            capital={myCountry.capital} />
        )
        : null
      }
      <h1>My Favourite Countries</h1>
      {myFavouriteCountries
        ? myFavouriteCountries.map((country) => {
          return (
            <Country
              key={country.name}
              name={`${country.name} ${country.emoji}`}
              capital={country.capital}
              onClickRemoveFromFavourites={() => onClickRemoveFromFavourites(country)} />
          );
        })
        : null
    }
      <h1>Countries List</h1>
      <input type="text" onChange={onChangeInputText} value={inputText} />
      <button type="button" onClick={onClickShowCountriesWithL}>Show countries with L</button>
      <button type="button" onClick={onClickShowAllCountries}>Show all countries</button>
      {countries.map((country) => {
        if (isCountryInFavouriteCountries(country)) {
          return null;
        }

        if (!country.name.toLowerCase().includes(inputText.toLowerCase())) {
          return null;
        }

        if (!country.name.startsWith('L') && showOnlyCountriesWithL) {
          return null;
        }

        return (
          <Country
            key={country.name}
            name={`${country.name} ${country.emoji}`}
            capital={country.capital}
            onClickSelectMyCountry={() => onClickSelectMyCountry(country)}
            onClickAddCountryToFavourites={() => onClickAddCountryToFavourites(country)} />
        );
      })}
    </div>
  );
};

export default PartTwentySeven;
