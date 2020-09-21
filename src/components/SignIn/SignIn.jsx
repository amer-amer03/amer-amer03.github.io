import React, { useState } from "react";
import Input from "../../components/Input/Input";
import Button from "../Button/Button";
import classes from "./SignIn.module.scss";
import { signInWithGoogle, auth } from "../../firebase/firebase";

const SignIn = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleSignInWithGoogle = () => {
    signInWithGoogle();
  };
  const handleChange = (event) => {
    const { name, value } = event.target;

    setState((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const clearForm = () => {
    setState({
      email: "",
      password: "",
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      clearForm();
    } catch (error) {
      alert(error);
      console.log(error);
    }
  };

  return (
    <div className={classes.signIn}>
      <h2>I already have an account</h2>
      <span> Sign in with your email and password </span>

      <form onSubmit={handleSubmit}>
        <Input
          type="email"
          name="email"
          required
          value={state.email}
          handleChange={handleChange}
          label="Email"
        />
        <Input
          type="password"
          name="password"
          required
          value={state.password}
          handleChange={handleChange}
          label="password"
        />
        <div className={classes.signIn__Button}>
          <Button type="submit">Sign In</Button>
        </div>
        <Button type="button" onClick={handleSignInWithGoogle}>
          Sign in with google
        </Button>
      </form>
    </div>
  );
};

export default SignIn;
