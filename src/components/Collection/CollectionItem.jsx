import React from "react";
import classes from "./styles/index.module.scss";
import { Link, useLocation } from "react-router-dom";
import { removeFavoriteItem } from "../../store/favorite/actions";
import { useDispatch } from "react-redux";
import Button from "../Button/Button";
const CollectionItem = ({
  item,
  id,
  title,
  subtitle,
  price,
  imageUrl,
  collectionId,
}) => {
  const location = useLocation().pathname;
  const dispatch = useDispatch();
  const handleRemoveFavoriteItem = () => {
    dispatch(removeFavoriteItem(item));
  };
  return (
    <div className={classes.collectionItem}>
      <Link
        to={`${collectionId}/${id}`}
        className={classes.collectionItem__imageContainer}
      >
        <img
          className={classes.collectionItem__image}
          src={imageUrl}
          alt={title}
        />
        <div className={classes.collectionItem__footer} key={id}>
          <span className={classes.collectionItem__title}>{title} </span>
          <span className={classes.collectionItem__subtitle}>{subtitle} </span>

          <span className={classes.collectionItem__price}> ${price}</span>
        </div>
      </Link>
      {location === "/favorite" && (
        <Button onClick={handleRemoveFavoriteItem}>Remove</Button>
      )}
    </div>
  );
};

export default CollectionItem;
