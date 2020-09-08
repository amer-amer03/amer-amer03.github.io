import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/selectors";
import Cart from "../Cart/Cart";
import Burger from "./Burger";
import classes from "./styles/index.module.scss";

const Header = () => {
  const currentUser = useSelector(selectCurrentUser);

  const handleSignOut = () => {
    auth.signOut();
  };

  return (
    <header>
      <div className={classes.headerTop}>
        {currentUser ? (
          <button className={classes.signOutButton} onClick={handleSignOut}>
            Sign out
          </button>
        ) : (
          <Link to="/signin" className={classes.signIn}>
            Sign In / Sign Up
          </Link>
        )}
        <Cart />
      </div>
      <div className={classes.headerBottom}>
        <div className={classes.headerContainer}>
          <div className={classes.logoContainer}>
            <Link to={`/`} className={classes.logoText}>
              urban wear
            </Link>
          </div>
        </div>

        <Burger />
      </div>
    </header>
  );
};

export default Header;
