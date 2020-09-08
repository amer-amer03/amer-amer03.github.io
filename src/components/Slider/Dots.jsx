import React from "react";
import Dot from "./Dot";
import classes from "./styles/index.module.scss";
import PropTypes from "prop-types";

const Dots = ({ images, activeSlide }) => {
  return (
    <div className={classes.dots}>
      {images.map((image, i) => (
        <Dot key={image} active={activeSlide === i} />
      ))}
    </div>
  );
};

Dot.propTypes = {
  active: PropTypes.bool,
};

export default Dots;
