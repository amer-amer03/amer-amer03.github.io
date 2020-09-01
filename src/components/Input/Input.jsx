import React from "react";
import classNames from "classnames";
import styles from "./Input.module.scss";

const Input = ({ type, name, value, label, required, handleChange }) => {
  const labelStyles = classNames([styles.formInput__label], {
    [styles.formInput__label_up]: value.length > 0,
  });
  return (
    <div className={styles.formInput}>
      <input
        type={type}
        name={name}
        value={value}
        required={required}
        onChange={handleChange}
        className={styles.formInput__input}
      />
      {label && <label className={labelStyles}>{label}</label>}
    </div>
  );
};

export default Input;
