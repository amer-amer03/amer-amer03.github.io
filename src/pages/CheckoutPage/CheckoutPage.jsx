import React from "react";
import { useSelector } from "react-redux";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import styles from "./CheckoutPage.module.scss";
import {
  selectCartItems,
  selectCartItemsTotalPrice,
} from "../../store/cart/selectors";
import PropTypes from "prop-types";

const CheckoutPage = () => {
  const cartItems = useSelector(selectCartItems);
  const cartItemsTotalPrice = useSelector(selectCartItemsTotalPrice);

  return (
    <div className={styles.checkoutPage}>
      <div className={styles.checkoutPage__header}>
        <div className={styles.checkoutPage_headerBlock}>
          <span>Product</span>
        </div>
        <div className={styles.checkoutPage_headerBlock}>
          <span>Description</span>
        </div>
        <div className={styles.checkoutPage_headerBlock}>
          <span>Quantity</span>
        </div>
        <div className={styles.checkoutPage_headerBlock}>
          <span>Price</span>
        </div>
        <div className={styles.checkoutPage_headerBlock}>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => {
        return <CheckoutItem key={cartItem.id} item={cartItem} />;
      })}
      <div className={styles.checkoutPage__total}>
        {`Total:$${cartItemsTotalPrice}`}
      </div>
    </div>
  );
};

export default CheckoutPage;

CheckoutItem.propTypes = {
  item: PropTypes.object,
};
