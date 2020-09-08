import React from "react";
import { ReactComponent as CartIcon } from "../../assets/icons/cart_icon.svg";
import CartDropdown from "./CartDropdown";
import classes from "./styles/index.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { toggleCartHidden } from "../../store/cart/actions";
import {
  selectCartItemsQuantity,
  selectIsCartDropdownHidden,
} from "../../store/cart/selectors";

const Cart = () => {
  const dispatch = useDispatch();
  const isCartDropdownHidden = useSelector(selectIsCartDropdownHidden);
  const cartItemsQuantity = useSelector(selectCartItemsQuantity);

  const toggleCart = () => {
    dispatch(toggleCartHidden());
  };
  return (
    <>
      <button className={classes.cart} onClick={toggleCart}>
        <CartIcon className={classes.cart__icon} />
        <span className={classes.cart__itemCount}>{cartItemsQuantity}</span>
      </button>
      {!isCartDropdownHidden && <CartDropdown />}
    </>
  );
};

export default Cart;
