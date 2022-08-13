import nc from 'next-connect';

import dbConnect from '../../../config/dbConnect';
import { newOrder } from '../../../controllers/orderControllers';

import onError from '../../../middlewares/errors';

const handler = nc({ onError });

dbConnect();

handler.post(newOrder);

export default handler;
