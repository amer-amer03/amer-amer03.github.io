export const addFavoriteItem = (allFavoriteItems, currentFavoriteItem) => {
  let updatedItems = [];
  const itemExist = allFavoriteItems.find((favoriteItem) => {
    return favoriteItem.id === currentFavoriteItem.id;
  });
  if (itemExist) {
    return (updatedItems = allFavoriteItems.filter(
      (favoriteItem) => favoriteItem.id !== currentFavoriteItem.id
    ));
  } else {
    updatedItems = [...allFavoriteItems, currentFavoriteItem];
  }
  return updatedItems;
};

export const removeFavoriteItem = (allFavoriteItems, currentFavoriteItem) => {
  return allFavoriteItems.filter(
    (favoriteItem) => favoriteItem.id !== currentFavoriteItem.id
  );
};
