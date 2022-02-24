import nc from 'next-connect';
import dbConnect from '../../../config/dbConnect';
import { registerUser } from '../../../controllers/authControllers';
import errors from '../../../middlewares/errors';

const handler = nc({ errors });

dbConnect();

handler.post(registerUser);

export default handler;
