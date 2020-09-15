import { createSelector } from "reselect";

const selectFavorite = (state) => state.favorite;

export const selectFavoriteItems = createSelector(
  [selectFavorite],
  (favorite) => favorite.favoriteItems
);

export const selectFavoriteItemsQuantity = createSelector(
  [selectFavoriteItems],
  (favoriteItems) => favoriteItems.length
);

export const selectFavoriteItemId = createSelector(
  [selectFavoriteItems],
  (favoriteItems) =>
    favoriteItems.map((favoriteItems) => {
      return favoriteItems.id;
    })
);
