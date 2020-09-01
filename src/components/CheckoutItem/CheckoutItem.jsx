import React from "react";
import styles from "./CheckoutItem.module.scss";
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
    <div className={styles.checkoutItem}>
      <div className={styles.checkoutItem__imageContainer}>
        <img src={item.imageUrl} alt={item} />
      </div>
      <span className={styles.checkoutItem__name}>{item.name}</span>
      <span className={styles.checkoutItem__quantity}>
        <button
          onClick={handleDecreaseItem}
          className={styles.checkoutItem__quantityArrow}
        >
          &#10094;
        </button>

        <span className={styles.checkoutItem__quantityValue}>
          {item.quantity}
        </span>
        <button
          onClick={handleIncreaseItem}
          className={styles.checkoutItem__quantityArrow}
        >
          &#10095;
        </button>
      </span>
      <span className={styles.checkoutItem__price}> {item.price} </span>
      <button
        onClick={handleRemoveItem}
        className={styles.checkoutItem__removeButton}
      >
        &#10005;
      </button>
    </div>
  );
};

export default CheckoutItem;
