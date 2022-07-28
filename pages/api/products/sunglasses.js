import nc from 'next-connect';

import dbConnect from '../../../config/dbConnect';
import { allSunglasses } from '../../../controllers/productControllers';

import onError from '../../../middlewares/errors';

const handler = nc({ onError });

dbConnect();

handler.get(allSunglasses);

export default handler;
