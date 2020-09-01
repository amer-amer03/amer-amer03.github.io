import {
  FETCH_COLLECTIONS_PENDING,
  FETCH_COLLECTIONS_SUCCESS,
  FETCH_COLLECTIONS_ERROR,
  SORT_COLLECTION_BY_VALUE,
} from "./const";

const initialState = {
  collections: {},
  isPending: false,
  errorMessage: "",
};
const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COLLECTIONS_PENDING: {
      return {
        ...state,
        isPending: true,
      };
    }
    case FETCH_COLLECTIONS_SUCCESS: {
      return {
        ...state,
        isPending: false,
        collections: action.payload,
      };
    }
    case FETCH_COLLECTIONS_ERROR: {
      return {
        ...state,
        pending: false,
        errorMessage: action.payload,
      };
    }
    case SORT_COLLECTION_BY_VALUE: {
      const sortCollectionsByValue = (collections) => {
        let sortedCollection = [];
        const sortedItemsPrice = collections.items.sort((a, b) => {
          if (a.price < b.price) return -1;
          if (a.price > b.price) return 1;
          return 0;
        });
        return (sortedCollection = [
          ...collections,
          { items: sortedItemsPrice },
        ]);
      };

      return {
        ...state,
        collections: sortCollectionsByValue,
      };
    }

    default:
      return state;
  }
};

export default shopReducer;
