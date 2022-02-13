import React from 'react';

const PCOSInfo = ({ type }) => {
  if (type === 'High carb') {
    return <p>Not great for PCOS!</p>;
  }

  return <p>Great for PCOS!</p>;
};

export default PCOSInfo;
