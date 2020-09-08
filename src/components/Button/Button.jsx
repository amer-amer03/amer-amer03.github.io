import React from "react";
import classNames from "classnames";
import classes from "./Button.module.scss";

const Button = ({ type, children, onClick, buttonClassName }) => {
  const buttonClasses = classNames(classes.button, buttonClassName);

  return (
    <button onClick={onClick} type={type} className={buttonClasses}>
      {children}
    </button>
  );
};

export default Button;
