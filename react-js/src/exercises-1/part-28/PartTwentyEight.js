import React, { useState } from 'react';
import ForgotMyPassword from './ForgotMyPassword';
import Homepage from './Homepage';
import SignInPage from './SignInPage';
import Registration from './Registration';
import RegistrationForm from './RegistrationForm';

const PartTwentyEight = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [signedInUsername, setSignedInUsername] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showForgotMyPassword, setShowForgotMyPassword] = useState(false);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [registeredUsers, setRegisteredUsers] = useState([]);

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

  const onSignInSuccess = (username) => {
    setIsSignedIn(true);
    setSignedInUsername(username);
  };

  const onClickLogOut = () => {
    setIsSignedIn(false);
  };

  const onClickForgotMyPassword = () => {
    setShowForgotMyPassword(true);
  };

  const onClickBackToLoginPage = () => {
    setShowForgotMyPassword(false);
    setShowRegistrationForm(false);
  };

  const onClickRegistrationForm = () => {
    setShowRegistrationForm(true);
  };

  const onClickRegister = (username, password) => {
    // create a new user object with the username & password we entered on the reg form
    const newUser = {
      username,
      password,
    };

    // creating a new array, that contains all the currently registered users + our new user object added onto the end
    const newUsers = [
      ...registeredUsers,
      newUser,
    ];

    // update our state variable, registeredUsers with the new users array
    setRegisteredUsers(newUsers);
    onClickBackToLoginPage(true);
  };

  if (!isSignedIn) {
    if (showForgotMyPassword) {
      return (
        <ForgotMyPassword
          onClickBackToLoginPage={onClickBackToLoginPage} />
      );
    }

    if (showRegistrationForm) {
      return (
        <RegistrationForm
          showRegistrationForm={showRegistrationForm}
          onClickBackToLoginPage={onClickBackToLoginPage}
          onClickRegister={onClickRegister} />
      );
    }

    return (
      <div>
        <SignInPage
          showPassword={showPassword}
          onClickToggleShowPassword={onClickToggleShowPassword}
          onClickForgotMyPassword={onClickForgotMyPassword}
          onSignInSuccess={onSignInSuccess}
          registeredUsers={registeredUsers} />
        <Registration
          onClickRegistrationForm={onClickRegistrationForm} />
      </div>

    );
  }

  return (
    <Homepage
      onClickLogOut={onClickLogOut}
      signedInUsername={signedInUsername} />
  );
};

export default PartTwentyEight;

// Ideas for future tasks:
// 1 - Make it so, you cannot register again with the same email
// show a message if someone tries to do this

// 2 - On welcome page, have an account settings section with
// a change password functionality

// 3 - If you're inactive on the page for X seconds, it logs you out and sends
// you to a 'You have been logged out' section, with a button to go back to sign in page
// NOTE - for this part you will have to use something new that you haven't used before
// so let me know if you're going to try this one and I can help get you started.

// Code snippet that we might need for part 3:
// useEffect(() => {
//   window.addEventListener("mousemove", onMouseMoveOrKeyPress);
//   window.addEventListener("onkeypress", onMouseMoveOrKeyPress);
//
//   return () => {
//     window.removeEventListener("mousemove", onMouseMoveOrKeyPress)
//     window.removeEventListener("onkeypress", onMouseMoveOrKeyPress)
//   };
// }, []);
