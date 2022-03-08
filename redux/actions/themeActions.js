import axios from 'axios';
import absoluteUrl from 'next-absolute-url';

import {
  FETCH_THEME_ERROR,
  FETCH_THEME_LOADING,
  FETCH_THEME_SUCCESS,
} from '../constants/themeConstants';

export const getThemeData = (req) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_THEME_LOADING });
    const { origin } = absoluteUrl(req);
    const { data } = await axios.get(`${origin}/api/customize/theme`);
    console.log('data from db', data, 'origin=>', origin);
    dispatch({ type: FETCH_THEME_SUCCESS, payload: data.theme });
  } catch (error) {
    dispatch({
      type: FETCH_THEME_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
