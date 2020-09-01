import React from "react";
import Styles from "./styles/index.module.scss";

const Dot = ({ active }) => {
  return (
    <span
      className={Styles.dot}
      style={{ background: active ? "black" : "white" }}
    ></span>
  );
};

export default Dot;
