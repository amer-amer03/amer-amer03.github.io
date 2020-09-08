import React from "react";
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";
import classes from "./SignInPage.module.scss";

const SignInPage = () => {
  return (
    <div className={classes.signContainer}>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInPage;
