import React from "react";
import LeftArrow from "../../assets/icons/left_arrow.svg";
import RightArrow from "../../assets/icons/right_arrow.svg";
import styles from "./styles/index.module.scss";

const Arrow = ({ prevSlide, nextSlide }) => {
  return (
    <div className={styles.arrows__Container}>
      <button onClick={prevSlide} className={styles.arrow__ContainerLeft}>
        <img className={styles.arrow__image} src={LeftArrow} alt="Left Arrow" />
      </button>
      <button onClick={nextSlide} className={styles.arrow__ContainerRight}>
        <img
          className={styles.arrow__image}
          src={RightArrow}
          alt="Right Arrow"
        />
      </button>
    </div>
  );
};

export default Arrow;
