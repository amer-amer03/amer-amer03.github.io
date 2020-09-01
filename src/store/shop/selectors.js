import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectIsPending = createSelector(
  [selectShop],
  (shop) => shop.isPending
);

export const selectCollection = (collectionId) => {
  return createSelector(
    [selectCollections],
    (collections) => collections[collectionId]
  );
};

export const selectCollectionsPreview = createSelector(
  [selectCollections],
  (collections) =>
    Object.keys(collections).map(
      (collectionName) => collections[collectionName]
    )
);
