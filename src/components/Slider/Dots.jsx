import React from "react";
import Dot from "./Dot";
import styles from "./styles/index.module.scss";
import PropTypes from "prop-types";

const Dots = ({ images, activeSlide }) => {
  return (
    <div className={styles.dots}>
      {images.map((image, i) => (
        <Dot key={image} active={activeSlide === i} />
      ))}
    </div>
  );
};

export default Dots;

Dot.propTypes = {
  active: PropTypes.bool,
};
