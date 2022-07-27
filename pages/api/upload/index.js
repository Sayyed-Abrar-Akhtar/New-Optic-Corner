import nc from 'next-connect';
import { uploadImage } from '../../../controllers/fileUploadController';

const handler = nc();

handler.post(uploadImage);

export default handler;
