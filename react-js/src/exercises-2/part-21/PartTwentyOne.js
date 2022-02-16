import React, { useState } from 'react';

// TODO:
// 1 - Add a button with the text 'Increase Age'
// 2 - Each time the button is clicked:
//     - Increase the age by 1
//     - Increase the value of dog age by 7
// 3 - Render the age and dogAge variables so you can see them update

const PartTwentyOne = () => {
  const [age, setAge] = useState(0);
  const [dogAge, setDogAge] = useState(0);

  const onClickIncreaseAge = () => {
    const newAge = age + 1;
    const newDogAge = dogAge + 7;

    setAge(newAge);
    setDogAge(newDogAge);
  };

  return (
    <div>
      <h5>Human age: {age}</h5>
      <h5>Dog age: {dogAge}</h5>
      <button type="button" onClick={onClickIncreaseAge}>Increase age</button>
    </div>
  );
};

export default PartTwentyOne;
