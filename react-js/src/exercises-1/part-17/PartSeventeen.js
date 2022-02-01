import React, { useState } from 'react';

// TODO:
// 1 - Add a button with the text 'Celebrate Birthday' that when clicked
// increases the value of age by 1

// 2 - Look at the syntax for rendering different h5 elements with messages
// depending on the age. This is known as 'conditional rendering' - basically
// rendering some html depending on if a condition is true or false
// One way of doing this (there are others we will explore later) is using
// the ternary if statement:
// {condition ? <p>condition is true</p> : <p>condition is false</p>}

// 3 - Add your own messages for different ages, add as many
// as you want until you feel comfortable with the syntax

const PartSeventeen = () => {
  const [age, setAge] = useState(12);

  return (
    <div>
      <h5>Age: {age}</h5>

      {age === 16
        ? <h5>You can do the sexes now</h5>
        : null
      }

      {age === 18
        ? <h5>You can do the drinkings now</h5>
        : null
      }

      {age === 21
        ? <h5>Welcome to adult life, good luck</h5>
        : null
      }

      {/* Add your own messages here */}
    </div>
  );
};

export default PartSeventeen;
