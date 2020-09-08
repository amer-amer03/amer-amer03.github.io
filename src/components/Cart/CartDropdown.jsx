import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { selectCartItems } from "../../store/cart/selectors";
import Button from "../Button/Button";
import CartItem from "./CartItem";
import classes from "./styles/index.module.scss";
import { toggleCartHidden } from "../../store/cart/actions";
import PropTypes from "prop-types";

const CartDropdown = () => {
  const { push } = useHistory();
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);

  const toggleCart = () => {
    dispatch(toggleCartHidden());
  };

  const handleGoToCheckoutPage = () => {
    toggleCart();
    push("/checkout");
  };

  return (
    <div className={classes.cartDropdown}>
      <div className={classes.cartDropdown__items}>
        {cartItems.length > 0 ? (
          cartItems.map((cartItem) => {
            return <CartItem key={cartItem.id} item={cartItem} />;
          })
        ) : (
          <span className={classes.cartDropdown__emptyMessage}>
            Your cart is empty
          </span>
        )}
      </div>
      <Button onClick={handleGoToCheckoutPage} buttonClassName={classes.button}>
        Go To Checkout
      </Button>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.object,
};

export default CartDropdown;
