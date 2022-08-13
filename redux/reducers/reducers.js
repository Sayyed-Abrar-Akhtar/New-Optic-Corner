import { combineReducers } from 'redux';
import { newCartItemReducer } from './cartItemsReducer';
import { singleFileUploadReducer } from './fileUploadReducers';
import { orderPlacedReducer, userOrdersReducer } from './orderReducers';
import {
  addProductReducer,
  allProductsReducer,
  contactLensesReducer,
  powerglassesReducer,
  productReducer,
  sunglassesReducer,
  trendingProductsReducer,
} from './productReducers';
import { getThemeReducer } from './themeReducers';
import { authRegisterReducer } from './userReducers';

const reducers = combineReducers({
  allProducts: allProductsReducer,
  trendingProducts: trendingProductsReducer,
  sunglasses: sunglassesReducer,
  powerglasses: powerglassesReducer,
  contactLenses: contactLensesReducer,
  addProduct: addProductReducer,
  product: productReducer,
  getTheme: getThemeReducer,
  authRegister: authRegisterReducer,
  singleFileUpload: singleFileUploadReducer,
  newCartItem: newCartItemReducer,
  orderPlaced: orderPlacedReducer,
  userOrders: userOrdersReducer,
});

export default reducers;
