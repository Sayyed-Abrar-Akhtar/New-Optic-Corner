import axios from 'axios';
import absoluteUrl from 'next-absolute-url';

import {
  ADD_PRODUCT_ERROR,
  ADD_PRODUCT_LOADING,
  ADD_PRODUCT_SUCCESS,
  ALL_PRODUCT_ERROR,
  ALL_PRODUCT_LOADING,
  ALL_PRODUCT_SUCCESS,
  CONTACT_LENSES_ERROR,
  CONTACT_LENSES_LOADING,
  CONTACT_LENSES_SUCCESS,
  POWERGLASSES_ERROR,
  POWERGLASSES_LOADING,
  POWERGLASSES_SUCCESS,
  PRODUCT_ERROR,
  PRODUCT_LOADING,
  PRODUCT_SUCCESS,
  SUNGLASSES_ERROR,
  SUNGLASSES_LOADING,
  SUNGLASSES_SUCCESS,
  TRENDING_PRODUCT_ERROR,
  TRENDING_PRODUCT_LOADING,
  TRENDING_PRODUCT_SUCCESS,
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

export const getTrendingProducts = (req) => async (dispatch) => {
  try {
    dispatch({ type: TRENDING_PRODUCT_LOADING });

    const { origin } = absoluteUrl(req);

    const { data } = await axios.get(`${origin}/api/products/trending`);
    dispatch({ type: TRENDING_PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: TRENDING_PRODUCT_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getAllSunglasses = (req) => async (dispatch) => {
  try {
    dispatch({ type: SUNGLASSES_LOADING });

    const { origin } = absoluteUrl(req);

    const { data } = await axios.get(`${origin}/api/products/sunglasses`);
    dispatch({ type: SUNGLASSES_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: SUNGLASSES_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getAllPowerglasses = (req) => async (dispatch) => {
  try {
    dispatch({ type: POWERGLASSES_LOADING });

    const { origin } = absoluteUrl(req);

    const { data } = await axios.get(`${origin}/api/products/powerglasses`);
    dispatch({ type: POWERGLASSES_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: POWERGLASSES_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getAllContactLenses = (req) => async (dispatch) => {
  try {
    dispatch({ type: CONTACT_LENSES_LOADING });

    const { origin } = absoluteUrl(req);

    const { data } = await axios.get(`${origin}/api/products/contact-lenses`);
    dispatch({ type: CONTACT_LENSES_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CONTACT_LENSES_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const addProduct = (productData) => async (dispatch) => {
  try {
    dispatch({ type: ADD_PRODUCT_LOADING });
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    console.log(config, productData);
    const { data } = await axios.post(`/api/products`, productData);

    dispatch({ type: ADD_PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ADD_PRODUCT_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getProductByID = (req) => async (dispatch) => {
  const productID = req.url.split('/products/')[1];
  try {
    dispatch({ type: PRODUCT_LOADING });

    const { origin } = absoluteUrl(req);

    const { data } = await axios.get(`${origin}/api/products/${productID}`);
    dispatch({ type: PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
