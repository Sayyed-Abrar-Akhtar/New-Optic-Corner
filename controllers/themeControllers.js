import AsyncHandler from '../middlewares/AsyncHandler';
import Theme from '../models/theme';
import ErrorHandler from '../utils/errorHandler';

/*--------------------------------------------------------------------------------------*/
// @desc    Update Theme.
// @route   PUT https://localhost:3000/api/customize/theme/:id
// @access  Public
const newTheme = AsyncHandler(async (req, res) => {
  const themeData = req.body;

  const theme = await Theme.create(themeData);
  res.status(201).json({ success: true, theme });
});

/*--------------------------------------------------------------------------------------*/
// @desc    Get Theme.
// @route   GET https://localhost:3000/api/customize/theme
// @access  Public
const getThemeDetails = AsyncHandler(async (req, res) => {
  const theme = await Theme.find({}).sort({ test: -1 }).limit(1);
  res.status(200).json({ success: true, theme: theme[0] });
});

/*--------------------------------------------------------------------------------------*/
// @desc    Update Theme.
// @route   PUT https://localhost:3000/api/customize/theme/:id
// @access  Public

const customizeTheme = AsyncHandler(async (req, res, next) => {
  const theme = await Theme.findById(req.query.id);
  console.log(theme);

  if (!theme) {
    return next(new ErrorHandler('Theme data does not exist!!', 404));
  }

  const updatedTheme = await Theme.findByIdAndUpdate(req.query.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({ success: true, theme: updatedTheme });
});

export { newTheme, customizeTheme, getThemeDetails };
