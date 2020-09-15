import React, { useState } from "react";
import Button from "../Button/Button";
import classNames from "classnames";
import classes from "./Accordion.module.scss";
import PropTypes from "prop-types";
import { useRef } from "react";

const Accordion = ({ title, children }) => {
  const [showAccordion, setShowAccordion] = useState(false);
  const [height, setHeightState] = useState("");

  const content = useRef(null);

  const handleShowAccordion = () => {
    setShowAccordion(!showAccordion);
    setHeightState(content.current.scrollHeight);
  };

  const arrowStyles = classNames(classes.arrow, {
    [classes.arrow_down]: !showAccordion,
  });

  return (
    <div>
      <Button
        onClick={handleShowAccordion}
        buttonClassName={classes.buttonClassName}
      >
        <div className={classes.accordion}>
          <div>{title}</div>
          <div className={classes.arrowContainer}>
            <p className={arrowStyles}></p>
          </div>
        </div>
      </Button>
      <div
        ref={content}
        style={{
          maxHeight: !showAccordion ? "0" : height,
        }}
        className={classes.itemDescription__infoSize}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
