import React, { useState } from 'react';

const SignInPage = ({
  showPassword,
  onClickForgotMyPassword,
  onClickToggleShowPassword,
  onSignInSuccess,
}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [incorrectLoginAttempts, setIncorrectLoginAttempts] = useState(0);

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
      onSignInSuccess();
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

  const passwordInputType = showPassword ? 'text' : 'password';

  const toggleShowPasswordText = showPassword ? 'Hide password' : 'Show password';

  return (
    <div>
      <h4>Enter your username and password to sign in</h4>
      <input type="text" onChange={onChangeUsername} value={username} />
      <input type={passwordInputType} onChange={onChangePassword} value={password} />
      <button type="button" onClick={onClickSignIn}>Sign In</button>
      {password.length > 0
        ? <button type="button" onClick={onClickToggleShowPassword}>{toggleShowPasswordText}</button>
        : null
        }
      <button type="button" onClick={onClickForgotMyPassword}>Forgot password</button>
      <h5>{error}</h5>
    </div>
  );
};

export default SignInPage;
