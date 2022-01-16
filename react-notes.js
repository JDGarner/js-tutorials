// -------------------------------------------------------------
// Some of the concepts we've covered so far while learning react
// -------------------------------------------------------------


// 1) import /export
// - To use another file within your file, you have to import it
// e.g. to use MyComponent.js within App.js you have to do:
import MyComponent from './MyComponent';

// - To allow a file to be used by another file, you have to export it
// e.g. to allow other files to use MyComponent.js you have to do:
export default MyComponent;


// 2) React Components
// - A react component is a type of function that returns something that looks
// like HTML (but is actually slightly different and called JSX, but can basically
// think of it as HTML for now). Example:
const App = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <MyComponent />
    </div>
  );
};
// Note how this App component also returns our custom MyComponent component.


// 3) useState
// This is a function we have to import from react, e.g:
import React, { useState } from "react";
// and it allows us to make our react components a bit more dynamic and do stuff.
// The syntax is like this:
const [counter, setCounter] = useState(0);
// where counter is our variable
// setCounter is a function we have to use whenever we want to change counter
// and the initial value for counter is 0

// Another example:
const [username, setUsername] = useState("Sponge");

// See the MyComponent code for a full example of using useState to make a component
// interactive.
