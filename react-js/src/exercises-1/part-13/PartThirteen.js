import React from 'react';
import { yourStoolData } from './some-data';

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
      <h2>Your stool data:</h2>
      <div>
        {yourStoolData.map((element) => {
          if (element.diagnosis === 'mild diarrhea' || element.diagnosis === 'severe diarrhea') {
            return (
              <div>
                <h3>Poop type: {element.poopType}</h3>
                <h4>Diagnosis: you are fucked!</h4>
              </div>
            );
          }

          return (
            <div>
              <h3>Poop type: {element.poopType}</h3>
              <h4>Diagnosis: {element.diagnosis}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PartThirteen;
