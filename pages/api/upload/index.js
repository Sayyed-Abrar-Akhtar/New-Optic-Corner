import nc from 'next-connect';
import { uploadImage } from '../../../controllers/fileUploadController';

const handler = nc();

handler.post(uploadImage);
export const config = {
  api: {
    responseLimit: '8mb',
  },
};

export default handler;
