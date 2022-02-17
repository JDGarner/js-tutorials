import React from 'react';

const Country = ({ name, capital, onClickSelectMyCountry, onClickAddCountryToFavourites, onClickRemoveFromFavourites }) => {
  return (
    <div>
      <h4>Name: {name}</h4>
      <h5>Capital: {capital}</h5>
      {onClickSelectMyCountry
        ? (
          <button
            type="button"
            onClick={onClickSelectMyCountry}>Select country
          </button>
        )
        : null
      }
      {onClickAddCountryToFavourites
        ? (
          <button type="button" onClick={onClickAddCountryToFavourites}>Add to favourites</button>
        )
        : null
      }
      {onClickRemoveFromFavourites
        ? (
          <button type="button" onClick={onClickRemoveFromFavourites}>Delete country</button>
        )
        : null
    }
    </div>
  );
};

export default Country;
