import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/selectors";
import Cart from "../Cart/Cart";
import Button from "../Button/Button";

import styles from "./Header.module.scss";

const Header = () => {
  const currentUser = useSelector(selectCurrentUser);

  const handleSignOut = () => {
    auth.signOut();
  };

  return (
    <header>
      <div className={styles.headerTop}>
        {currentUser ? (
          <button className={styles.signOutButton} onClick={handleSignOut}>
            Sign out
          </button>
        ) : (
          <Link to="/signin" className={styles.signIn}>
            Sign In / Sign Up
          </Link>
        )}
        <Cart />
      </div>
      <div className={styles.headerBottom}>
        <div className={styles.headerContainer}>
          <div className={styles.logoContainer}>
            <Link to={`/`} className={styles.logoText}>
              urban wear
            </Link>
          </div>
        </div>
        <nav className={styles.headerContainer && styles.headerContainer_nav}>
          <ul className={styles.nav__list}>
            <li className={styles.nav__item}>
              <Link to={`/`} className={styles.nav__link}>
                Home
              </Link>
            </li>
            <li className={styles.nav__item}>
              <Link to={`/women`} className={styles.nav__link}>
                Women's Clothing
              </Link>
            </li>
            <li className={styles.nav__item}>
              <Link to={`/men`} className={styles.nav__link}>
                Men's Clothing
              </Link>
            </li>
            <li className={styles.nav__item}>
              <Link to={`/kids`} className={styles.nav__link}>
                Kids' Clothing
              </Link>
            </li>
            <li className={styles.nav__item}>
              <Link to={`/shoes`} className={styles.nav__link}>
                Shoes
              </Link>
            </li>

            <li className={styles.nav__item}>
              <Link to={`/contacts`} className={styles.nav__link}>
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.headerContainer}>
          <form>
            <input type="text" placeholder="Search.." name="search" />
            <button type="submit"></button>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
