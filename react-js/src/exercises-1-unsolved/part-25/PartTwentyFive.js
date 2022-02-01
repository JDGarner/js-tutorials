import React, { useEffect } from 'react';

// Look inside the package.json file (in the react-js folder)
// Notice that I've added json-server to the dependencies list
// You need to install this package now:
// - quit your development server that is currently running (the one you started with yarn start)
// - run 'yarn' - to install any packages in package.json that aren't currently installed
// - now json-server will be in our react-js/node_modules folder
// - restart the dev server with yarn start

// Now have a look at the file in react-js/data/db.json
// This is our 'fake database'.
// We now need to use json-server to host this data on a fake server (our laptop)
// To do this run this in a new tab in iTerm (make sure to cd into the react-js folder):
// yarn start-server
// ^ this command is specified in the package.json file also, in the
// scripts section, it basically just runs:
// json-server --watch data/senators-db.json

// TODO:
// 1 - Look at the console.logs in the dev tools
// There should be an array of data about 14 US senators
// Look at the code in the useEffect function
// We fetch the data from http://localhost:3000/senators
// Then we do .json()
// Then we have the data

// We passed in an empty array to useEffect for the dependency array,
// so it just runs once on the first load of the app

const PartTwentyFive = () => {
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
      <h5>Hi</h5>
    </div>
  );
};

export default PartTwentyFive;
