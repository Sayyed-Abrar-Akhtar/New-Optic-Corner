import { combineReducers } from 'redux';
import { singleFileUploadReducer } from './fileUploadReducers';
import {
  addProductReducer,
  allProductsReducer,
  contactLensesReducer,
  powerglassesReducer,
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
  getTheme: getThemeReducer,
  authRegister: authRegisterReducer,
  singleFileUpload: singleFileUploadReducer,
});

export default reducers;
