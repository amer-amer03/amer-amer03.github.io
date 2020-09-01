import React from "react";
import { ReactComponent as CartIcon } from "../../assets/icons/cart_icon.svg";
import CartDropdown from "./CartDropdown";
import styles from "./styles/index.module.scss";
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
      <button className={styles.cart} onClick={toggleCart}>
        <CartIcon className={styles.cart__icon} />
        <span className={styles.cart__itemCount}>{cartItemsQuantity}</span>
      </button>
      {!isCartDropdownHidden && <CartDropdown />}
    </>
  );
};

export default Cart;
