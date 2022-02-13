import React from 'react';
import { myFriends } from './some-data';

// TODO:
// take a look at the myFriends array being imported from some-data.js
// read all the comments here and the code then read the TODO at the bottom

const PartTen = () => {
  // Lets take a break from attacking players...
  // ...and take a look at rendering arrays of stuff

  // The syntax below might be familiar.
  // Remember what array.map was for?
  // (Take a look back at previous exercises in functions if you want to look at more examples)
  // Answer - For creating a new array in which each element is modified in some way.

  // So here wwe are taking myFriends which is an array of strings
  // And transforming it into an array of <h5> elements with each friend string inside it
  // then storing it inside a variable called friendElements
  const friendElements = myFriends.map((friend) => {
    return <h5>{friend}</h5>;
  });

  // We can then take that friendElements array and return it inside this react component
  // in order to render it on the screen

  return (
    <div>
      <h4>Friends 1:</h4>
      <div>
        {friendElements}
      </div>

      {/* So the section above 'Friends 1', is essentially the same as: */}
      <h4>Friends 2:</h4>
      <div>
        <h5>{myFriends[0]}</h5>
        <h5>{myFriends[1]}</h5>
        <h5>{myFriends[2]}</h5>
        <h5>{myFriends[3]}</h5>
      </div>

      {/*
        We don't have to store it in a variable though, that was just to make it clear
        what was happening, we can also just shove it straight into the div as below:
      */}
      <h4>Friends 3:</h4>
      <div>
        {myFriends.map((friend) => {
          return <h5>{friend}</h5>;
        })}
      </div>
      {/* ^ this is usually the way we do it btw, rather than storing it in a variable first */}
    </div>
  );
};

// TODO:
// Make sure you understand each example and how each is essentially the same
// And why mapping through the array allows us to render a list of data on the web page
// Ask me if you're not sure :)

export default PartTen;
