import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import CollectionItem from "../../components/Collection/CollectionItem";
import {
  selectCollection,
  selectCollectionsPreview,
} from "../../store/shop/selectors";
import { sortCollectionsByValue } from "../../store/shop/actions";
import classes from "./CollectionPage.module.scss";
import PropTypes from "prop-types";

const CollectionPage = () => {
  const { collectionId } = useParams();
  const collection = useSelector(selectCollection(collectionId));

  const dispatch = useDispatch();
  const handleClickSort = () => {
    dispatch(sortCollectionsByValue(collectionId));
  };

  return (
    <>
      {collection && (
        <div className={classes.collectionPage}>
          <h2 className={classes.collectionPage__title}>{collection.title}</h2>
          <div onClick={handleClickSort}>Sort</div>
          <div>
            Sort by
            <select>
              <option value="price_high_low">Price: High-low</option>
              <option value="price_low_high">Price: Low-High</option>
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
