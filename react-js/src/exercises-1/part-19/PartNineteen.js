import React from 'react';
import Element from './Element';
import { elements } from './some-data';

// Take a look at our new elements jsx/markup (can refer to jsx and markup, both
// just mean the html inside react components)

// TODO:
// 1 - Create a new Element.js component
// 2 - You can do these steps in any order:
//    a) Move the div containing the element jsx (just each individual
//       element not the whole elements.map bit) into the Element component
//    b) Replace the element jsx with the <Element /> component
//    c) Pass the props 'name' and 'symbol' into the Element component

const PartNineteen = () => {
  return (
    <div>
      <h4>Elements:</h4>
      <div>
        {elements.map((element) => {
          return (
            <Element
              key={element.symbol}
              name={element.name}
              symbol={element.symbol} />
          );
        })}
      </div>
    </div>
  );
};

export default PartNineteen;
