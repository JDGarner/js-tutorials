import React, { useEffect, useState } from 'react';
import SenatorsList from './SenatorsList';

// TODO:
// 1 - Add a state variable called senators using useState
// Set the initial value to an empty array

// 2 - When the data has been received, set the value of senators to the data being returned

// 3 - in the JSX, map through the senators array to render an h6 element
// for each senator with their name in it (look in the console.log data to find
// where you can access the name property in each senator object)

const PartTwentySix = () => {
  const [republicansHidden, setRepublicansHidden] = useState(false);
  const [democratsHidden, setDemocratsHidden] = useState(false);
  const [senators, setSenators] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/senators')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log('>>> data: ', data);
        setSenators(data);
      });
  }, []);

  const onClickHideRepublican = () => {
    setRepublicansHidden(true);
  };

  const onClickShowRepublican = () => {
    setRepublicansHidden(false);
  };

  const onClickHideDemocrat = () => {
    setDemocratsHidden(true);
  };

  const onClickShowDemocrat = () => {
    setDemocratsHidden(false);
  };

  return (
    <div>
      <button onClick={onClickHideRepublican} type="button">Hide Republicans</button>
      <button onClick={onClickShowRepublican} type="button">Show Republicans</button>
      <button onClick={onClickHideDemocrat} type="button">Hide Democrats</button>
      <button onClick={onClickShowDemocrat} type="button">Show Democrats</button>
      <h2>Senators:</h2>
      {senators.map((senator) => {
        if (republicansHidden && senator.party === 'Republican') {
          return null;
        }

        if (democratsHidden && senator.party === 'Democrat') {
          return null;
        }

        return (
          <SenatorsList
            key={senator.phone}
            name={senator.person.firstname}
            description={senator.description}
            birthday={senator.person.birthday}
            party={senator.party}
            phone={senator.phone} />
        );
      })}
    </div>
  );
};

export default PartTwentySix;
