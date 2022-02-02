import React, { useState } from 'react';

// TODO:
// 1 - Add an input element to the jsx below

// 2 - Add an onChange prop to the input passing it a function called onChangeInput
// (like you do with onClick for buttons)

// 3 - In the function onChangeInput, call setMyText with the value of the text
// How did we do this again? event.something.something?
// Remember - the parameter that is passed to the onChange function is 'event'
// which has a bunch of info about what we just typed into the input

// 4 - Make sure to also pass a value prop to the input with the value of myText
// This is so the text inside the input gets updated as we type into the input

const PartTwentyTwo = () => {
  const [myText, setMyText] = useState('Hello');
  const onChangeInput = (event) => {
    setMyText(event.target.value);
  };

  const onClickAddPoop = () => {
    setMyText(`${myText} poop`);
  };

  const onClickClear = () => {
    setMyText('');
  };

  return (
    <div>
      <h5>My Text: {myText}</h5>
      <input onChange={onChangeInput} value={myText} type="text" />
      <button onClick={onClickAddPoop} type="button">Add poop!</button>
      <button onClick={onClickClear} type="button">Clear</button>
    </div>
  );
};

export default PartTwentyTwo;
