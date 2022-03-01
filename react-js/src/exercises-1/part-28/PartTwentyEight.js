import React, { useState } from 'react';
import ForgotMyPassword from './ForgotMyPassword';
import Homepage from './Homepage';
import SignInPage from './SignInPage';
import Registration from './Registration';
import RegistrationForm from './RegistrationForm';

// TODO:
// Add a users state variable that is an empty array to start off with
// When you click on Submit on the registration form
// add that user object (an object that includes the username and password) to the users array
// Hint, you will need to use the ... operator (the spread or rest operator)
// and it will take you back to the login page

// You will have to change the sign in function to make it so it checks does that username and password
// exist in the users array (hint you can't use .includes to check if an object exists in an array of objects...)

// You will also have to change the welcome page to show the users name
// instead of 'Welcome Felcraft!'

const PartTwentyEight = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showForgotMyPassword, setShowForgotMyPassword] = useState(false);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);

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

  const onSignInSuccess = () => {
    setIsSignedIn(true);
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
          onClickBackToLoginPage={onClickBackToLoginPage} />
      );
    }

    return (
      <div>
        <SignInPage
          showPassword={showPassword}
          onClickToggleShowPassword={onClickToggleShowPassword}
          onClickForgotMyPassword={onClickForgotMyPassword}
          onSignInSuccess={onSignInSuccess} />
        <Registration
          onClickRegistrationForm={onClickRegistrationForm} />
      </div>

    );
  }

  return (
    <Homepage
      onClickLogOut={onClickLogOut} />
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
