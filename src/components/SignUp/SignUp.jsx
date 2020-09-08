import React, { useState } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import classes from "./SignUp.module.scss";
import { auth, createUserProfileDocument } from "../../firebase/firebase";

const defaultFormValues = {
  email: "",
  password: "",
  displayName: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [state, setState] = useState(defaultFormValues);

  const clearForm = () => {
    setState(defaultFormValues);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setState((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
  const { displayName, email, password, confirmPassword } = state;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      return alert("Password does not match");
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName: displayName });
      clearForm();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={classes.signUp}>
      <h2> I do not have an account </h2>
      <span> Sign up with your email and password </span>
      <form onSubmit={handleSubmit}>
        <Input
          name="displayName"
          type="text"
          value={displayName}
          required
          handleChange={handleChange}
          label="Display name"
        />
        <Input
          name="email"
          type="email"
          value={email}
          required
          handleChange={handleChange}
          label="Email"
        />
        <Input
          name="password"
          type="password"
          value={password}
          required
          handleChange={handleChange}
          label="Password"
        />
        <Input
          name="confirmPassword"
          type="password"
          value={confirmPassword}
          required
          handleChange={handleChange}
          label="Confirm password"
        />
        <Button type="submit">Sign up</Button>
      </form>
    </div>
  );
};

export default SignUp;
