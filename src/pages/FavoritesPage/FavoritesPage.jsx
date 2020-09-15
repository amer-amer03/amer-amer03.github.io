import React from "react";
import classes from "./FavoritesPage.module.scss";
import CollectionItem from "../../components/Collection/CollectionItem";
import { useSelector } from "react-redux";

import { selectFavoriteItems } from "../../store/favorite/selectors";

const FavoritesPage = () => {
  const favoriteItems = useSelector(selectFavoriteItems);

  console.log(favoriteItems);
  return (
    <div className={classes.favoritesPage}>
      <h2 className={classes.favoritesPage__title}>Wishlist</h2>
      <div className={classes.favoritesPage__items}>
        {favoriteItems.map((item) => {
          return (
            <CollectionItem
              key={item.id}
              item={item}
              id={item.id}
              title={item.title}
              subtitle={item.subtitle}
              price={item.price}
              imageUrl={item.imageUrl}
              collectionId={item.collectionId}
            ></CollectionItem>
          );
        })}
      </div>
    </div>
  );
};

export default FavoritesPage;
