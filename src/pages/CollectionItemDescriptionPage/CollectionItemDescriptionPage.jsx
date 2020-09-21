import React from "react";
import { useSelector } from "react-redux";
import CollectionItemDescription from "../../components/Collection/CollectionItemDescription";
import { selectAllCollections } from "../../store/shop/selectors";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import classes from "./CollectionItemDescriptionPage.module.scss";

const CollectionItemDescriptionPage = () => {
  const collections = useSelector(selectAllCollections);
  const itemId = useParams().itemId;
  const collectionId = useParams().collectionId;

  return (
    <div className={classes.CollectionItemDescriptionPage}>
      <CollectionItemDescription
        title={collections[collectionId].items[itemId].title}
        key={collections[collectionId].items[itemId].id}
        id={collections[collectionId].items[itemId].id}
        subtitle={collections[collectionId].items[itemId].subtitle}
        price={collections[collectionId].items[itemId].price}
        imageUrl={collections[collectionId].items[itemId].imageUrl}
        images={collections[collectionId].items[itemId].images}
        info={collections[collectionId].items[itemId].info}
        size={collections[collectionId].items[itemId].size}
        color={collections[collectionId].items[itemId].color}
      />
    </div>
  );
};

CollectionItemDescription.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  subtitle: PropTypes.string,
  price: PropTypes.number,
  imageUrl: PropTypes.string,
  images: PropTypes.object,
  info: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
};

export default CollectionItemDescriptionPage;
