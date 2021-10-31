import nc from 'next-connect';

import dbConnect from '../../../config/dbConnect';
import { updateTheme } from '../../../controllers/themeControllers';

import onErrors from '../../../middlewares/errors';

const handler = nc({ onErrors });

dbConnect();

handler.put(updateTheme);

export default handler;
