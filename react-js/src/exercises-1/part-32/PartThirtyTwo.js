// TODO:
// 1) - Add an input element
// 2) - Add an onChange function to the input element
// 3) - Make it so when the onChange function is fired, the value of the input is stored
//      in a state variable
// 4) - Make sure to set the value prop of the input as well
// 5) - Change the logic about showing only country's with 'an' so that
//      we hide country's that don't have the value of our input text included in their name

import React, { useEffect, useState } from 'react';
import Country from './Country';

const PartThirtyTwo = () => {
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

  return (
    <div>
      <h1>Countries List</h1>
      <input type="text" onChange={onChangeInputText} value={inputText} />
      {countries.map((country) => {
        if (!country.name.toLowerCase().includes(inputText.toLowerCase())) {
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

export default PartThirtyTwo;
