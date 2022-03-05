import axios from 'axios';
import {
  CLEAR_ERRORS,
  RESET_USER,
  USER_REGISTRATION_ERROR,
  USER_REGISTRATION_LOADING,
  USER_REGISTRATION_SUCCESS,
} from '../constants/userConstants';

// REGISTER USER ACTION
export const authRegister = (bodyData) => async (dispatch) => {
  try {
    dispatch({ type: USER_REGISTRATION_LOADING });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axios.post('/api/auth/register', bodyData, config);

    dispatch({ type: USER_REGISTRATION_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_REGISTRATION_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// CLEAR ERRORS
export const clearErrors = () => (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};

export const resetUserData = () => (dispatch) => {
  dispatch({ type: RESET_USER });
};
