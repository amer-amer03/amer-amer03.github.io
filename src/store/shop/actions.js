import {
  FETCH_COLLECTIONS_PENDING,
  FETCH_COLLECTIONS_SUCCESS,
  FETCH_COLLECTIONS_ERROR,
  SORT_COLLECTION_BY_VALUE,
} from "./const";
import { firestore } from "../../firebase/firebase";
import { convertCollections } from "./utils";

const fetchCollectionsPending = () => {
  return {
    type: FETCH_COLLECTIONS_PENDING,
  };
};

const fetchCollectionsSuccess = (collections) => {
  return {
    type: FETCH_COLLECTIONS_SUCCESS,
    payload: collections,
  };
};

const fetchCollectionsError = (errorMessage) => {
  return {
    type: FETCH_COLLECTIONS_ERROR,
    payload: errorMessage,
  };
};

export const fetchCollections = () => {
  return (dispatch) => {
    dispatch(fetchCollectionsPending());

    const collectionRef = firestore.collection("collection");

    collectionRef
      .get()
      .then((snapshot) => {
        const convertedCollections = convertCollections(snapshot);
        dispatch(fetchCollectionsSuccess(convertedCollections));
      })
      .catch((error) => {
        dispatch(fetchCollectionsError(error.message));
      });
  };
};

export const sortCollectionsByValue = (collections) => {
  return {
    type: SORT_COLLECTION_BY_VALUE,
    payload: collections,
  };
};
