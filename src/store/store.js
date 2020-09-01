import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";
import rootReducer from "./rootReducer";

const middlewares = [thunk, createLogger({ collapsed: true })];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);
