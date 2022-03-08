import {
  ALL_PRODUCT_ERROR,
  ALL_PRODUCT_LOADING,
  ALL_PRODUCT_SUCCESS,
  CLEAR_ERRORS,
} from '../constants/productConstants';

import productInitialState from '../../data/productInitialState';

export const allProductsReducer = (
  state = { products: productInitialState },
  action
) => {
  switch (action.type) {
    case ALL_PRODUCT_LOADING:
      return { loading: true };
    case ALL_PRODUCT_SUCCESS:
      return { loading: false, success: true, products: action.payload };
    case ALL_PRODUCT_ERROR:
      return { loading: false, error: action.payload };
    case CLEAR_ERRORS:
      return { ...state, error: null };
    default:
      return state;
  }
};
