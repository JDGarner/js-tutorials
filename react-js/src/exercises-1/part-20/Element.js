import React from 'react';

const Element = ({ name, symbol, description }) => {
  return (
    <div>
      <h5>Element: {name}</h5>
      <h6>Symbol: {symbol}</h6>
      {description
        ? <h6>Description: {description}</h6>
        : <h6>No Description</h6>
      }
    </div>
  );
};

export default Element;
