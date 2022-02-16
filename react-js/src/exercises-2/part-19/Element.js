import React from 'react';

const Element = ({ element, symbol }) => {
  return (
    <div>
      <h5>{element}</h5>
      <h6>{symbol}</h6>
    </div>

  );
};

export default Element;
