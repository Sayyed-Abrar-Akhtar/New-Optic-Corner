import cloudinary from 'cloudinary';

import AsyncHandler from '../middlewares/AsyncHandler';
import User from '../models/user';

// SETTING UP CLOUDINARY CONFIG
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY,
});

/*--------------------------------------------------------------------------------------*/
// @desc    Register user
// @route   POST api/auth/register
// @access  Public
const registerUser = AsyncHandler(async (req, res) => {
  const result = await cloudinary.v2.uploader.upload(req.body.avatar, {
    folder: 'new-optic-corner-abdul/users/avatars',
    public_id: `${Date.now()}`,
    width: '150',
    crop: 'scale',
    resource_type: 'auto',
  });

  const { name, username, email, password } = req.body;
  console.log(name, username, email, password);

  const userExist = await User.findOne({ email });

  const usernameExist = await User.findOne({ username });

  if (usernameExist) {
    res
      .status(200)
      .json({ success: false, message: 'Username already taken!' });
  }

  if (userExist) {
    res.status(200).json({ success: false, message: 'Account already exist!' });
  } else {
    try {
      await User.create({
        name,
        username,
        email,
        password,
        avatar: { public_id: result.public_id, url: result.secure_url },
      });

      res
        .status(201)
        .json({ success: true, message: 'Registration successfully' });
    } catch (error) {
      console.error(error);
    }
  }
});

/*--------------------------------------------------------------------------------------*/
// @desc    Current User Profile
// @route   /api/auth/profile
// @access  Private
const userProfile = AsyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.status(200).json({ success: true, user });
  } else {
    res.status(500).json({ success: false, message: 'User not found!' });
  }
});

export { registerUser, userProfile };
