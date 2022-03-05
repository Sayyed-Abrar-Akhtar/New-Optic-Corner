import { CLEAR_ERRORS } from '../constants/productConstants';
import {
  RESET_USER,
  USER_REGISTRATION_ERROR,
  USER_REGISTRATION_LOADING,
  USER_REGISTRATION_SUCCESS,
} from '../constants/userConstants';

export const authRegisterReducer = (state = { user: null }, action) => {
  switch (action.type) {
    case USER_REGISTRATION_LOADING:
      return { loading: true };
    case USER_REGISTRATION_SUCCESS:
      return { loading: false, user: { ...action.payload } };
    case USER_REGISTRATION_ERROR:
      return { loading: false, error: action.payload };
    case RESET_USER:
      return { loading: false, user: null };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
