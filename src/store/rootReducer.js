import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./user/reducer";
import cartReducer from "./cart/reducer";
import shopReducer from "./shop/reducer";
import favoriteReducer from "./favorite/reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "favorite"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  shop: shopReducer,
  favorite: favoriteReducer,
});

export default persistReducer(persistConfig, rootReducer);
