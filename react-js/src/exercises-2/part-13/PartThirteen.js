import React from 'react';
import PCOSInfo from './PCOSInfo';
import { soupRecipes } from './some-data';

// TODO:
// 1 - Create an array of objects containing whatever data you like, something fun

// 2 - Render it out below using .map

// 3 - Experiment using .map to modify the data in some way before it gets rendered

// If you're not sure what to do, look at the some documentation for different
// methods that can be used to modify strings and numbers:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
// https://www.w3schools.com/js/js_arithmetic.asp

// You can be creative and combine multiple methods together also if you want

const PartThirteen = () => {
  return (
    <div>
      <h2>My soup recipes:</h2>
      <div>
        {soupRecipes.map((soup) => {
          if (soup.difficultyLevel === 'Hard') {
            return (
              <div>
                <h4>{soup.name}</h4>
                <p>Difficulty level: {soup.difficultyLevel}</p>
                <p>You&apos;re a Master chef!</p>
                <PCOSInfo type={soup.type} />
              </div>
            );
          }

          return (
            <div>
              <h4>{soup.name}</h4>
              <p>Difficulty level: {soup.difficultyLevel}</p>
              <p>You&apos;re a chef in training!</p>
              <PCOSInfo
                type={soup.type} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PartThirteen;
