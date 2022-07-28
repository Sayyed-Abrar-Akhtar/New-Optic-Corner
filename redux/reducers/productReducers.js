import {
  ADDED_PRODUCT_RESET,
  ADD_PRODUCT_ERROR,
  ADD_PRODUCT_LOADING,
  ADD_PRODUCT_SUCCESS,
  ALL_PRODUCT_ERROR,
  ALL_PRODUCT_LOADING,
  ALL_PRODUCT_SUCCESS,
  CLEAR_ERRORS,
  CONTACT_LENSES_ERROR,
  CONTACT_LENSES_LOADING,
  CONTACT_LENSES_SUCCESS,
  POWERGLASSES_ERROR,
  POWERGLASSES_LOADING,
  POWERGLASSES_SUCCESS,
  SUNGLASSES_ERROR,
  SUNGLASSES_LOADING,
  SUNGLASSES_SUCCESS,
  TRENDING_PRODUCT_ERROR,
  TRENDING_PRODUCT_LOADING,
  TRENDING_PRODUCT_SUCCESS,
} from '../constants/productConstants';

export const allProductsReducer = (state = { products: [] }, action) => {
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

export const trendingProductsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case TRENDING_PRODUCT_LOADING:
      return { loading: true };
    case TRENDING_PRODUCT_SUCCESS:
      return { loading: false, success: true, products: action.payload };
    case TRENDING_PRODUCT_ERROR:
      return { loading: false, error: action.payload };
    case CLEAR_ERRORS:
      return { ...state, error: null };
    default:
      return state;
  }
};

export const sunglassesReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case SUNGLASSES_LOADING:
      return { loading: true };
    case SUNGLASSES_SUCCESS:
      return { loading: false, success: true, products: action.payload };
    case SUNGLASSES_ERROR:
      return { loading: false, error: action.payload };
    case CLEAR_ERRORS:
      return { ...state, error: null };
    default:
      return state;
  }
};
export const powerglassesReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case POWERGLASSES_LOADING:
      return { loading: true };
    case POWERGLASSES_SUCCESS:
      return { loading: false, success: true, products: action.payload };
    case POWERGLASSES_ERROR:
      return { loading: false, error: action.payload };
    case CLEAR_ERRORS:
      return { ...state, error: null };
    default:
      return state;
  }
};
export const contactLensesReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case CONTACT_LENSES_LOADING:
      return { loading: true };
    case CONTACT_LENSES_SUCCESS:
      return { loading: false, success: true, products: action.payload };
    case CONTACT_LENSES_ERROR:
      return { loading: false, error: action.payload };
    case CLEAR_ERRORS:
      return { ...state, error: null };
    default:
      return state;
  }
};

export const addProductReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case ADD_PRODUCT_LOADING:
      return { loading: true };
    case ADD_PRODUCT_SUCCESS:
      return { loading: false, product: action.payload };
    case ADD_PRODUCT_ERROR:
      return { loading: false, error: action.payload };
    case ADDED_PRODUCT_RESET:
      return { loading: false, product: {} };
    default:
      return state;
  }
};
