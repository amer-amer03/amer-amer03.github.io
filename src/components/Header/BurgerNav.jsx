import React, { useState } from "react";
import classNames from "classnames";
import classes from "./styles/index.module.scss";
import { Link } from "react-router-dom";

const BurgerNav = () => {
  const [open, setOpen] = useState(false);

  const handleToggleMenu = () => {
    setOpen(!open);
  };
  const handleCloseMenu = () => {
    setOpen(false);
  };

  const burgerLineClasses = classNames(classes.burger__lines, {
    [classes.burger__lines_open]: open,
  });
  const navListClasses = classNames(classes.nav__list, {
    [classes.nav__list_open]: !open,
  });
  return (
    <>
      {open && (
        <div
          onClick={handleToggleMenu}
          className={classes.modalBackground}
        ></div>
      )}
      <div onClick={handleToggleMenu} className={classes.burger}>
        <div className={burgerLineClasses} />
        <div className={burgerLineClasses} />
        <div className={burgerLineClasses} />
      </div>
      <nav className={classes.nav}>
        <ul className={navListClasses}>
          <li className={classes.nav__item}>
            <Link
              to={`/`}
              replace
              className={classes.nav__link}
              onClick={handleCloseMenu}
            >
              Home
            </Link>
          </li>
          <li className={classes.nav__item}>
            <Link
              replace
              to={`/women`}
              className={classes.nav__link}
              onClick={handleCloseMenu}
            >
              Women's Clothing
            </Link>
          </li>
          <li className={classes.nav__item}>
            <Link
              replace
              to={`/men`}
              className={classes.nav__link}
              onClick={handleCloseMenu}
            >
              Men's Clothing
            </Link>
          </li>
          <li className={classes.nav__item}>
            <Link
              replace
              to={`/kids`}
              className={classes.nav__link}
              onClick={handleCloseMenu}
            >
              Kids' Clothing
            </Link>
          </li>
          <li className={classes.nav__item}>
            <Link
              replace
              to={`/womenshoes`}
              className={classes.nav__link}
              onClick={handleCloseMenu}
            >
              Women's Shoes
            </Link>
          </li>
          <li className={classes.nav__item}>
            <Link
              replace
              to={`/menshoes`}
              className={classes.nav__link}
              onClick={handleCloseMenu}
            >
              Men's Shoes
            </Link>
          </li>

          <li className={classes.nav__itemImage}>
            {open && (
              <img
                height="200px"
                src="https://i.imgur.com/TxyYTHG.png"
                alt="nike logo"
              />
            )}
          </li>
        </ul>
      </nav>
    </>
  );
};

export default BurgerNav;
