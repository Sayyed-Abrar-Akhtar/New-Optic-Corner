import nc from 'next-connect';

import dbConnect from '../../../config/dbConnect';
import {
  allProducts,
  addNewProduct,
} from '../../../controllers/productControllers';

const handler = nc();

dbConnect();

handler.get(allProducts);
handler.post(addNewProduct);

export default handler;
