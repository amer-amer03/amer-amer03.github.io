import React from "react";
import { useSelector } from "react-redux";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import classes from "./CheckoutPage.module.scss";
import {
  selectCartItems,
  selectCartItemsTotalPrice,
} from "../../store/cart/selectors";
import PropTypes from "prop-types";

const CheckoutPage = () => {
  const cartItems = useSelector(selectCartItems);
  const cartItemsTotalPrice = useSelector(selectCartItemsTotalPrice);

  return (
    <div className={classes.checkoutPage}>
      <div className={classes.checkoutPage__header}>
        <div className={classes.checkoutPage_headerBlock}>
          <span>Product</span>
        </div>
        <div className={classes.checkoutPage_headerBlock}>
          <span>Description</span>
        </div>
        <div className={classes.checkoutPage_headerBlock}>
          <span>Quantity</span>
        </div>
        <div className={classes.checkoutPage_headerBlock}>
          <span>Price</span>
        </div>
        <div className={classes.checkoutPage_headerBlock}>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => {
        return <CheckoutItem key={cartItem.id} item={cartItem} />;
      })}
      <div className={classes.checkoutPage__total}>
        {`Total: $${cartItemsTotalPrice.toFixed(2)}`}
      </div>
    </div>
  );
};

export default CheckoutPage;

CheckoutItem.propTypes = {
  item: PropTypes.object,
};
