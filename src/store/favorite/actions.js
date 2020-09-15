import { ADD_FAVORITE_ITEM, REMOVE_FAVORITE_ITEM } from "./consts";

export const addFavoriteItem = (item) => {
  return {
    type: ADD_FAVORITE_ITEM,
    payload: item,
  };
};

export const removeFavoriteItem = (item) => {
  return {
    type: REMOVE_FAVORITE_ITEM,
    payload: item,
  };
};
