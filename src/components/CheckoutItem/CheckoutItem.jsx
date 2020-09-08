import React from "react";
import classes from "./CheckoutItem.module.scss";
import { useDispatch } from "react-redux";
import {
  removeCartItem,
  increaseCartItemQuantity,
  decreaseCartItemQuantity,
} from "../../store/cart/actions";

const CheckoutItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(removeCartItem(item));
  };
  const handleIncreaseItem = () => {
    dispatch(increaseCartItemQuantity(item));
  };
  const handleDecreaseItem = () => {
    dispatch(decreaseCartItemQuantity(item));
  };

  return (
    <div className={classes.checkoutItem}>
      <div className={classes.checkoutItem__imageContainer}>
        <img src={item.imageUrl} alt={item.name} />
      </div>
      <span className={classes.checkoutItem__name}>{item.name}</span>
      <span className={classes.checkoutItem__quantity}>
        <button
          onClick={handleDecreaseItem}
          className={classes.checkoutItem__quantityArrow}
        >
          &#10094;
        </button>

        <span className={classes.checkoutItem__quantityValue}>
          {item.quantity}
        </span>
        <button
          onClick={handleIncreaseItem}
          className={classes.checkoutItem__quantityArrow}
        >
          &#10095;
        </button>
      </span>
      <span className={classes.checkoutItem__price}>
        {(item.quantity * item.price).toFixed(2)} $
      </span>
      <button
        onClick={handleRemoveItem}
        className={classes.checkoutItem__removeButton}
      >
        &#10005;
      </button>
    </div>
  );
};

export default CheckoutItem;
