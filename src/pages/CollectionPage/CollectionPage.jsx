import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import CollectionItem from "../../components/Collection/CollectionItem";
import {
  selectCollectionCategory,
  selectCollectionCategoryArray,
} from "../../store/shop/selectors";

import { sortCollectionsByValue } from "../../store/shop/actions";
import classes from "./CollectionPage.module.scss";
import PropTypes from "prop-types";

const CollectionPage = () => {
  const dispatch = useDispatch();

  const { collectionId } = useParams();

  const collection = useSelector(selectCollectionCategory(collectionId));

  const collectionArr = useSelector(
    selectCollectionCategoryArray(collection.items)
  );

  const handleSortByValue = (e) => {
    dispatch(sortCollectionsByValue(collectionId, e.target.value));
  };

  return (
    <>
      {collection && (
        <div className={classes.collectionPage}>
          <div className={classes.collectionPage__titleContainer}>
            <h2 className={classes.collectionPage__title}>
              {collection.title}
            </h2>
            <div className={classes.collectionPage__selectContainer}>
              <select
                className={classes.collectionPage__select}
                onChange={handleSortByValue}
              >
                <option
                  className={classes.collectionPage__selectOption}
                  value="sel"
                >
                  Sort By
                </option>
                <option
                  className={classes.collectionPage__selectOption}
                  value="des"
                >
                  Price: High-low
                </option>
                <option
                  className={classes.collectionPage__selectOption}
                  value="asc"
                >
                  Price: Low-High
                </option>
              </select>
            </div>
          </div>
          <div className={classes.collectionPage__items}>
            {collectionArr.map((item) => {
              return (
                <CollectionItem
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  subtitle={item.subtitle}
                  price={item.price}
                  imageUrl={item.imageUrl}
                  collectionId={item.collectionId}
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

CollectionItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  price: PropTypes.number,
  imageUrl: PropTypes.string,
};

export default CollectionPage;
