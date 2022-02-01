import React, { useEffect, useState } from 'react';

// You can have multiple useEffects in the same react component
// When a component renders for the first time, this is known as 'mounting'

// TODO:
// 1 - Interact with the app and look when the console.logs fire in the dev tools
//   - Notice the web browser tab title changing each time the useEffect is firing

const PartTwentyFour = () => {
  const [myText, setMyText] = useState('Hello');

  useEffect(() => {
    console.log('Our component just "mounted"');
  }, []);

  useEffect(() => {
    console.log('>>> myText changed: ', myText);
    document.title = myText;
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

export default PartTwentyFour;
