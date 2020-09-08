import React from "react";
import { useSelector } from "react-redux";
import CollectionItemDescription from "../../components/CollectionItemDescription/CollectionItemDescription";
import { selectCollections } from "../../store/shop/selectors";
import { useParams } from "react-router-dom";
import classes from "./CollectionItemDescriptionPage.module.scss";

const CollectionItemDescriptionPage = () => {
  const collections = useSelector(selectCollections);
  const itemId = useParams().itemId;
  const collectionId = useParams().collectionId;

  console.log(collections[collectionId].items[itemId]);

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
      />
    </div>
  );
};

export default CollectionItemDescriptionPage;
