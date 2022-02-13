import React, { useEffect } from 'react';

// TODO:
// 1 - Add a state variable called senators using useState
// Set the initial value to an empty array

// 2 - When the data has been received, set the value of senators to the data being returned

// 3 - in the JSX, map through the senators array to render an h6 element
// for each senator with their name in it (look in the console.log data to find
// where you can access the name property in each senator object)

const PartTwentySix = () => {
  useEffect(() => {
    fetch('http://localhost:3000/senators')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log('>>> data: ', data);
      });
  }, []);

  return (
    <div>
      <h5>Senators:</h5>

      {/* Render senators here */}
    </div>
  );
};

export default PartTwentySix;
