import React from 'react';

const Homepage = ({ onClickLogOut, signedInUsername }) => {
  return (
    <div>
      <h5>Welcome {signedInUsername}!</h5>
      <button type="button" onClick={onClickLogOut}>Log out</button>
    </div>
  );
};

export default Homepage;
