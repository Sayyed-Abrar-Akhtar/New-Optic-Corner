import nc from 'next-connect';
import dbConnect from '../../../config/dbConnect';
import { userProfile } from '../../../controllers/authControllers';
import { isAuthenticatedUser } from '../../../middlewares/auth';
import errors from '../../../middlewares/errors';

const handler = nc({ errors });

dbConnect();

handler.use(isAuthenticatedUser).get(userProfile);

export default handler;
