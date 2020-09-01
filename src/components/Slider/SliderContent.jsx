import React from "react";
import Slide from "./Slide";
import PropTypes from "prop-types";

const SliderContent = ({ translate, transition, width, slides }) => {
  return (
    <div
      className={"SliderContent"}
      style={{
        transform: `translateX(-${translate}px)`,
        transition: `transform ease-out ${transition}s`,
        height: "100%",
        width: `${width}px`,
        display: "flex",
      }}
    >
      {slides.map((slide, i) => (
        <Slide key={slide + i} content={slide} />
      ))}
    </div>
  );
};

export default SliderContent;

Slide.propTypes = {
  content: PropTypes.string,
};
