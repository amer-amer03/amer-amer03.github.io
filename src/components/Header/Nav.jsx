import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import classes from "./styles/index.module.scss";

const Nav = ({ open }) => {
  const navListClasses = classNames(classes.nav__list, {
    [classes.nav__list_open]: !open,
  });
  return (
    <nav className={classes.nav}>
      <ul className={navListClasses}>
        <li className={classes.nav__item}>
          <Link to={`/`} className={classes.nav__link}>
            Home
          </Link>
        </li>
        <li className={classes.nav__item}>
          <Link to={`/women`} className={classes.nav__link}>
            Women's Clothing
          </Link>
        </li>
        <li className={classes.nav__item}>
          <Link to={`/men`} className={classes.nav__link}>
            Men's Clothing
          </Link>
        </li>
        <li className={classes.nav__item}>
          <Link to={`/kids`} className={classes.nav__link}>
            Kids' Clothing
          </Link>
        </li>
        <li className={classes.nav__item}>
          <Link to={`/womenshoes`} className={classes.nav__link}>
            Women's Shoes
          </Link>
        </li>
        <li className={classes.nav__item}>
          <Link to={`/menshoes`} className={classes.nav__link}>
            Men's Shoes
          </Link>
        </li>

        <li className={classes.nav__item}>
          <Link to={`/contacts`} className={classes.nav__link}>
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
