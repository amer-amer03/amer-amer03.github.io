import React from "react";
import classes from "./styles/index.module.scss";

const Dot = ({ active }) => {
  return (
    <span
      className={classes.dot}
      style={{ background: active ? "black" : "white" }}
    ></span>
  );
};

export default Dot;
