import React from "react";
import PropTypes from "prop-types";
import classes from "./styles/index.module.scss";
import ArrowIcon from "../../assets/icons/next.svg";

const Arrow = ({ prevSlide, nextSlide }) => {
  return (
    <div className={classes.arrows__Container}>
      <button onClick={prevSlide} className={classes.arrow__ContainerLeft}>
        <img className={classes.arrow__arrowIconLeft} src={ArrowIcon} alt="" />
      </button>
      <button onClick={nextSlide} className={classes.arrow__ContainerRight}>
        <img className={classes.arrow__arrowIconRight} src={ArrowIcon} alt="" />
      </button>
    </div>
  );
};

Arrow.propTypes = {
  nextSlide: PropTypes.func,
  prevSlide: PropTypes.func,
};

export default Arrow;
