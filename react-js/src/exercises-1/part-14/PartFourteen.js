import React, { useState } from 'react';

// TODO:
// 1 - In this component, add a button that when you click on it
// adds 50 to a counter that is displaying on the screen.
// Set the starting value of the counter to 200.

// 2 - Add another button that subtracts 50 each time from the counter

const PartFourteen = () => {
  const [counter, setCounter] = useState(20);

  const onClickedAdd50 = () => {
    const newPlusCounter = counter + 50;

    setCounter(newPlusCounter);
  };

  const onClickMinus50 = () => {
    const newMinusCounter = counter - 50;

    setCounter(newMinusCounter);
  };

  return (
    <div>
      <p>Counter {counter}</p>
      <button onClick={onClickedAdd50} type="button">Add 50!</button>
      <button onClick={onClickMinus50} type="button">Minus 50!</button>
    </div>
  );
};

export default PartFourteen;
