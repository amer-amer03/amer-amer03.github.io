import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectIsCartDropdownHidden = createSelector(
  [selectCart],
  (cart) => cart.isCartDropdownHidden
);

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsQuantity = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((quantity, item) => item.quantity + quantity, 0)
);

export const selectCartItemsTotalPrice = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (quantity, item) => quantity + item.quantity * item.price,
      0
    )
);
