import React, { useState } from "react";
import SliderContent from "./SliderContent";
import Arrow from "./Arrow";
import Dots from "./Dots";
import classes from "./styles/index.module.scss";
import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const getWidth = () => window.innerWidth;

const Slider = ({ images, autoPlay }) => {
  const firstSlide = images[0];
  const secondSlide = images[1];
  const lastSlide = images[images.length - 1];

  const [state, setState] = useState({
    activeSlide: 0,
    translate: getWidth(),
    transition: 0.45,
    slides: [lastSlide, firstSlide, secondSlide],
  });

  const { translate, transition, activeSlide, slides } = state;

  const autoPlayRef = useRef();
  const transitionRef = useRef();
  const resizeRef = useRef();

  useEffect(() => {
    autoPlayRef.current = nextSlide;
    transitionRef.current = smoothTransition;
    resizeRef.current = handleResize;
  });

  useEffect(() => {
    const play = () => {
      autoPlayRef.current();
    };
    const smooth = (e) => {
      if (e.target.className.includes("SliderContent")) {
        transitionRef.current();
      }
    };

    const resize = () => {
      resizeRef.current();
    };

    const transitionEnd = window.addEventListener("transitionend", smooth);

    const onResize = window.addEventListener("resize", resize);

    let interval = null;
    if (autoPlay) {
      interval = setInterval(play, autoPlay * 1000);
    }
    return () => {
      window.removeEventListener("transitionend", transitionEnd);
      window.removeEventListener("resize", onResize);
      if (autoPlay) {
        clearInterval(interval);
      }
    };
  }, [autoPlay]);

  useEffect(() => {
    if (transition === 0) setState({ ...state, transition: 0.45 });
  }, [transition, state]);

  const handleResize = () => {
    setState({ ...state, translate: getWidth(), transition: 0 });
  };

  const smoothTransition = () => {
    let slides = [];
    if (activeSlide === images.length - 1)
      slides = [images[images.length - 2], lastSlide, firstSlide];
    else if (activeSlide === 0) slides = [lastSlide, firstSlide, secondSlide];
    else slides = images.slice(activeSlide - 1, activeSlide + 2);

    setState({
      ...state,
      slides,
      transition: 0,
      translate: getWidth(),
    });
  };

  const nextSlide = () => {
    setState({
      ...state,
      translate: translate + getWidth(),
      activeSlide: activeSlide === images.length - 1 ? 0 : activeSlide + 1,
    });
  };

  const prevSlide = () => {
    setState({
      ...state,
      translate: 0,
      activeSlide: activeSlide === 0 ? images.length - 1 : activeSlide - 1,
    });
  };

  return (
    <div className={classes.slider}>
      <SliderContent
        slides={slides}
        translate={translate}
        transition={transition}
        width={getWidth() * slides.length}
      ></SliderContent>
      <Arrow nextSlide={nextSlide} prevSlide={prevSlide} />

      <Dots images={images} activeSlide={activeSlide} />
    </div>
  );
};

SliderContent.propTypes = {
  slides: PropTypes.array,
  translate: PropTypes.number,
  transition: PropTypes.number,
  width: PropTypes.number,
};
Arrow.propTypes = {
  nextSlide: PropTypes.func,
  prevSlide: PropTypes.func,
};

export default Slider;
