import axios from 'axios';
import {
  FILE_UPLOADING,
  FILE_UPLOAD_ERROR,
  FILE_UPLOAD_SUCCESS,
} from '../constants/fileUploadConstants';

export const fileUploadSingle = (file) => async (dispatch) => {
  try {
    dispatch({ type: FILE_UPLOADING });

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'newoptic');
    formData.append('cloud_name', 'new-optic-corner-abdul');
    try {
      const response = await fetch(
        '  https://api.cloudinary.com/v1_1/new-optic-corner-abdul/image/upload',
        {
          method: 'post',
          body: formData,
        }
      );
      const data = await response.json();
      dispatch({
        type: FILE_UPLOAD_SUCCESS,
        payload: { success: true, ...data },
      });
    } catch (error) {
      dispatch({
        type: FILE_UPLOAD_ERROR,
        payload: { success: false, error: data.error },
      });
    }
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
