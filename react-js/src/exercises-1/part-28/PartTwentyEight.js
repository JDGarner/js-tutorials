import React, { useState } from 'react';

// TODO:
// Add a button 'Back' on the forgot my password section, that takes you back to the sign in section
// If you haven't put any text in the password input, don't show the 'Show Password' button

const PartTwentyEight = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [incorrectLoginAttempts, setIncorrectLoginAttempts] = useState(0);
  const [clickedForgotMyPassword, setClickedForgotMyPassword] = useState(false);

  const onChangeUsername = (event) => {
    setUsername(event.target.value);
    console.log(username);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
    console.log(password);
  };

  const onClickSignIn = () => {
    console.log(`username: ${username} password: ${password}`);
    if (username === 'Felcraft' && password === 'creamy') {
      setIsSignedIn(true);
      setUsername('');
      setPassword('');
      setError('');
    } else {
      const newIncorrectLoginAttempt = incorrectLoginAttempts + 1;

      setIncorrectLoginAttempts(newIncorrectLoginAttempt);
      if (incorrectLoginAttempts < 3) {
        setError('Invalid username or password');
      } else {
        setError('Too many incorrect login attempts. Your account is locked for 5 minutes.');
      }
    }
  };

  const onClickToggleShowPassword = () => {
    // if showPassword is true, we want to set it to false
    // if showPassword is false, we want to set it to true

    // if (showPassword) {
    //   setShowPassword(false);
    // } else {
    //   setShowPassword(true);
    // }

    setShowPassword(!showPassword);
  };

  const passwordInputType = showPassword ? 'text' : 'password';

  const toggleShowPasswordText = showPassword ? 'Hide password' : 'Show password';

  const onClickLogOut = () => {
    setIsSignedIn(false);
  };

  const onClickResetPassword = () => {
    setClickedForgotMyPassword(true);
  };

  if (!isSignedIn) {
    if (clickedForgotMyPassword) {
      return (
        <div>
          <h5>Enter your e-mail to reset password</h5>
          <input type="text" />
          <button type="button">Submit</button>
        </div>
      );
    }

    return (
      <div>
        <h4>Enter your username and password to sign in</h4>
        <input type="text" onChange={onChangeUsername} value={username} />
        <input type={passwordInputType} onChange={onChangePassword} value={password} />
        <button type="button" onClick={onClickSignIn}>Sign In</button>
        <button type="button" onClick={onClickToggleShowPassword}>{toggleShowPasswordText}</button>
        <button type="button" onClick={onClickResetPassword}>Forgot password</button>
        <h5>{error}</h5>
      </div>
    );
  }

  return (
    <div>
      <h5>Welcome Felcraft!</h5>
      <button type="button" onClick={onClickLogOut}>Log out</button>
    </div>

  );
};

export default PartTwentyEight;
