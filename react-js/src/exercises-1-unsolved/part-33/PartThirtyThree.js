// TODO:
// 1) - Add a button inside the Country component with the text 'Select'

// 2) - Make it so when you click on the button, it calls a function
//      called onClickSelectCountry (you can just console.log something in the function
//      for now to make sure it's working)
//      Test out your button to make sure it is console.logging something

// 3) - Add a state variable called myCountry, set the initial value to null

// 3) - When the button is clicked, make it so the myCountry state variable
//      is set to the country object that was clicked.
//      You'll need to pass the whole country object to the onClickSelectCountry somehow
//      Have a think about how to do this, don't worry if you're not sure, you can look at
//      previous exercises or ask :).

// 4) - Read through the file truthy-tutorial.js

// 5) - Below your input element, add a ternary statement to make it so
//      if myCountry is 'truthy', then render a Country component with the myCountry
//      data passed into it.

// 6) - Test out your code by selecting different countries

import React, { useEffect, useState } from 'react';
import Country from './Country';

const PartThirtyThree = () => {
  const [countries, setCountries] = useState([]);
  const [inputText, setInputText] = useState('');

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

  const onChangeInputText = (event) => {
    setInputText(event.target.value);
  };

  // Add onClickSelectCountry function here

  return (
    <div>
      <h1>Countries List</h1>
      <input type="text" onChange={onChangeInputText} value={inputText} />

      {/* My country to be displayed here */}

      {countries.map((country) => {
        if (!country.name.toLowerCase().includes(inputText)) {
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

export default PartThirtyThree;
