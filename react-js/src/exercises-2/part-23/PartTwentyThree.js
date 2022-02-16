import React, { useEffect, useState } from 'react';

// TODO:
// 1 - Console.log something in the useEffect function

// 2 - Open the dev tools and see when that console.log fires
//   - Type in the text input, does the console.log fire again?

// 3 - Add 'myText' to the array in the second parameter of useEffect
//   - This is also called the 'dependency' array, whenever anything in this array
//     changes, the function we passed as the first parameter to useEffect will fire

const PartTwentyThree = () => {
  const [myText, setMyText] = useState('Hello');

  useEffect(() => {
    console.log("Hello")
  }, [myText]);

  const onChangeInput = (event) => {
    setMyText(event.target.value);
  };

  return (
    <div>
      <h5>My Text: {myText}</h5>
      <input value={myText} onChange={onChangeInput} />
    </div>
  );
};

export default PartTwentyThree;
