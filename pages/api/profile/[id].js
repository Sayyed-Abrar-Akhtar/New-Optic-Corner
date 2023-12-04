import nc from 'next-connect';
import dbConnect from '../../../config/dbConnect';
import { fetchUserData } from '../../../controllers/authControllers';
import errors from '../../../middlewares/errors';

const handler = nc({ errors });

dbConnect();

handler.get(fetchUserData);

export default handler;
