export const increaseCartItemQuantity = (allCartItems, currentCartItem) => {
  let updatedItems = [];
  const itemExist = allCartItems.find((cartItem) => {
    return cartItem.id === currentCartItem.id;
  });
  if (itemExist) {
    updatedItems = allCartItems.map((cartItem) => {
      return cartItem.id === currentCartItem.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem;
    });
  } else {
    updatedItems = [...allCartItems, { ...currentCartItem, quantity: 1 }];
  }

  return updatedItems;
};

export const removeCartItem = (allCartItems, currentCartItem) => {
  return allCartItems.filter((cartItem) => cartItem.id !== currentCartItem.id);
};

export const decreaseCartItemQuantity = (allCartItems, currentCartItem) => {
  let updatedItems = [];
  const itemExist = allCartItems.find((cartItem) => {
    return cartItem.id === currentCartItem.id;
  });
  if (itemExist.quantity === 1) {
    updatedItems = removeCartItem(allCartItems, currentCartItem);
  } else {
    updatedItems = allCartItems.map((cartItem) => {
      return cartItem.id === currentCartItem.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem;
    });
  }
  return updatedItems;
};
