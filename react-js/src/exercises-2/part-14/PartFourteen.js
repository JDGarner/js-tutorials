import React, { useState } from 'react';

// TODO:
// 1 - In this component, add a button that when you click on it
// adds 50 to a counter that is displaying on the screen.
// Set the starting value of the counter to 200.

// 2 - Add another button that subtracts 50 each time from the counter

const PartFourteen = () => {
  const [counter, setCounter] = useState(200);
  const onClickAdd50 = () => {
    const newCounterPlus = counter + 50;

    setCounter(newCounterPlus);
  };

  const onClickMinus50 = () => {
    const newCounterMinus = counter - 50;

    setCounter(newCounterMinus);
  };

  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={onClickAdd50} type="button">Add 50!</button>
      <button onClick={onClickMinus50} type="button">Minus 50!</button>
    </div>
  );
};

export default PartFourteen;
