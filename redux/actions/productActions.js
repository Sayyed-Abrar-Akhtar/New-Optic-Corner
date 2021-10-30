import axios from 'axios';
import absoluteUrl from 'next-absolute-url';

import {
  ALL_PRODUCT_ERROR,
  ALL_PRODUCT_LOADING,
  ALL_PRODUCT_SUCCESS,
} from '../constants/productConstants';

export const getAllProducts = (req) => async (dispatch) => {
  try {
    dispatch({ type: ALL_PRODUCT_LOADING });

    const { origin } = absoluteUrl(req);

    const { data } = await axios.get(`${origin}/api/products`);
    dispatch({ type: ALL_PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ALL_PRODUCT_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
