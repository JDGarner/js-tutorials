import React, { useState } from 'react';

// TODO:
// 1 - Add a button with the text 'Increase Age'
// 2 - Each time the button is clicked:
//     - Increase the age by 1
//     - Increase the value of dog age by 7
// 3 - Render the age and dogAge variables so you can see them update

const PartTwentyOne = () => {
  const [age, setAge] = useState(0);
  const [dogAge, setDogAge] = useState(0);

  return (
    <div>
      {/* Your buttons here */}
    </div>
  );
};

export default PartTwentyOne;
