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
import styles from "./CollectionPage.module.scss";
import PropTypes from "prop-types";

const CollectionPage = () => {
  const { collectionId } = useParams();
  const collection = useSelector(selectCollection(collectionId));
  const collections = useSelector(selectCollections);
  const collectionsPreview = useSelector(selectCollectionsPreview);
  console.log(collectionsPreview);

  const dispatch = useDispatch();
  const handleClickSort = () => {
    if (collection) dispatch(sortCollectionsByValue(collections));

    console.log(dispatch(sortCollectionsByValue(collections)));
  };

  return collection ? (
    <div className={styles.collectionPage}>
      <h2 className={styles.collectionPage__title}> {collection.title}</h2>
      <div>
        Sort by
        <select>
          <option value="price_high_low">Price: High-low</option>
          <option value="price_low_high">Price: Low-High</option>
        </select>
      </div>
      <div className={styles.collectionPage__items}>
        {collection.items.map((item) => {
          return (
            <CollectionItem
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              imageUrl={item.imageUrl}
            />
          );
        })}
      </div>
    </div>
  ) : null;
};

export default CollectionPage;

CollectionItem.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  price: PropTypes.number,
  imageUrl: PropTypes.string,
};
