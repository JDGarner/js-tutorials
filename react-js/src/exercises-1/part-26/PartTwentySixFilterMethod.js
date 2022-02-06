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
    const newSenators = senators.filter((senator) => {
      return senator.party === 'Democrat';
    });
    setSenators(newSenators);
  };

  return (
    <div>
      <button onClick={onClickHideRepublican} type="submit">Hide Republicans!</button>
      <h2>Senators:</h2>
      {senators.map((senator) => {
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
