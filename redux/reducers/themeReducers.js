import {
  CLEAR_ERRORS,
  FETCH_THEME_ERROR,
  FETCH_THEME_LOADING,
  FETCH_THEME_SUCCESS,
} from '../constants/themeConstants';

import themeInitialState from '../../data/themeInitialState';

export const getThemeReducer = (
  state = { theme: themeInitialState },
  action
) => {
  switch (action.type) {
    case FETCH_THEME_LOADING:
      return { loading: true };
    case FETCH_THEME_SUCCESS:
      return { loading: false, theme: action.payload };
    case FETCH_THEME_ERROR:
      return { loading: false, error: action.payload };
    case CLEAR_ERRORS:
      return { ...state, error: null };
    default:
      return state;
  }
};
