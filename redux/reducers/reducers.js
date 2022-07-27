import { combineReducers } from 'redux';
import { singleFileUploadReducer } from './fileUploadReducers';
import { addProductReducer, allProductsReducer } from './productReducers';
import { getThemeReducer } from './themeReducers';
import { authRegisterReducer } from './userReducers';

const reducers = combineReducers({
  allProducts: allProductsReducer,
  addProduct: addProductReducer,
  getTheme: getThemeReducer,
  authRegister: authRegisterReducer,
  singleFileUpload: singleFileUploadReducer,
});

export default reducers;
