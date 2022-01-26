import React from 'react';
import { someAnimals } from './some-data';

// TODO:
// Take a look at the someAnimals array being imported from some-data.js
// 1 - Using .map, render them in h5 tags inside the div below 'Some Animals 1:'

// 2 - Render them in the div below 'Some Animals Uppercase:', but render each one in uppercase,
// think about where you need to use the .toUpperCase() function

// 3 - Render them in the div below 'Some Animals First Letter:',
// but render just the first letter of each animal

const PartEleven = () => {
  return (
    <div>
      <h4>Some Animals 1:</h4>
      <div>
        {/* Animals to be rendered here */}
      </div>

      <h4>Some Animals Uppercase:</h4>
      <div>
        {/* Animals to be rendered here */}
      </div>

      <h4>Some Animals First Letter:</h4>
      <div>
        {/* Animals to be rendered here */}
      </div>
    </div>
  );
};

export default PartEleven;
