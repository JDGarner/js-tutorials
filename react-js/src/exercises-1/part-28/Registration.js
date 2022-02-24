import React from 'react';

const Registration = ({ onClickRegistrationForm }) => {
  return (
    <div>
      <h4>No login account yet? Register below!</h4>
      <button type="button" onClick={onClickRegistrationForm}>Register</button>
    </div>

  );
};

export default Registration;
