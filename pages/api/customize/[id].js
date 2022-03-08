import nc from 'next-connect';

import dbConnect from '../../../config/dbConnect';
import { customizeTheme } from '../../../controllers/themeControllers';

import onErrors from '../../../middlewares/errors';

const handler = nc({ onErrors });

dbConnect();

handler.put(customizeTheme);

export default handler;
