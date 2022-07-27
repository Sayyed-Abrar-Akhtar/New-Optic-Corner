import cloudinary from 'cloudinary';

// SETTING UP CLOUDINARY CONFIG
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY,
});

const uploadImage = async (req, res) => {
  const { image } = req.body;

  try {
    const result = await cloudinary.v2.uploader.upload(image, {
      folder: 'new-optic-corner-abdul/products/variants',
      public_id: `${Date.now()}`,
      width: '150',
      crop: 'scale',
      resource_type: 'auto',
    });
    // console.log(result);

    if (result) {
      res.status(201).json({
        success: true,
        id: result.asset_id,
        secure_url: result.secure_url,
      });
    }
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};

export { uploadImage };
