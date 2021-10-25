import nc from 'next-connect';

import dbConnect from '../../../config/dbConnect';
import {
  deleteProduct,
  fetchProduct,
  updateProduct,
} from '../../../controllers/productControllers';

import onError from '../../../middlewares/errors';

const handler = nc({ onError });

dbConnect();

handler.get(fetchProduct);
handler.put(updateProduct);
handler.delete(deleteProduct);

export default handler;
