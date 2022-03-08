import nc from 'next-connect';
import dbConnect from '../../../config/dbConnect';
import { getThemeDetails } from '../../../controllers/themeControllers';

import onError from '../../../middlewares/errors';

const handler = nc({ onError });

dbConnect();

//handler.post(newTheme);
handler.get(getThemeDetails);

export default handler;
