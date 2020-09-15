import { ADD_FAVORITE_ITEM, REMOVE_FAVORITE_ITEM } from "./consts";
import { addFavoriteItem, removeFavoriteItem } from "./utils";
const initialState = {
  favoriteItems: [],
};

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE_ITEM: {
      const updatedItems = addFavoriteItem(state.favoriteItems, action.payload);
      return {
        ...state,
        favoriteItems: updatedItems,
      };
    }
    case REMOVE_FAVORITE_ITEM: {
      const updatedItems = removeFavoriteItem(
        state.favoriteItems,
        action.payload
      );
      return {
        ...state,
        favoriteItems: updatedItems,
      };
    }
    default:
      return state;
  }
};

export default favoriteReducer;
