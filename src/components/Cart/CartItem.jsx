import React from "react";
import styles from "./styles/index.module.scss";

const CartItem = ({ item }) => {
  return (
    <div className={styles.cartItem}>
      <img src={item.imageUrl} alt={item.name} />
      <div className={styles.cartItem__details}>
        <span className={styles.cartItem__name}> {item.name} </span>
        <span className={styles.cartItem__price}> {item.price}$ </span>
      </div>
    </div>
  );
};

export default CartItem;
