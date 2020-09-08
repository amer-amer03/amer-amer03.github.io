import React from "react";
import classes from "./styles/index.module.scss";

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
      className={classes.slide}
    ></div>
  );
};

export default Slide;
