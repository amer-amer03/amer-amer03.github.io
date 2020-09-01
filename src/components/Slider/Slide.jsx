import React from "react";
import styles from "./styles/index.module.scss";

const Slide = ({ content }) => {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        backgroundImage: `url(${content})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className={styles.slide}
    ></div>
  );
};

export default Slide;
