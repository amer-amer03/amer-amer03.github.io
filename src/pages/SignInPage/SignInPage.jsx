import React from "react";
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";
import styles from "./SignInPage.module.scss";

const SignInPage = () => {
  return (
    <div className={styles.signContainer}>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInPage;
