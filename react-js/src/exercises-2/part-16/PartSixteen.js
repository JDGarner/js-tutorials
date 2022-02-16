import React, { useState } from 'react';

// TODO:
// 1 - Add a button to this component with the text inside it saying 'Flip Coin'

// 2 - When this button is clicked, have it call a function called onClickFlipCoin

// 3 - When onClickFlipCoin is called, make it so there is a 50% chance that
// coinFlipResult gets set to 'Heads' and a 50% chance that it gets set to 'Tails'

// 4 - Look at the code for rendering the h5 elements if coinFlipResult is heads or tails
// See if you can figure out the syntax for this
// This is using a 'ternary' if statement.
// Read this if you're unsure on how the ternary if statement works:
// https://www.programiz.com/javascript/ternary-operator

const PartSixteen = () => {
  const [coinFlipResult, setCoinFlipResult] = useState('');
  const onClickFlipCoin = () => {
    if (Math.random() < 0.5) {
      setCoinFlipResult('Heads');
    } else {
      setCoinFlipResult('Tails');
    }
  };

  return (
    <div>
      <button type="button" onClick={onClickFlipCoin}>Flip Coin</button>

      {coinFlipResult === 'Heads'
        ? <h5>Heads!!!</h5>
        : null
      }

      {coinFlipResult === 'Tails'
        ? <h5>Tails!!!</h5>
        : null
      }
    </div>
  );
};

export default PartSixteen;
