import React from "react";
import { useSelector } from "react-redux";
import CollectionPreview from "./CollectionPreview";
import styles from "./styles/Collection.module.scss";
import { selectCollectionsPreview } from "../../store/shop/selectors";
import PropTypes from "prop-types";
const Collection = () => {
  const collectionsPreview = useSelector(selectCollectionsPreview);

  return (
    <div className={styles.collection}>
      {collectionsPreview.map((item) => {
        return (
          <CollectionPreview
            key={item.id}
            title={item.title}
            items={item.items}
            routeName={item.routeName}
          />
        );
      })}
    </div>
  );
};

export default Collection;

CollectionPreview.propTypes = {
  title: PropTypes.string,
  items: PropTypes.string,
  routeName: PropTypes.string,
};
