import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import CollectionItem from "../../components/Collection/CollectionItem";
import {
  selectCollection,
  selectCollections,
  selectCollectionsPreview,
} from "../../store/shop/selectors";
import { sortCollectionsByValue } from "../../store/shop/actions";
import classes from "./CollectionPage.module.scss";
import PropTypes from "prop-types";

const CollectionPage = () => {
  const { collectionId } = useParams();
  const dispatch = useDispatch();

  const collection = useSelector(selectCollection(collectionId));

  const handleSortByValue = (e) => {
    dispatch(sortCollectionsByValue(collectionId, e.target.value));
  };
  return (
    <>
      {collection && (
        <div className={classes.collectionPage}>
          <h2 className={classes.collectionPage__title}>{collection.title}</h2>
          <div>
            Sort by
            <select onChange={handleSortByValue}>
              <option selected disabled value="sort">
                Sort By
              </option>
              <option value="des">Price: High-low</option>
              <option value="asc">Price: Low-High</option>
            </select>
          </div>
          <div className={classes.collectionPage__items}>
            {Object.keys(collection.items).map((item) => {
              return (
                <CollectionItem
                  key={collection.items[item].id}
                  id={collection.items[item].id}
                  title={collection.items[item].title}
                  subtitle={collection.items[item].subtitle}
                  price={collection.items[item].price}
                  imageUrl={collection.items[item].imageUrl}
                  collectionId={collectionId}
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
