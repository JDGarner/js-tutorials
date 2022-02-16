import React from 'react';
import { elements } from './some-data';

// TODO:
// This is a copy of PartTwelve actually, but I want you to redo it
// before going onto the next part :).

// Take a look at the elements array being imported from some-data.js
// Notice that we're now dealing with an array of objects, rather than an array of strings
// Each element has a 'name' and 'symbol' property.

// Take a look at how we can render the name property of each element

// 1 - Render the symbols of each element in h5 tags under 'Element Symbols:'

// 2 - Render the name AND symbol of each element in h5 tags, like this:
// <h5>Element: Hydrogen, Symbol: H</h5>

// 3 - Take a look at how we can render the elements without Carbon in
// the section 'Elements excluding Carbon'.
// If we do return null in a react component, it just treats that as nothing
// and nothing gets added into the DOM/web page.

// 4 - Render the element names excluding Hydrogen AND Lithium in the last section

const PartEighteen = () => {
  return (
    <div>
      <h4>Elements:</h4>
      <div>
        {elements.map((element) => {
          return <h5>Element: {element.name}</h5>;
        })}
      </div>

      <h4>Element Symbols:</h4>
      <div>
        {elements.map((element) => {
          return <h5>Symbol: {element.symbol}</h5>;
        })}
      </div>

      <h4>Elements name and symbols:</h4>
      <div>
        {elements.map((element) => {
          return <h5>Element: {element.name}, Symbol: {element.symbol}</h5>;
        })}
      </div>

      <h4>Elements excluding Carbon:</h4>
      <div>
        {elements.map((element) => {
          if (element.symbol === 'C') {
            return null;
          }

          return <h5>{element.name}</h5>;
        })}
      </div>

      <h4>Elements excluding Hydrogen AND Lithium:</h4>
      <div>
        {elements.map((element) => {
          if (element.symbol === 'H' || element.symbol === 'Li') {
            return null;
          }

          return <h5>{element.name}</h5>;
        })}
      </div>
    </div>
  );
};

export default PartEighteen;
