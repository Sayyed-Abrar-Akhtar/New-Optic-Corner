import nc from 'next-connect';

import dbConnect from '../../../config/dbConnect';
import {
  allProducts,
  addNewProduct,
} from '../../../controllers/productControllers';

import onError from '../../../middlewares/errors';

const handler = nc({ onError });

dbConnect();

handler.get(allProducts);
handler.post(addNewProduct);

export default handler;
