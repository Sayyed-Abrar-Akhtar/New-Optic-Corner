import cloudinary from 'cloudinary';
import {
  PRODUCT_TAG_TRENDING,
  PRODUCT_TYPE_CONTACT_LENS,
  PRODUCT_TYPE_POWERGLASSES,
  PRODUCT_TYPE_SUNGLASSES,
} from '../constant/GlobalConstants';

import AsyncHandler from '../middlewares/AsyncHandler';
import Product from '../models/product';
import ErrorHandler from '../utils/errorHandler';

// SETTING UP CLOUDINARY CONFIG
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY,
});

/*--------------------------------------------------------------------------------------*/
// @desc    Fetch All Products.
// @route   GET https://localhost:3000/api/products/
// @access  Public
// const allProducts = AsyncHandler(async (req, res) => {
//   const resPerPage = 6;

//   const productsCount = await Product.countDocuments();

//   const apiFeatures = new APIFeatures(Product.find(), req.query)
//     .search()
//     .filter();

//   let products = await apiFeatures.query;

//   let filteredProductsCount = products.length;

//   apiFeatures.pagination(resPerPage);

//   products = await apiFeatures.query.clone();

//   res.status(200).json({
//     success: true,
//     resPerPage,
//     productsCount,
//     filteredProductsCount,
//     products,
//   });
// });

/*--------------------------------------------------------------------------------------*/
// @desc    Fetch All Products.
// @route   GET https://localhost:3000/api/products/
// @access  Public
const allProducts = AsyncHandler(async (req, res) => {
  const products = await Product.find().sort({ createdAt: -1 });
  res.status(200).json({
    success: true,
    data: products,
  });
});

/*--------------------------------------------------------------------------------------*/
// @desc    Fetch All Sunglasses.
// @route   GET https://localhost:3000/api/products/
// @access  Public
const allSunglasses = AsyncHandler(async (req, res) => {
  const products = await Product.find({
    product_type: PRODUCT_TYPE_SUNGLASSES,
  }).sort({ createdAt: -1 });
  res.status(200).json({
    success: true,
    data: products,
  });
});

/*--------------------------------------------------------------------------------------*/
// @desc    Fetch All Sunglasses.
// @route   GET https://localhost:3000/api/products/
// @access  Public
const allPowerGlasses = AsyncHandler(async (req, res) => {
  const products = await Product.find({
    product_type: PRODUCT_TYPE_POWERGLASSES,
  }).sort({ createdAt: -1 });
  res.status(200).json({
    success: true,
    data: products,
  });
});

/*--------------------------------------------------------------------------------------*/
// @desc    Fetch All Sunglasses.
// @route   GET https://localhost:3000/api/products/
// @access  Public
const allContactLenses = AsyncHandler(async (req, res) => {
  const products = await Product.find({
    product_type: PRODUCT_TYPE_CONTACT_LENS,
  }).sort({ createdAt: -1 });
  res.status(200).json({
    success: true,
    data: products,
  });
});

/*--------------------------------------------------------------------------------------*/
// @desc    Fetch All Sunglasses.
// @route   GET https://localhost:3000/api/products/
// @access  Public
const trendingProducts = AsyncHandler(async (req, res) => {
  const products = await Product.find().sort({ createdAt: -1 }).limit(4);

  const trendingProducts = products
    .filter((item) =>
      item.tags ? item.tags.includes(PRODUCT_TAG_TRENDING) : []
    )
    .filter((item, idx) => idx < 4);
  if (trendingProducts) {
    res.status(200).json({
      success: true,
      data: trendingProducts,
    });
  } else {
    res.status(500).json({
      success: false,
      message: 'No products found',
    });
  }
});

/*--------------------------------------------------------------------------------------*/
// @desc    Fetch Single Products.
// @route   GET https://localhost:3000/api/products/:id
// @access  Public
const fetchProduct = AsyncHandler(async (req, res, next) => {
  const product = await Product.findById(req.query.id);

  if (!product) {
    return next(new ErrorHandler('Product does not exist!!', 404));
  }
  res.status(200).json({ success: true, product });
});

/*--------------------------------------------------------------------------------------*/
// @desc    Add New Product.
// @route   POST https://localhost:3000/api/products/
// @access  Public
const addNewProduct = AsyncHandler(async (req, res) => {
  const productData = req.body;

  const productObj = {
    ...productData,
    featured_image: productData.variant[0].images[0].secure_url,
    featured_price: productData.variant[0].price,
  };
  console.log(productObj);
  const product = await Product.create(productObj);
  console.log('product', product, '<= the end::::');
  if (!product) {
    return next(new ErrorHandler('Product failed to create!!', 404));
  }

  res.status(201).json({ success: true, data: product });
});

const getImagesLink = async (image) => {
  let imgObjArr = [];
  const result = await cloudinary.v2.uploader.upload(image, {
    folder: 'new-optic-corner-abdul/products',
    public_id: `${Date.now()}`,
    width: '150',
    crop: 'scale',
    resource_type: 'auto',
  });

  imgObjArr.push({ public_id: result.public_id, url: result.secure_url });

  return imgObjArr;
};

/*--------------------------------------------------------------------------------------*/
// @desc    Update Product.
// @route   UPDATE https://localhost:3000/api/products/:id
// @access  Public
const updateProduct = AsyncHandler(async (req, res, next) => {
  const product = await Product.findById(req.query.id);
  if (!product) {
    return next(new ErrorHandler('Product does not exist!!', 404));
  }

  const updatedProduct = await Product.findByIdAndUpdate(
    req.query.id,
    req.body,
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );

  res.status(200).json({ success: true, product: updatedProduct });
});

/*--------------------------------------------------------------------------------------*/
// @desc    Delete Product.
// @route   DELETE https://localhost:3000/api/products/:id
// @access  Public
export const deleteProduct = AsyncHandler(async (req, res, next) => {
  const product = await Product.findById(req.query.id);
  if (!product) {
    return next(new ErrorHandler('Product does not exist!!', 404));
  }
  await product.remove();
  res
    .status(200)
    .json({ success: true, message: 'Product deleted successfully' });
});

export {
  allProducts,
  allSunglasses,
  allPowerGlasses,
  allContactLenses,
  trendingProducts,
  fetchProduct,
  addNewProduct,
  updateProduct,
};
