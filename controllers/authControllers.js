import AsyncHandler from '../middlewares/AsyncHandler';
import User from '../models/user';

/*--------------------------------------------------------------------------------------*/
// @desc    Register user
// @route   POST https://localhost:3000/api/auth/register
// @access  Public
const registerUser = AsyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const user = await User.create({
    name,
    email,
    password,
    avatar: { public_id: 'PUBLIC_ID', url: 'URL' },
  });

  res.status(201).json({ success: true, message: 'Registration successfully' });
});

export { registerUser };
