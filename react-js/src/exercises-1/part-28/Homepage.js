import React from 'react';

const Homepage = ({ onClickLogOut }) => {
  return (
    <div>
      <h5>Welcome Felcraft!</h5>
      <button type="button" onClick={onClickLogOut}>Log out</button>
    </div>
  );
};

export default Homepage;
