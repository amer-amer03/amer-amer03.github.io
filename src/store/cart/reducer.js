import {
  TOGGLE_CART_HIDDEN,
  ADD_CART_ITEM,
  REMOVE_CART_ITEM,
  INCREASE_CART_ITEM_QUANTITY,
  DECREASE_CART_ITEM_QUANTITY,
} from "./consts";
import {
  removeCartItem,
  increaseCartItemQuantity,
  decreaseCartItemQuantity,
} from "./utils";

const initialState = {
  isCartDropdownHidden: true,
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        isCartDropdownHidden: !state.isCartDropdownHidden,
      };
    case ADD_CART_ITEM: {
      const updatedItems = increaseCartItemQuantity(
        state.cartItems,
        action.payload
      );
      return {
        ...state,
        cartItems: updatedItems,
      };
    }
    case REMOVE_CART_ITEM:
      const updatedItems = removeCartItem(state.cartItems, action.payload);
      return {
        ...state,
        cartItems: updatedItems,
      };
    case INCREASE_CART_ITEM_QUANTITY: {
      const updatedItems = increaseCartItemQuantity(
        state.cartItems,
        action.payload
      );
      return {
        ...state,
        cartItems: updatedItems,
      };
    }
    case DECREASE_CART_ITEM_QUANTITY: {
      const updatedItems = decreaseCartItemQuantity(
        state.cartItems,
        action.payload
      );
      return {
        ...state,
        cartItems: updatedItems,
      };
    }

    default:
      return state;
  }
};
export default cartReducer;
