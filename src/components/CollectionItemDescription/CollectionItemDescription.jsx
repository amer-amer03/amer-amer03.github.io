import React, { useState } from "react";
import classes from "./CollectionItemDescription.module.scss";
import Button from "../Button/Button";
import { useParams } from "react-router-dom";
import Accordion from "../Accordion/Accordion";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFavoriteItems,
  selectFavoriteItemId,
} from "../../store/favorite/selectors";
import { addCartItem } from "../../store/cart/actions";
import { addFavoriteItem } from "../../store/favorite/actions";
import PropTypes from "prop-types";

const CollectionItemDescription = ({
  id,
  title,
  subtitle,
  price,
  imageUrl,
  images,
  info,
  size,
  color,
}) => {
  const dispatch = useDispatch();
  const [displayPopUp, setDisplayPopUp] = useState("none");
  const { collectionId } = useParams();
  const favoriteItemId = useSelector(selectFavoriteItemId);

  const handleAddItem = () => {
    setDisplayPopUp("block");
    dispatch(
      addCartItem({
        id,
        title,
        price,
        imageUrl,
      })
    );
  };
  const handleAddToFavorite = () => {
    dispatch(
      addFavoriteItem({
        id,
        title,
        subtitle,
        price,
        imageUrl,
        collectionId,
      })
    );
  };

  setTimeout(() => {
    setDisplayPopUp("none");
  }, 2000);

  return (
    <div className={classes.itemDescription}>
      <div className={classes.itemDescription__imageContainer}>
        <img
          src={imageUrl}
          className={classes.itemDescription__image}
          alt={title}
        />
        {Object.values(images).map((item, i) => {
          return (
            <img
              key={title + i}
              src={item}
              className={classes.itemDescription__image}
              alt={title}
            />
          );
        })}
      </div>
      <div className={classes.itemDescription__infoContainer}>
        <div className={classes.itemDescription__infoName}>
          <div>
            <p className={classes.itemDescription__infoSubtitle}>{subtitle}</p>
            <p className={classes.itemDescription__infoTitle}>{title}</p>
          </div>
          <p className={classes.itemDescription__infoPrice}>${price}</p>
        </div>
        <div className={classes.itemDescription__buttonContainer}>
          <div
            style={{ display: displayPopUp }}
            className={classes.itemDescription__popup}
          >
            Added to Bag!
          </div>
          <Button
            onClick={handleAddItem}
            buttonClassName={classes.collectionItem__AddButton}
          >
            Add to Bag
          </Button>
        </div>
        <Button
          onClick={handleAddToFavorite}
          buttonClassName={classes.collectionItem__FavoriteButton}
        >
          Favorite
          {favoriteItemId.includes(id) ? (
            <span className={classes.collectionItem__heartBlack}>&#9829;</span>
          ) : (
            <span className={classes.collectionItem__heartWhite}>&#9825;</span>
          )}
        </Button>
        <p className={classes.itemDescription__info}>{info}</p>
        <p className={classes.itemDescription__infoColor}>
          Colour Shown: {color}
        </p>
        {size.length > 0 && (
          <Accordion title="Size & Fit">
            <p>{size}</p>
          </Accordion>
        )}
        <Accordion title="Free Delivery and Returns">
          <p>Free standard delivery with your Nike Membership.</p>
          <ul>
            <li>
              Delivery may take longer than normal. Check your estimated
              delivery date at checkout.
            </li>
            <li>
              You can return your order for any reason, free of charge, within
              60 days.
            </li>
          </ul>
        </Accordion>
      </div>
    </div>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  ButtonClassName: PropTypes.string,
};

export default CollectionItemDescription;
