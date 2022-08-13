import {
  FETCH_USER_ORDERS_FAILURE,
  FETCH_USER_ORDERS_START,
  FETCH_USER_ORDERS_SUCCESS,
  PLACE_ORDER_FAILURE,
  PLACE_ORDER_RESET,
  PLACE_ORDER_START,
  PLACE_ORDER_SUCCESS,
} from '../constants/orderConstants';

const NEW_ORDER_INITIAL_STATE = {
  data: null,
  success: false,
  error: null,
};

export const orderPlacedReducer = (state = NEW_ORDER_INITIAL_STATE, action) => {
  switch (action.type) {
    case PLACE_ORDER_START:
      return { loading: true };

    case PLACE_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        success: action.payload.success,
        order: action.payload.data,
      };

    case PLACE_ORDER_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };
    case PLACE_ORDER_RESET:
      return NEW_ORDER_INITIAL_STATE;
    default:
      return NEW_ORDER_INITIAL_STATE;
  }
};

const USER_ORDERS_INITIAL_STATE = [];

export const userOrdersReducer = (
  state = USER_ORDERS_INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case FETCH_USER_ORDERS_START:
      return { loading: true };

    case FETCH_USER_ORDERS_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        orders: action.payload.orders,
      };

    case FETCH_USER_ORDERS_FAILURE:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
