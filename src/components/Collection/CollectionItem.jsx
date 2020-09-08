import React, { useState } from "react";
import classes from "./styles/index.module.scss";
import Button from "../Button/Button";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";

const CollectionItem = ({ id, title, subtitle, price, imageUrl }) => {
  const { collectionId } = useParams();

  return (
    <div className={classes.collectionItem}>
      <Link
        to={`${collectionId}/${id}`}
        className={classes.collectionItem__image}
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      <div className={classes.collectionItem__footer} key={id}>
        <span className={classes.collectionItem__title}>{title} </span>
        <span className={classes.collectionItem__subtitle}>{subtitle} </span>

        <span className={classes.collectionItem__price}> {price}$</span>
      </div>
    </div>
  );
};

export default CollectionItem;
