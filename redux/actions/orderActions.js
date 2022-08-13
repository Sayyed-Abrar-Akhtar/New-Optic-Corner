import axios from 'axios';
import {
  FETCH_USER_ORDERS_FAILURE,
  FETCH_USER_ORDERS_START,
  FETCH_USER_ORDERS_SUCCESS,
  PLACE_ORDER_FAILURE,
  PLACE_ORDER_START,
  PLACE_ORDER_SUCCESS,
} from '../constants/orderConstants';

export const placeOrder = (reqBody) => async (dispatch) => {
  dispatch({ type: PLACE_ORDER_START });

  try {
    const { data } = await axios.post(`/api/order`, reqBody);

    console.log(data);
    dispatch({ type: PLACE_ORDER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PLACE_ORDER_FAILURE,
      payload: error.message ? error.message : error,
    });
  }
};

export const getUsersOrder = (user) => async (dispatch) => {
  dispatch({ type: FETCH_USER_ORDERS_START });
  try {
    const { data } = await axios.get(`/api/order/${user}`);
    //console.log(data);
    dispatch({
      type: FETCH_USER_ORDERS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    //console.log(error);
    dispatch({
      type: FETCH_USER_ORDERS_FAILURE,
      payload: error.message ? error.message : error,
    });
  }
};
