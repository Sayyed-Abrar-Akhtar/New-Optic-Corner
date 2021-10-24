import Product from '../models/product';

const allProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ success: true, products });
  } catch (err) {
    res.status(400).json({ success: false, mesasge: err.message });
  }
};

const fetchProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.query.id);
    if (!product) {
      return res
        .status(400)
        .json({ success: false, mesasge: 'Product not found' });
    }
    res.status(200).json({ success: true, product });
  } catch (err) {
    res.status(400).json({ success: false, mesasge: err.message });
  }
};

const addNewProduct = async (req, res) => {
  try {
    const productData = req.body;

    const product = await Product.create(productData);
    res.status(201).json({ success: true, product });
  } catch (err) {
    res.status(400).json({ success: false, mesasge: err.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.query.id);
    if (!product) {
      return res
        .status(400)
        .json({ success: false, message: 'Product not found' });
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
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.query.id);
    if (!product) {
      return res
        .status(400)
        .json({ success: false, message: 'product not found' });
    }
    await product.remove();
    res
      .status(200)
      .json({ success: true, message: 'Product deleted successfully' });
  } catch (error) {
    res.status(404).json({ success: false, message: error.message });
  }
};

export { allProducts, fetchProduct, addNewProduct, updateProduct };
