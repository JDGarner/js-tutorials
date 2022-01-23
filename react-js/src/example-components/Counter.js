import React, { useState } from 'react';

const Counter = () => {
  const [buttonClickCount, setButtonClickCount] = useState(0);

  const onPlusButtonClicked = () => {
    console.log('Yeahhhh');
    setButtonClickCount(buttonClickCount + 1);
  };

  const onMinusButtonClicked = () => {
    console.log('Noooo');
    setButtonClickCount(buttonClickCount - 1);
  };

  return (
    <div>
      <h3>My Component</h3>
      <button type="button" onClick={onPlusButtonClicked}>
        +
      </button>
      <button type="button" onClick={onMinusButtonClicked}>
        -
      </button>
      <h4>
        Click count:
        {buttonClickCount}
      </h4>
    </div>
  );
};

export default Counter;
