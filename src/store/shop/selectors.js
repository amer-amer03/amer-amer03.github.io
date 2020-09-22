import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectAllCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectIsPending = createSelector(
  [selectShop],
  (shop) => shop.isPending
);

export const selectCollectionCategory = (collectionId) => {
  return createSelector(
    [selectAllCollections],
    (collections) => collections[collectionId]
  );
};

export const selectCollectionCategoryArray = (collectionItems) =>
  createSelector([selectAllCollections], () =>
    Object.keys(collectionItems).map(
      (collectionName) => collectionItems[collectionName]
    )
  );

export const selectAllCollectionsArray = createSelector(
  [selectAllCollections],
  (collections) =>
    Object.keys(collections).map(
      (collectionName) => collections[collectionName]
    )
);
