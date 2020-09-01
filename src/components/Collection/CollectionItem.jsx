import React, { useState } from "react";
import styles from "./styles/index.module.scss";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { addCartItem } from "../../store/cart/actions";
import PropTypes from "prop-types";

const CollectionItem = ({ id, name, price, imageUrl }) => {
  const dispatch = useDispatch();
  const [display, setDisplay] = useState("hidden");

  const handleAddItem = () => {
    setDisplay("visible");

    dispatch(
      addCartItem({
        id,
        name,
        price,
        imageUrl,
      })
    );
  };

  setTimeout(() => {
    setDisplay("hidden");
  }, 1000);

  return (
    <div className={styles.collectionItem}>
      <div
        className={styles.collectionItem__image}
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      <div className={styles.collectionItem__footer} key={id}>
        <span className={styles.collectionItem__name}>{name} </span>
        <span className={styles.collectionItem__price}> {price}$</span>
        <span
          style={{ visibility: display }}
          className={styles.collectionItem__popup}
        >
          Added to cart!
        </span>
      </div>

      <Button
        onClick={handleAddItem}
        ButtonClassName={styles.collectionItem__button}
      >
        Add to cart
      </Button>
    </div>
  );
};

export default CollectionItem;

Button.propTypes = {
  onClick: PropTypes.func,
  ButtonClassName: PropTypes.string,
};
