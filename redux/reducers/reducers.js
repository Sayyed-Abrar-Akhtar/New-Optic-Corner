import { combineReducers } from 'redux';
import { allProductsReducer } from './productReducers';
import { getThemeReducer } from './themeReducers';

const reducers = combineReducers({
  allProducts: allProductsReducer,
  getTheme: getThemeReducer,
});

export default reducers;
