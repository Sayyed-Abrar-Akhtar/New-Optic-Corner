import {
  CART_ITEM_REMOVED,
  CART_ITEM_REMOVING,
  CART_ITEM_REMOVING_FAILED,
  NEW_CART_ITEM_ADDED,
  NEW_CART_ITEM_ADDING,
  NEW_CART_ITEM_ADDING_FAILED,
} from '../constants/cartItemsConstants';

export const addItemsToCart = (cartItems) => (dispatch) => {
  dispatch({ type: NEW_CART_ITEM_ADDING });

  try {
    dispatch({ type: NEW_CART_ITEM_ADDED, payload: cartItems });
  } catch (error) {
    dispatch({ type: NEW_CART_ITEM_ADDING_FAILED, payload: error });
  }
};

export const getCartItems = () => (dispatch) => {
  dispatch({ type: NEW_CART_ITEM_ADDING });

  try {
    let cartItems = JSON.parse(localStorage.getItem('cartItems'));
    if (cartItems === null) cartItems = {};
    dispatch({ type: NEW_CART_ITEM_ADDED, payload: cartItems });
  } catch (error) {
    dispatch({ type: NEW_CART_ITEM_ADDING_FAILED, payload: error });
  }
};

export const delCartItem = (id) => (dispatch) => {
  dispatch({ type: CART_ITEM_REMOVING });

  try {
    let cartItems = JSON.parse(localStorage.getItem('cartItems'));
    if (cartItems.length === 0) {
      return (cartItems = []);
    }
    cartItems = cartItems.filter((cartItem) => cartItem.item.variant !== id);

    dispatch({
      type: CART_ITEM_REMOVED,
      payload: cartItems.length > 0 ? cartItems : [],
    });
  } catch (error) {
    dispatch({ type: CART_ITEM_REMOVING_FAILED, payload: error });
  }
};
