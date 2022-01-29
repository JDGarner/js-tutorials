import React, { useState } from 'react';

// TODO:
// 1 - Add a button to this component with the text inside it saying 'Flip Coin'

// 2 - When this button is clicked, have it call a function called onClickFlipCoin

// 3 - When onClickFlipCoin is called, make it so there is a 50% chance that
// coinFlipResult gets set to 'Heads' and a 50% chance that it gets set to 'Tails'

// 4 - If the coinFlipResult is 'Heads', render an h4 in the component that says:
// 'Wow it's heads!!!'
// If it is 'Tails', render an h5 that says:
// ':(( It's tails noooooooo'

const PartSixteen = () => {
  const [coinFlipResult, setCoinFlipResult] = useState('');

  return (
    <div>
      {/* Your JSX here */}
    </div>
  );
};

export default PartSixteen;
