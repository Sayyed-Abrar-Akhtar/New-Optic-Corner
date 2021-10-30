import nc from 'next-connect';
import dbConnect from '../../../config/dbConnect';
import { customizeTheme } from '../../../controllers/themeControllers';

import onError from '../../../middlewares/errors';

const handler = nc({ onError });

dbConnect();

handler.post(customizeTheme);

export default handler;
