import React from "react";
import PropTypes from "prop-types";
import LeftArrow from "../../assets/icons/left_arrow.svg";
import RightArrow from "../../assets/icons/right_arrow.svg";
import classes from "./styles/index.module.scss";

const Arrow = ({ prevSlide, nextSlide }) => {
  return (
    <div className={classes.arrows__Container}>
      <button onClick={prevSlide} className={classes.arrow__ContainerLeft}>
        <img
          className={classes.arrow__image}
          src={LeftArrow}
          alt="Left Arrow"
        />
      </button>
      <button onClick={nextSlide} className={classes.arrow__ContainerRight}>
        <img
          className={classes.arrow__image}
          src={RightArrow}
          alt="Right Arrow"
        />
      </button>
    </div>
  );
};

Arrow.propTypes = {
  nextSlide: PropTypes.func,
  prevSlide: PropTypes.func,
};

export default Arrow;
