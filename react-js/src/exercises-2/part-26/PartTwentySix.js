import React, { useEffect, useState } from 'react';
import Senator from './Senator';

// TODO:
// 1 - Add a state variable called senators using useState
// Set the initial value to an empty array

// 2 - When the data has been received, set the value of senators to the data being returned

// 3 - in the JSX, map through the senators array to render an h6 element
// for each senator with their name in it (look in the console.log data to find
// where you can access the name property in each senator object)

const PartTwentySix = () => {
  const [senators, setSenators] = useState([]);
  const [democratsHidden, setDemocratsHidden] = useState(false);
  const [republicansHidden, setRepublicansHidden] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3000/senators')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setSenators(data);
        console.log('>>> data: ', data);
      });
  }, []);

  const onClickHideDemocrat = () => {
    setDemocratsHidden(true);
  };

  const onClickHideRepublican = () => {
    setRepublicansHidden(true);
  };

  const onClickShowDemocrat = () => {
    setDemocratsHidden(false);
  };

  const onClickShowRepublican = () => {
    setRepublicansHidden(false);
  };

  return (
    <div>
      <button type="button" onClick={onClickHideDemocrat}>Hide Democrats</button>
      <button type="button" onClick={onClickShowDemocrat}>Show Democrats</button>
      <button type="button" onClick={onClickHideRepublican}>Hide Republicans</button>
      <button type="button" onClick={onClickShowRepublican}>Show Republicans</button>
      <h1>Senators:</h1>
      {senators.map((senator) => {
        if (democratsHidden === true && senator.party === 'Democrat') {
          return null;
        }

        if (republicansHidden === true && senator.party === 'Republican') {
          return null;
        }

        return (
          <Senator
            key={senator.description}
            name={`${senator.person.firstname} ${senator.person.lastname}`}
            description={senator.description}
            party={senator.party}
            birthday={senator.person.birthday} />
        );
      })}
    </div>
  );
};

export default PartTwentySix;

// button: show democrats, hide democrats
// button: show republicans, hide republicans
