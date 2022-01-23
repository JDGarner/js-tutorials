/* eslint-disable react/prop-types */
import React from 'react';

const Borders = ({ borders }) => {
  return (
    <div>
      {borders.map((border) => {
        return <p key={border}>{border}</p>;
      })}
    </div>
  );
};

export default Borders;
