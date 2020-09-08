import React from "react";
import classes from "./styles/index.module.scss";

const CartItem = ({ item }) => {
  return (
    <div className={classes.cartItem}>
      <img src={item.imageUrl} alt={item.title} />
      <div className={classes.cartItem__details}>
        <span className={classes.cartItem__name}> {item.title} </span>
        <span className={classes.cartItem__price}>
          {item.quantity} x {item.price.toFixed(2)}$
        </span>
      </div>
    </div>
  );
};

export default CartItem;
