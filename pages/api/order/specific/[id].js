import nc from 'next-connect';
import dbConnect from '../../../../config/dbConnect';
import { getOrder } from '../../../../controllers/orderControllers';

import onError from '../../../../middlewares/errors';

const handler = nc({ onError });

handler.get(getOrder);

dbConnect();

export default handler;
