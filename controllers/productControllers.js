import AsyncHandler from '../middlewares/AsyncHandler';
import Product from '../models/product';
import APIFeatures from '../utils/apiFeatures';
import ErrorHandler from '../utils/errorHandler';

/*--------------------------------------------------------------------------------------*/
// @desc    Fetch All Products.
// @route   GET https://localhost:3000/api/products/
// @access  Public
const allProducts = AsyncHandler(async (req, res) => {
  const resPerPage = 3;

  const productsCount = await Product.countDocuments();

  const apiFeatures = new APIFeatures(Product.find(), req.query)
    .search()
    .filter();

  let products = await apiFeatures.query;

  let filteredProductsCount = products.length;

  apiFeatures.pagination(resPerPage);

  products = await apiFeatures.query.clone();

  res.status(200).json({
    success: true,
    resPerPage,
    productsCount,
    filteredProductsCount,
    products,
  });
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

  const product = await Product.create(productData);
  res.status(201).json({ success: true, product });
});

/*--------------------------------------------------------------------------------------*/
// @desc    Update Room.
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

export { allProducts, fetchProduct, addNewProduct, updateProduct };
