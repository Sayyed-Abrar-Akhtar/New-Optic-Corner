import { combineReducers } from 'redux';
import { allProductsReducer } from './productReducers';
import { getThemeReducer } from './themeReducers';
import { authRegisterReducer } from './userReducers';

const reducers = combineReducers({
  allProducts: allProductsReducer,
  getTheme: getThemeReducer,
  authRegister: authRegisterReducer,
});

export default reducers;
