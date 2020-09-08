import React from "react";
import classNames from "classnames";
import classes from "./Input.module.scss";

const Input = ({ type, name, value, label, required, handleChange }) => {
  const labelStyles = classNames([classes.formInput__label], {
    [classes.formInput__label_up]: value.length > 0,
  });
  return (
    <div className={classes.formInput}>
      <input
        type={type}
        name={name}
        value={value}
        required={required}
        onChange={handleChange}
        className={classes.formInput__input}
      />
      {label && <label className={labelStyles}>{label}</label>}
    </div>
  );
};

export default Input;
