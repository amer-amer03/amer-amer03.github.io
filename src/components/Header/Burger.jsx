import React, { useState } from "react";
import classNames from "classnames";
import classes from "./styles/index.module.scss";
import Nav from "./Nav";

const Burger = () => {
  const [open, setOpen] = useState(false);

  const handleOpenMenu = () => {
    setOpen(!open);
    console.log(open);
  };

  const burgerLineClasses = classNames(classes.burger__lines, {
    [classes.burger__lines_open]: open,
  });
  return (
    <>
      <div onClick={handleOpenMenu} className={classes.burger}>
        <div className={burgerLineClasses} />
        <div className={burgerLineClasses} />
        <div className={burgerLineClasses} />
      </div>
      <Nav open={open} />
    </>
  );
};

export default Burger;
