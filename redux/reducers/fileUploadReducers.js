import {
  FILE_UPLOADING,
  FILE_UPLOAD_ERROR,
  FILE_UPLOAD_RESET,
  FILE_UPLOAD_SUCCESS,
} from '../constants/fileUploadConstants';

const INITIAL_STATE = {};

export const singleFileUploadReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FILE_UPLOADING:
      return { uploading: true };
    case FILE_UPLOAD_SUCCESS:
      return { uploading: false, imageData: action.payload };
    case FILE_UPLOAD_ERROR:
      return { uploading: false, error: action.payload };
    case FILE_UPLOAD_RESET:
      return INITIAL_STATE;
    default:
      return state;
  }
};
