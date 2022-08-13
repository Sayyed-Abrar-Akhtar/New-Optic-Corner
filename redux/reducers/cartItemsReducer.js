import {
  CART_ITEM_REMOVED,
  CART_ITEM_REMOVING,
  CART_ITEM_REMOVING_FAILED,
  NEW_CART_ITEM_ADDED,
  NEW_CART_ITEM_ADDING,
  NEW_CART_ITEM_ADDING_FAILED,
  NEW_CART_ITEM_RESET,
} from '../constants/cartItemsConstants';

const INITIAL_STATE = {
  cartItems: [],
};

export const newCartItemReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NEW_CART_ITEM_ADDING:
    case CART_ITEM_REMOVING:
      return { loading: true };

    case NEW_CART_ITEM_ADDED:
    case CART_ITEM_REMOVED:
      const obj = {
        loading: false,
        cartItems: [...action.payload],
      };
      localStorage.setItem('cartItems', JSON.stringify(obj.cartItems));
      return obj;

    case NEW_CART_ITEM_ADDING_FAILED:
    case CART_ITEM_REMOVING_FAILED:
      return { loading: false, error: action.payload, cartItems: [] };

    case NEW_CART_ITEM_RESET:
      localStorage.removeItem('cartItems');
      return INITIAL_STATE;
    default:
      return INITIAL_STATE;
  }
};
