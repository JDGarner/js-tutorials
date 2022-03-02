import React from 'react';

const ForgotMyPassword = ({ onClickBackToLoginPage }) => {
  return (
    <div>
      <h5>Enter your e-mail to reset your password</h5>
      <input type="text" />
      <button type="button">Submit</button>
      <button type="button" onClick={onClickBackToLoginPage}>Back</button>
    </div>
  );
};

export default ForgotMyPassword;
