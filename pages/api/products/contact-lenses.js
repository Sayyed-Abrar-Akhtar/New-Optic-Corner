import nc from 'next-connect';

import dbConnect from '../../../config/dbConnect';
import { allContactLenses } from '../../../controllers/productControllers';

import onError from '../../../middlewares/errors';

const handler = nc({ onError });

dbConnect();

handler.get(allContactLenses);

export default handler;
