import React from 'react';
import Element from './Element';
import { elements } from './some-data';

// Take a look at our elements data in some-data.js, some of the element objects
// now have a description property, but not all of them...

// TODO:
// 1 - Pass the description property into the Element component
// 2 - Inside the Element component, if the description property is present
// show the description, otherwise show the text 'No Description'

// Hint - remember how we did conditional rendering using ternary if statements in
// PartSeventeen?

const PartTwenty = () => {
  return (
    <div>
      <h4>Elements:</h4>
      <div>
        {elements.map((element) => {
          return (
            <Element
              name={element.name}
              symbol={element.symbol}
              description={element.description} />
          );
        })}
      </div>
    </div>
  );
};

export default PartTwenty;
