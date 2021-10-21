import Product from '../models/product';

const allProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ success: true, products });
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

export { allProducts, addNewProduct };
