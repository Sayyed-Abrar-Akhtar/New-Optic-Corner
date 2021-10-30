import AsyncHandler from '../middlewares/AsyncHandler';
import Theme from '../models/theme';

/*--------------------------------------------------------------------------------------*/
// @desc    Add New Product.
// @route   POST https://localhost:3000/api/products/
// @access  Public
const customizeTheme = AsyncHandler(async (req, res) => {
  const themeData = req.body;

  const theme = await Theme.create(themeData);
  res.status(201).json({ success: true, theme });
});

export { customizeTheme };
