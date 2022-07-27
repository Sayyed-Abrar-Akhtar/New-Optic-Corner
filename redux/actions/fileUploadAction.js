import axios from 'axios';
import {
  FILE_UPLOADING,
  FILE_UPLOAD_ERROR,
  FILE_UPLOAD_SUCCESS,
} from '../constants/fileUploadConstants';

export const fileUploadSingle = (blob) => async (dispatch) => {
  try {
    dispatch({ type: FILE_UPLOADING });

    const { data } = await axios.post('/api/upload', blob);

    dispatch({ type: FILE_UPLOAD_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: FILE_UPLOAD_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
