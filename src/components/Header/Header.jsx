import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/selectors";
import Cart from "../Cart/Cart";
import Burger from "./Burger";
import classes from "./styles/index.module.scss";
import { selectFavoriteItemsQuantity } from "../../store/favorite/selectors";

const Header = () => {
  const currentUser = useSelector(selectCurrentUser);
  const FavoriteItemsQuantity = useSelector(selectFavoriteItemsQuantity);
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
        <Link to={`/favorite`} className={classes.whiteHeartContainer}>
          <div className={classes.favContainer}>
            <span className={classes.whiteHeart}>&#9825;</span>
            {FavoriteItemsQuantity !== 0 && (
              <span className={classes.fav__itemCount}>
                {FavoriteItemsQuantity}
              </span>
            )}
          </div>
        </Link>
        <Cart />
      </div>
      <div className={classes.headerBottom}>
        <div className={classes.headerContainer}>
          <div className={classes.logoContainer}></div>
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
