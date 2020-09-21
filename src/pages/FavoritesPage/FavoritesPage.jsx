import React from "react";
import classes from "./FavoritesPage.module.scss";
import CollectionItem from "../../components/Collection/CollectionItem";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { selectFavoriteItems } from "../../store/favorite/selectors";

const FavoritesPage = () => {
  const favoriteItems = useSelector(selectFavoriteItems);

  return (
    <div className={classes.favoritesPage}>
      <h2 className={classes.favoritesPage__title}>Wishlist</h2>

      {favoriteItems.length !== 0 ? (
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
      ) : (
        <h3 className={classes.favoritesPage__emptyMessage}>
          There is nothing here, yet.
        </h3>
      )}
    </div>
  );
};

CollectionItem.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  subtitle: PropTypes.string,
  price: PropTypes.number,
  imageUrl: PropTypes.string,
  images: PropTypes.object,
  collectionId: PropTypes.string,
};

export default FavoritesPage;
