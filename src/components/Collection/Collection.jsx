import React from "react";
import { useSelector } from "react-redux";
import CollectionPreview from "./CollectionPreview";
import classes from "./styles/Collection.module.scss";
import { selectCollectionsCategory } from "../../store/shop/selectors";
import PropTypes from "prop-types";
const Collection = () => {
  const CollectionsCategory = useSelector(selectCollectionsCategory);
  return (
    <div className={classes.collection}>
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

CollectionPreview.propTypes = {
  title: PropTypes.string,
  items: PropTypes.string,
  routeName: PropTypes.string,
};

export default Collection;
