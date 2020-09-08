import React, { useState } from "react";
import classes from "./CollectionItemDescription.module.scss";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { addCartItem } from "../../store/cart/actions";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";

const CollectionItemDescription = ({
  id,
  title,
  subtitle,
  price,
  imageUrl,
  images,
}) => {
  const dispatch = useDispatch();
  const [display, setDisplay] = useState("hidden");

  const handleAddItem = () => {
    setDisplay("visible");

    dispatch(
      addCartItem({
        id,
        title,
        price,
        imageUrl,
      })
    );
  };

  setTimeout(() => {
    setDisplay("hidden");
  }, 1000);

  return (
    <div className={classes.itemDescription}>
      <div className={classes.itemDescription__imageContainer}>
        <img
          src={imageUrl}
          className={classes.itemDescription__image}
          alt={title}
        />
        {Object.values(images).map((item) => {
          return (
            <img
              key={title}
              src={item}
              className={classes.itemDescription__image}
              alt={title}
            />
          );
        })}
      </div>
      <div className={classes.itemDescription__infoContainer}>
        <p className={classes.itemDescription__infoTitle}>{title}</p>
        <p className={classes.itemDescription__infoSubtitle}>{subtitle}</p>
        <p className={classes.itemDescription__infoPrice}>${price}</p>

        <p className={classes.itemDescription__info}>Description</p>
        <p className={classes.itemDescription__infoColor}>color</p>
        <div className={classes.itemDescription__infoSize}>SIZE ACCORDION</div>
        <div className={classes.itemDescription__infoDelivery}>
          DELIVERY ACCORDION
        </div>
        <div>
          <span
            style={{ visibility: display }}
            className={classes.itemDescription__popup}
          >
            Added to cart!
          </span>
          <Button
            onClick={handleAddItem}
            ButtonClassName={classes.collectionItem__button}
          >
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  ButtonClassName: PropTypes.string,
};

export default CollectionItemDescription;
