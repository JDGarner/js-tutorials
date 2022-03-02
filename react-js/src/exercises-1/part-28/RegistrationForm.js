import React, { useState } from 'react';

const RegistrationForm = ({ showRegistrationForm, onClickBackToLoginPage, onClickRegister }) => {
  const [newPassword, setNewPassword] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const [newPasswordRepeat, setNewPasswordRepeat] = useState('');

  const onChangePasswordRegForm = (event) => {
    setNewPassword(event.target.value);
  };

  const onChangePasswordRepeatRegForm = (event) => {
    setNewPasswordRepeat(event.target.value);
  };

  const onChangeUsernameRegForm = (event) => {
    setNewUsername(event.target.value);
  };

  const doesContainNumber = () => {
    const regex = /\d/;

    return regex.test(newPassword);
  };

  const doesContainSpecialCharacter = () => {
    const regex = /[.*&?!%/]/;

    return regex.test(newPassword);
  };

  return (
    <div>
      {showRegistrationForm
        ? (
          <div>
            <div>
              <h5>Full name</h5>
              <input type="text" />
            </div>
            <div>
              <h5>Username</h5>
              <input type="text" onChange={onChangeUsernameRegForm} value={newUsername} />
            </div>
            <div>
              <h5>Password (min. 8 characters, 1 number and 1 special character &%.!?/* )</h5>
              <input type="text" onChange={onChangePasswordRegForm} value={newPassword} />
              {newPassword.length > 0 && newPassword.length < 8
                ? <h5>Password is too short.</h5>
                : null
              }
              {!doesContainNumber() && newPassword.length > 0
                ? <h5>Password must containt at least 1 number.</h5>
                : null
              }
              {!doesContainSpecialCharacter() && newPassword.length > 0
                ? <h5>Password must containt at least 1 special character & or % or . or ! or ? or / or * </h5>
                : null
              }
            </div>
            <div>
              <h5>Repeat password</h5>
              <input type="text" onChange={onChangePasswordRepeatRegForm} value={newPasswordRepeat} />
              <button type="button" onClick={() => onClickRegister(newUsername, newPassword)}>Submit</button>
              <button type="button" onClick={onClickBackToLoginPage}>Back</button>
            </div>
          </div>

        )
        : null }

      {newPassword !== newPasswordRepeat && newPasswordRepeat.length > 0
        ? <h5>Oooups ... passwords don&apos;t match</h5>
        : null
      }
    </div>
  );
};

export default RegistrationForm;
